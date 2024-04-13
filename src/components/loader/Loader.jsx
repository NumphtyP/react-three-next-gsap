import { OrbitControls, useFBO, useProgress } from '@react-three/drei'
import { Canvas, useFrame, extend, createPortal } from '@react-three/fiber'
import { useMemo, useRef, useEffect } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import SimulationMaterial from './SimulationMaterial'

import vertexShader from '!!raw-loader!./shaders/vertexShader.glsl'
import fragmentShader from '!!raw-loader!./shaders/fragmentShader.glsl'

extend({ SimulationMaterial: SimulationMaterial })

const FBOParticles = () => {
  const size = 128

  const points = useRef()
  const simulationMaterialRef = useRef()

  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1)
  const positions = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0])
  const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0])

  const renderTarget = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    stencilBuffer: false,
    type: THREE.FloatType,
  })

  const particlesPosition = useMemo(() => {
    const length = size * size
    const particles = new Float32Array(length * 3)
    for (let i = 0; i < length; i++) {
      let i3 = i * 3
      particles[i3 + 0] = (i % size) / size
      particles[i3 + 1] = i / size / size
    }
    return particles
  }, [size])

  const uniforms = useMemo(
    () => ({
      uPositions: {
        value: null,
      },
    }),
    [],
  )

  useFrame((state) => {
    const { gl, clock } = state

    gl.setRenderTarget(renderTarget)
    gl.clear()
    gl.render(scene, camera)
    gl.setRenderTarget(null)

    points.current.material.uniforms.uPositions.value = renderTarget.texture

    simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime
  })

  return (
    <>
      {createPortal(
        <mesh>
          <simulationMaterial ref={simulationMaterialRef} args={[size]} />
          <bufferGeometry>
            <bufferAttribute attach='attributes-position' count={positions.length / 3} array={positions} itemSize={3} />
            <bufferAttribute attach='attributes-uv' count={uvs.length / 2} array={uvs} itemSize={2} />
          </bufferGeometry>
        </mesh>,
        scene,
      )}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach='attributes-position'
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    </>
  )
}

const Loader = ({ props }) => {
  const titleParallaxRef = useRef(null)
  const canvasRef = useRef(null)
  const headerStrokeRef = useRef(null)
  const headerRef = useRef(null)

  const { started, setStarted } = props
  const { progress, total, loaded, item } = useProgress()

  useEffect(() => {
    console.log(progress, total, loaded, item)
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true)
      }, 5000)
    }
  }, [progress, total, loaded, item])

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Your animation logic remains the same
      gsap.to(titleParallaxRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top top',
          scrub: 1.9,
        },
        yPercent: -150,
      })
      gsap.to(headerStrokeRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top top',
          scrub: 1.9,
        },
        xPercent: 50,
      })
      gsap.to(canvasRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top top',
          scrub: 1.9,
        },
        xPercent: -70,
      })
    }, wrapper)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className='relative m-0 box-border flex h-screen w-full items-center justify-center p-0 px-[70px] font-extrabold'>
        <div
          className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
  flex items-center justify-center bg-indigo-50 
  ${started ? 'opacity-0' : 'opacity-100'}`}
        >
          <h1
            className='relative z-[2] m-0 text-center text-[85px] uppercase text-[color:var(#fff)] mix-blend-difference'
            data-splitting=''
            ref={titleParallaxRef}
          >
            <span className='inline-block will-change-transform'>FULLSCREN</span>
            <span className='inline-block text-transparent'>MEROVINGIAN</span>
          </h1>

          <div className='fixed text-4xl font-bold text-indigo-900 md:text-9xl'>
            <Canvas camera={{ position: [1.5, 1.5, 2.5] }} ref={canvasRef} className='block size-full object-cover'>
              <ambientLight intensity={0.5} />
              <FBOParticles />
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loader
