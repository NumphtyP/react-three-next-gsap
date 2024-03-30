import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'
import glsl from 'babel-plugin-glsl/macro'
import { extend, useFrame, useLoader } from '@react-three/fiber'
import './styles.css'

export default function FireRegimes() {
  return (
    <>
      <div id='bg-[#1f1e1e] m-0 p-0 flex grid grid-cols-[1fr_1fr] text-center mx-auto my-0 text-slate-500 hover:text-blue-600'>
        <header className='relative h-[60vh] w-full bg-cover bg-center'>
          <Canvas camera={{ position: [0, -4, 5], fov: 50 }}>
            <color attach='background' args={['#0a0a0a']} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Suspense fallback={null}>
              <Fire scale={7} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </header>
        <article className='absolute right-4 top-4 max-w-[40%] text-right'>
          <aside className='px-4 py-8'>
            <h3 className='mb-20 mt-0 font-sans text-6xl leading-4 tracking-normal'>
              Marley was dead: to begin with. There is no doubt whatever about that. The register of his burial was
              signed by the clergyman, the clerk, the undertaker, and the chief mourner.
            </h3>
          </aside>
          <article className='mt-0 columns-3'>
            <p className='mb-16 mt-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
              Marley was dead: to begin with. There is no doubt whatever about that. The register of his burial was
              signed by the clergyman, the clerk, the undertaker, and the chief mourner. Scrooge signed it: and
              Scrooge’s name was good upon ’Change, for anything he chose to put his hand to. Old Marley was as dead as
              a door-nail.
            </p>
            <p className='mb-16 mt-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
              Mind! I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a
              door-nail. I might have been inclined, myself, to regard a coffin-nail as the deadest piece of ironmongery
              in the trade. But the wisdom of our ancestors is in the simile; and my unhallowed hands shall not disturb
              it, or the Country’s done for. You will therefore permit me to repeat, emphatically, that Marley was as
              dead as a door-nail.
            </p>
            <p className='mb-16 mt-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
              Scrooge knew he was dead? Of course he did. How could it be otherwise? Scrooge and he were partners for I
              don’t know how many years. Scrooge was his sole executor, his sole administrator, his sole assign, his
              sole residuary legatee, his sole friend, and sole mourner. And even Scrooge was not so dreadfully cut up
              by the sad event, but that he was an excellent man of business on the very day of the funeral, and
              solemnised it with an undoubted bargain.
            </p>
            <p className='mb-16 mt-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
              The mention of Marley’s funeral brings me back to the point I started from. There is no doubt that Marley
              was dead. This must be distinctly understood, or nothing wonderful can come of the story I am going to
              relate. If we were not perfectly convinced that Hamlet’s Father died before the play began, there would be
              nothing more remarkable in his taking a stroll at night, in an easterly wind, upon his own ramparts, than
              there would be in any other middle-aged gentleman rashly turning out after dark in a breezy spot—say Saint
              Paul’s Churchyard for instance—literally to astonish his son’s weak mind.
            </p>
            <p className='mb-16 mt-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
              Scrooge never painted out Old Marley’s name. There it stood, years afterwards, above the warehouse door:
              Scrooge and Marley. The firm was known as Scrooge and Marley. Sometimes people new to the business called
              Scrooge Scrooge, and sometimes Marley, but he answered to both names. It was all the same to him.
            </p>
          </article>
        </article>
      </div>
    </>
  )
}

class FireMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      defines: { ITERATIONS: '10', OCTIVES: '3' },
      uniforms: {
        fireTex: { type: 't', value: null },
        color: { type: 'c', value: null },
        time: { type: 'f', value: 0.0 },
        seed: { type: 'f', value: 0.0 },
        invModelMatrix: { type: 'm4', value: null },
        scale: { type: 'v3', value: null },
        noiseScale: { type: 'v4', value: new THREE.Vector4(1, 2, 1, 0.3) },
        magnitude: { type: 'f', value: 2.5 },
        lacunarity: { type: 'f', value: 3.0 },
        gain: { type: 'f', value: 0.6 },
      },
      vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        }`,
      fragmentShader: glsl`
        #pragma glslify: snoise = require(glsl-noise/simplex/3d.glsl) 

        uniform vec3 color;
        uniform float time;
        uniform float seed;
        uniform mat4 invModelMatrix;
        uniform vec3 scale;
        uniform vec4 noiseScale;
        uniform float magnitude;
        uniform float lacunarity;
        uniform float gain;
        uniform sampler2D fireTex;
        varying vec3 vWorldPos;              

        float turbulence(vec3 p) {
          float sum = 0.0;
          float freq = 1.0;
          float amp = 1.0;
          for(int i = 0; i < OCTIVES; i++) {
            sum += abs(snoise(p * freq)) * amp;
            freq *= lacunarity;
            amp *= gain;
          }
          return sum;
        }

        vec4 samplerFire (vec3 p, vec4 scale) {
          vec2 st = vec2(sqrt(dot(p.xz, p.xz)), p.y);
          if(st.x <= 0.0 || st.x >= 1.0 || st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
          p.y -= (seed + time) * scale.w;
          p *= scale.xyz;
          st.y += sqrt(st.y) * magnitude * turbulence(p);
          if(st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
          return texture2D(fireTex, st);
        }

        vec3 localize(vec3 p) {
          return (invModelMatrix * vec4(p, 1.0)).xyz;
        }

        void main() {
          vec3 rayPos = vWorldPos;
          vec3 rayDir = normalize(rayPos - cameraPosition);
          float rayLen = 0.0288 * length(scale.xyz);
          vec4 col = vec4(0.0);
          for(int i = 0; i < ITERATIONS; i++) {
            rayPos += rayDir * rayLen;
            vec3 lp = localize(rayPos);
            lp.y += 0.5;
            lp.xz *= 2.0;
            col += samplerFire(lp, noiseScale);
          }
          col.a = col.r;
          gl_FragColor = col;
        }`,
    })
  }
}

extend({ FireMaterial })

function Fire({ color, ...props }) {
  const ref = useRef()
  const texture = useLoader(THREE.TextureLoader, '/fire.png')
  useFrame((state) => {
    const invModelMatrix = ref.current.material.uniforms.invModelMatrix.value
    ref.current.updateMatrixWorld()
    invModelMatrix.copy(ref.current.matrixWorld).invert()
    ref.current.material.uniforms.time.value = state.clock.elapsedTime
    ref.current.material.uniforms.invModelMatrix.value = invModelMatrix
    ref.current.material.uniforms.scale.value = ref.current.scale
  })
  useLayoutEffect(() => {
    texture.magFilter = texture.minFilter = THREE.LinearFilter
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping
    ref.current.material.uniforms.fireTex.value = texture
    ref.current.material.uniforms.color.value = color || new THREE.Color(0xeeeeee)
    ref.current.material.uniforms.invModelMatrix.value = new THREE.Matrix4()
    ref.current.material.uniforms.scale.value = new THREE.Vector3(1, 1, 1)
    ref.current.material.uniforms.seed.value = Math.random() * 19.19
  }, [])
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry />
      <fireMaterial transparent depthWrite={false} depthTest={false} />
    </mesh>
  )
}
