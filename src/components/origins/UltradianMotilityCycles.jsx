import React, { useRef } from 'react'
import Baby from './models/Baby'

const UltradianMotilityCycles = () => {
  const wrapperRef = useRef(null)
  return (
    <>
      <div ref={wrapperRef} className='m-0 box-border grid min-h-screen bg-[rgb(44,42,42)] p-0'>
        <div className='fixed left-0 top-0 size-full animate-[fade-in_1s_ease_0.3s_forwards] touch-none opacity-0'>
          <Baby />
        </div>
        <div className='my-auto ml-[10vw] mr-0 h-[70vh] w-[40vw] p-[3em]'>
          <h1 className='text-[4rem] text-[aquamarine]'>The C-PEN 522 CHALLENGER DRONE</h1>
          <p className='mx-0 my-[3em] leading-7 text-[white]'>
            With industry-leading features such as a 1080p camera, automatic self-stabilization, and unmatched speed and
            maneuverability capabilities, the C-PEN Challenger is exactly what you need to make insanely cool videos
            from the very first time you fly it.{' '}
          </p>
          <div className='grid h-[70px] w-[400px] grid-cols-[1fr_1fr] gap-x-[2em]'>
            <button className='h-auto rounded-[5px] border-[none] bg-[aquamarine] p-[1em] text-[1.2rem]'>
              Learn More
            </button>
            <button className='border border-solid border-[aquamarine] bg-transparent text-[aquamarine]'>
              Buy Now
            </button>
          </div>
        </div>
        <div className='absolute bottom-[7%] right-[7%] opacity-30 transition-opacity duration-[0.3s] hover:opacity-100'>
          <p className='grid select-none grid-cols-[repeat(2,1fr)] gap-x-[2em] p-[0.5em] text-[0.8rem] uppercase text-[silver]'>
            Left Mouse Button<span className='text-[aquamarine]'>Orbit</span>
          </p>
          <p className='grid select-none grid-cols-[repeat(2,1fr)] gap-x-[2em] p-[0.5em] text-[0.8rem] uppercase text-[silver]'>
            Right Mouse Button<span className='text-[aquamarine]'>Pan</span>
          </p>
          <p className='grid select-none grid-cols-[repeat(2,1fr)] gap-x-[2em] p-[0.5em] text-[0.8rem] uppercase text-[silver]'>
            Mouse Wheel<span className='text-[aquamarine]'>Zoom</span>
          </p>
        </div>
      </div>
    </>
  )
}
