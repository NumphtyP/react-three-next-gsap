import Scene from './Scene'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import { useAnimation, motion } from 'framer-motion'

function Title3D() {
  return (
    <div className='absolute left-0 top-0 h-screen w-screen'>
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          preserveDrawingBuffer: true,
        }}
        camera={{
          fov: 55,
          near: 0.1,
          far: 200,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

function HeaderComponent() {
  const lineOneControls = useAnimation()
  const lineTwoControls = useAnimation()
  const rectangleControls = useAnimation()

  useEffect(() => {
    const animateSVG = async () => {
      // Line One Animation
      lineOneControls.start({
        pathLength: [0.5, 0.005, 0.5],
        pathOffset: [0, 0, 0.5],
        transition: {
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
        },
      })

      // Line Two Animation
      lineTwoControls.start({
        pathLength: [0.5, 0.005, 0.5],
        pathOffset: [0, 0, 0.5],
        transition: {
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
        },
      })

      // Rectangle Animation
      // Assuming the rectangle's animation is similar in spirit to the lines but with different specifics
      rectangleControls.start({
        // Your specific animation attributes for the rectangle here
        transition: {
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 2,
        },
      })
    }

    animateSVG()
  }, [lineOneControls, lineTwoControls, rectangleControls])
  return (
    <header className='pointer-events-auto relative z-50 mx-7 flex justify-between border-b border-white/60 py-6 max-lg:flex-col'>
      <div className='whitespace-nowrap'>
        <h1 className='mr-2 inline align-middle font-bold'>Fullscreen Buhera SSC</h1>
        <div className='relative size-32'>
          <svg
            className='absolute left-0 top-0 size-16'
            preserveAspectRatio='xMidYMid meet'
            height={300}
            width={600}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 600 300'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <motion.path
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={lineOneControls}
              stroke='rgba(155,55,255,0.4)'
              fill='none'
              strokeWidth={3}
              style={{ overflow: 'visible' }}
              strokeLinejoin='round'
              d='M0,90L150,90M150,90Q158,60 162,87T167,95 170,88 173,92t6,35 7,-60T190,127 197,107s2,-11 10,-10 1,1 8,-10T219,95c6,4 8,-6 10,-17s2,10 9,11h110'
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={lineTwoControls}
              stroke='#00AEAA'
              fill='none'
              strokeWidth={1}
              strokeLinejoin='round'
              style={{ overflow: 'visible' }}
              d='M0,90L150,90M150,90Q158,60 162,87T167,95 170,88 173,92t6,35 7,-60T190,127 197,107s2,-11 10,-10 1,1 8,-10T219,95c6,4 8,-6 10,-17s2,10 9,11h110'
            />
            <motion.rect
              initial={{ x: 0, y: 0 }} // Adjust initial animation state as needed
              animate={rectangleControls}
              fill='red'
              x={-3}
              y={-4}
              height={8}
              width={6}
              rx={20}
              ry={20}
            />
          </svg>
        </div>
      </div>
    </header>
  )
}

function Credits() {
  return (
    <div className='fixed bottom-0 flex w-full justify-between p-8'>
      <p>Made by Buhera Musomboti for FullScreen Triangle</p>
    </div>
  )
}

function Aside() {
  return (
    <div className='absolute right-16 top-1/2 text-lg'>
      <p className='mb-4 opacity-50'>BIPEDALISM</p>
      <p>
        An attempt at formalising
        <br />
        voluntary terrestrial locomotion
      </p>
      <p className='mt-40 opacity-50'>LAUNCH IN 2024</p>
    </div>
  )
}

function Home() {
  return (
    <>
      <Leva
        collapsed={false}
        flat={true}
        hidden
        theme={{
          sizes: {
            titleBarHeight: '28px',
          },
          fontSizes: {
            root: '10px',
          },
        }}
      />
      <main className='font-sans'>
        <HeaderComponent />
        <Title3D />
        <Aside />
        <Credits />
      </main>
    </>
  )
}

export default Home
