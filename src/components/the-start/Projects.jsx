'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useLayoutEffect, useRef, useState } from 'react'
import { Equation, defaultErrorHandler } from 'react-equation'
import AltitudeNetwork from './AltitudeNetwork'

const projects = [
  {
    title: 'Reaction Time',
    src: '/images/makazole-mapimpi-of-south-africa-breaks-through-the-tackle-of-gabriel-pop-of-romania.jpg',
  },
  {
    title: 'Altitude',
    src: '/images/mtbd-snow-downhill-02.jpg',
  },
  {
    title: 'Wind',
    src: '/images/mens-100m-semi-final.jpg',
  },
  {
    title: 'Aerodynamics',
    src: '/images/boldon-oakley-advert.jpg',
  },
]

const Projects = () => {
  const [selected, setSelected] = useState(0)
  const image = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.create({
      trigger: image.current,
      start: '-=50px',
      end: document.body.offsetHeight,
      pin: true,
    })
  }, [])

  return (
    <section className='mt-[25vh] flex flex-col p-[10%]'>
      <div className='g-[5%] flex h-[700px] justify-between'>
        <div className='relative h-full w-[40%]' ref={image}>
          <Image src={src} fill alt='image' className='object-cover' />
        </div>
        <div className='w-[20%] text-[1.6vw]'>
          <div>
            <h3>Drag Equation</h3>
            <Equation value='drag = 1/2ρ*Cd*A(v -w)^2 ' errorHandler={defaultErrorHandler} />
          </div>
          <p>
            Using numerical modelling, an estimate of drag is calculated as shown above.A is the individual's
            cross-section, rho is air density, Cd is a coefficient of drag, whilst the terms inside the brackets
            represent the speeds of the sprinter and wind. A tailwind of 0.7m/s at 315m altitude should have given
            Bailey a higher boost in sprint time compared to +0.2m/s at 13m altitude for Surin in Seville. Reason alone
            stipulates that higher altitude races to be faster than lower altitude races due to differences in air
            density. That means, competitors competing at both 13m and 350m should post slower times at 13m and
            definately faster times at 350.
          </p>
        </div>
        <div className='flex h-full w-[20%] items-end text-[1vw]'>
          <p>
            Air density and total wind speed are codependent. The higher the altitude, the lower the air density, and
            the stronger the tailwind, the smaller the squared difference in sprinters speed and wind speed becomes. The
            ever present variation of wind with altitude beckons the need to convert all peformances to their sea-level
            equivalents. Adjusting Baileys time to its sea-level equivalent gives 9.719s and Surins time would give an
            equivalent of 9.720s at sea-level. A model capable of accounting for a 0.001s descrapancy is not a model one
            would find here because of the consistency of errors. Imagine including environmental variations in a
            calculation and expecting to capture every uncertainty. In the end, no rigorous amount of modeling can
            assure you on who the fastest of the two is.
          </p>
        </div>
      </div>
      <div className='mt-64 flex flex-col justify-center'>
        <AltitudeNetwork />
      </div>
    </section>
  )
}

export default Projects
