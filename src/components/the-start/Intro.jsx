import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Intro = () => {
  const backgroundImage = useRef(null)
  const introImage = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top',
        end: '+=310px',
        scrub: true,
      },
    })

    timeline
      .from(backgroundImage.current, {
        clipPath: 'inset(15% 15% 15% 15%)', //inset(0% 45% 0% 45% round 10px)
      })
      .to(
        introImage.current,
        {
          height: 170,
        },
        0,
      )
  }, [])

  return (
    <div className='relative flex w-full justify-center'>
      <div ref={backgroundImage} className='absolute h-[160vh] w-full overflow-hidden brightness-[60%]'>
        <Image src={'/gifs/8-97-01.gif'} fill={true} alt='background image' priority={true} className='object-cover' />
      </div>
      <div className='relative mt-[35vh] flex items-center justify-center'>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed='0.3'
          className='absolute h-[475px] w-[350px] overflow-hidden brightness-75'
        >
          <Image
            src={'/images/annie-spratt-asRpl6-Yp0w-unsplash.jpg'}
            alt='intro image'
            fill={true}
            priority={true}
            className='object-cover '
          />
        </div>
        <h1
          data-scroll
          data-scroll-speed='0.7'
          className=' z-10 whitespace-nowrap text-center text-[7vw] font-black uppercase text-red-100'
        >
          FASTEST MAN
        </h1>
      </div>
    </div>
  )
}

export default Intro
