import React, { useEffect, useRef } from 'react'
import gsap from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import useIsomorphicLayoutEffect from '@/templates/hooks/useIsomorphicLayoutEffect'

gsap.registerPlugin(ScrollTrigger)

const VerticalImageGallery = () => {
  const additionalY = useRef({ val: 0 })
  const additionalYAnim = useRef()
  const offset = useRef(0)
  const colsRef = useRef([])
  const colRef = useRef()
  const sectionRef = useRef()
  const wrapper = useRef()

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cols = gsap.utils.toArray(colRef.current)

      colsRef.current = cols

      cols.forEach((col, i) => {
        const images = col.childNodes

        // DUPLICATE IMAGES FOR LOOP
        images.forEach((image) => {
          const clone = image.cloneNode(true)
          col.appendChild(clone)
        })

        // SET ANIMATION
        images.forEach((item) => {
          let columnHeight = item.parentElement.clientHeight
          let direction = i % 2 !== 0 ? '+=' : '-=' // Change direction for odd columns

          gsap.to(item, {
            y: direction + Number(columnHeight / 2),
            duration: 20,
            repeat: -1,
            ease: 'none',
            modifiers: {
              y: gsap.utils.unitize((y) => {
                if (direction === '+=') {
                  offset.current += additionalY.current.val
                  y = (parseFloat(y) - offset.current) % (columnHeight * 0.5)
                } else {
                  offset.current += additionalY.current.val
                  y = (parseFloat(y) + offset.current) % -Number(columnHeight * 0.5)
                }

                return y
              }),
            },
          })
        })
      })

      const imagesScrollerTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 50%',
        end: 'bottom 50%',
        onUpdate: function (self) {
          const velocity = self.getVelocity()
          if (velocity > 0) {
            if (additionalYAnim.current) additionalYAnim.current.kill()
            additionalY.current.val = -velocity / 2000
            additionalYAnim.current = gsap.to(additionalY.current, { val: 0 })
          }
          if (velocity < 0) {
            if (additionalYAnim.current) additionalYAnim.current.kill()
            additionalY.current.val = -velocity / 3000
            additionalYAnim.current = gsap.to(additionalY.current, { val: 0 })
          }
        },
      })

      return () => {
        // Clean up animations on component unmount
        colsRef.current.forEach((col) => {
          gsap.killTweensOf(col.childNodes)
        })
        if (imagesScrollerTrigger) imagesScrollerTrigger.kill()
        if (additionalYAnim.current) additionalYAnim.current.kill()
      }
    }, wrapper)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className='mx-auto box-border overflow-x-hidden  scroll-smooth text-[#111] antialiased'>
        <section className='flex min-h-[500vh] flex-col justify-center overflow-visible p-[10vw]' ref={sectionRef}>
          <h1 className='pointer-events-none fixed inset-0 z-[999] mx-auto my-8 grid max-w-[800px] place-items-center text-center text-[clamp(3vw,2rem,4rem)] font-extrabold text-[white] mix-blend-difference'>
            Vertical image loop with scroll acceleration with gsap
          </h1>
        </section>
        <div className='fixed left-2/4 top-0 z-[1] flex -translate-x-2/4 flex-row justify-center overflow-visible'>
          <div className='flex flex-1 flex-col self-start justify-self-start' ref={colRef}>
            <div className='p-4 saturate-0 hover:z-[99999999999] hover:saturate-100'>
              <img
                className='overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] transition-[0.3s] duration-[ease-out]'
                src='/img/8machine-_-B7iYkTWIZKQ-unsplash.jpg'
                alt=''
              />
            </div>
            <div className='p-4 saturate-0 hover:z-[99999999999] hover:saturate-100'>
              <img
                className='overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] transition-[0.3s] duration-[ease-out]'
                src='/img/birmingham-museums-trust-sJr8LDyEf7k-unsplash.jpg'
                alt=''
              />
            </div>
            <div className='p-4 saturate-0 hover:z-[99999999999] hover:saturate-100'>
              <img
                className='overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] transition-[0.3s] duration-[ease-out]'
                src='/img/chris-curry-lsy2SkyEMew-unsplash.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='flex flex-1 flex-col self-start justify-self-start' ref={colRef}>
            <div className='p-4 saturate-0 hover:z-[99999999999] hover:saturate-100'>
              <img src='/img/eduard-gross-V7xXGCSgJoA-unsplash.jpg' alt='' />
            </div>
            <div className='p-4 saturate-0 hover:z-[99999999999] hover:saturate-100'>
              <img
                className='overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] transition-[0.3s] duration-[ease-out]'
                src='/img/engin-akyurt-tzXwQYvjlC4-unsplash.jpg'
                alt=''
              />
            </div>
            <div className='p-4 saturate-0 hover:z-[99999999999] hover:saturate-100'>
              <img
                className='overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] transition-[0.3s] duration-[ease-out]'
                src='/img/8machine-_-B7iYkTWIZKQ-unsplash.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='flex flex-1 flex-col self-start justify-self-start' ref={colRef}>
            <div className='p-4 saturate-0 hover:z-[99999999999] hover:saturate-100'>
              <img
                className='overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] transition-[0.3s] duration-[ease-out]'
                src='/img/enguerrand-blanchy-aUti37ToGJE-unsplash.jpg'
                alt=''
              />
            </div>
            <div className='p-4 saturate-0 hover:z-[99999999999] hover:saturate-100'>
              <img
                className='overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] transition-[0.3s] duration-[ease-out]'
                src='/img/pexels-jeffrey-czum-5333590.jpg'
                alt=''
              />
            </div>
            <div className='p-4 saturate-0 hover:z-[99999999999] hover:saturate-100'>
              <img
                className='overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] transition-[0.3s] duration-[ease-out]'
                src='/img/matthias-oberholzer-UXOnBK37IAs-unsplash.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerticalImageGallery
