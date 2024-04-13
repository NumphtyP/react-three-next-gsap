'use client'
import { useRef, useState, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { Loader, Float, useGLTF, PresentationControls, Environment, Html } from '@react-three/drei'
import { GlobalCanvas, ScrollScene, UseCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'

// Need to start preloading assets to make sure Loader
// is not removed before the canvas children mounts
useGLTF.preload('/watch-v1.glb')

export default function Conflgration() {
  const eventSource = useRef()
  const [isTouch, setTouch] = useState(false)
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    setTouch(isTouch)
  }, [])
  return (
    <div ref={eventSource}>
      {/* Set eventSource so events works in both Html and Canvas */}
      <GlobalCanvas
        eventSource={eventSource}
        eventPrefix='client'
        scaleMultiplier={0.01}
        camera={{ fov: 33 }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[14, 14, 14]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
        <Environment preset='city' />
        {/* Children from UseCanvas are automatically injected here */}
      </GlobalCanvas>

      <SmoothScrollbar>
        {(bind) => (
          <article {...bind}>
            <header>
              <h1 className='mb-16 mt-0 font-sans font-extralight leading-4 tracking-normal' style={{ fontSize: 160 }}>
                Heading 1
              </h1>
            </header>
            <section>
              <h1 className='mb-20 mt-0 font-sans text-xl font-bold leading-6' style={{ letterSpacing: '2.24px' }}>
                &lt;ScrollScene/&gt; example with 3D model
              </h1>
            </section>
            {isTouch && (
              <section>
                <p className='mb-16 mt-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
                  You are on a touch device which means the WebGL wont sync with the native scroll. Consider disabling
                  ScrollScenes for touch devices, or experiment with the `smoothTouch` setting on Lenis. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                </p>
              </section>
            )}
            <WatchSection />
            <section>
              <p className='my-0 font-sans text-4xl font-normal leading-6 tracking-normal text-neutral-500'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type.
              </p>
            </section>
            <WatchSection className='alternate' />
          </article>
        )}
      </SmoothScrollbar>

      <Loader />
    </div>
  )
}

function WatchSection({ className }) {
  const el = useRef()
  return (
    <section className={`WatchSection ${className}`}>
      <div>
        <h2>This is a Watch</h2>
        <p>
          This GLB model is rendered in the default scene. Since the global camera is static, the angle towards the
          model changes as it moves through the viewport.
        </p>
        <p>Events works as expected. Try dragging the Drei PresentationControls.</p>
        <p>This layout is responsive. Making the window wider to see the ScrollScene detect the new DOM location.</p>
      </div>
      <div ref={el} className='WatchPlaceholder Debug' style={{ touchAction: 'pan-x' }}></div>
      <UseCanvas>
        <ScrollScene track={el}>{(props) => <WatchModel {...props} />}</ScrollScene>
      </UseCanvas>
    </section>
  )
}

function WatchModel({ scale, inViewport, track, ...props }) {
  const ref = useRef()
  const { nodes, materials } = useGLTF('/watch-v1.glb')
  const gl = useThree((s) => s.gl)

  // Since we reconnected the eventSource to the scrolling page wrapper,
  // we need to tell <Html> to add it's children to the fixed canvas wrapper
  // otherwise they will both scroll with the content and be transformed from the 3D at the same time
  const htmlPortal = useRef(gl.domElement.parentNode)

  return (
    <group scale={scale.xy.min() * 0.5}>
      <Float speed={2}>
        <PresentationControls
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <group ref={ref} rotation={[-Math.PI / 2, 0, 0]} scale={0.0017} dispose={null}>
            <mesh geometry={nodes.Object005_glass_0.geometry} material={materials.glass}>
              <Html
                portal={htmlPortal}
                scale={100}
                rotation={[Math.PI / 2, 0, 0]}
                position={[180, -350, 50]}
                transform
                occlude
              >
                <div className={`annotation ${inViewport && 'visible'}`}>
                  6.550 $ <span style={{ fontSize: '1.5em' }}>🥲</span>
                </div>
              </Html>
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Object006_watch_0.geometry} material={materials.watch} />
          </group>
        </PresentationControls>
      </Float>
    </group>
  )
}
