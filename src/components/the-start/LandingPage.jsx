import React, { useRef } from 'react'
import gsap from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
gsap.registerPlugin(ScrollTrigger)

const Landing = () => {
  const videoRef = useRef(null)
  const svgRef = useRef(null)
  const circleRef = useRef(null)
  const pad = 4
  const fromLeftRef = useRef(null)
  const loaderRef = useRef(null)
  const fromLeftTileRef = useRef(null)
  const contentSectionRef = useRef(null)
  const sectionTitlesRef = useRef(null)
  const animatedRef = useRef(null)
  const bannerRef = useRef(null)
  const bannerImageRef = useRef(null)
  const loadingScreenRef = useRef(null)
  const firstSectionRef = useRef(null)
  const secondSectionRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline()

      const welcomeScreen = gsap.timeline({
        paused: 'true',
      })

      tl.from(loaderRef.current, {
        duration: 0.8,
        opacity: 0,
        y: 10,
      })

      let tl1 = gsap.timeline({ ease: 'power4.inOut', paused: 'true' })

      tl1.set(fromLeftRef.current, { pointerEvents: 'none' })
      tl1.to(fromLeftTileRef.current, {
        duration: 1.6,
        width: '100%',
        left: '0%',

        // stagger: 0.05,
      })
      tl1.to(fromLeftTileRef.current, {
        duration: 1,
        width: '100%',
        left: '100%',
        stagger: 0.1,
      })
      tl1.set(fromLeftTileRef.current, { left: '0', width: '0' })
      tl1.set(fromLeftRef.current, { pointerEvents: 'all' })

      let id,
        i = 0
      function loader() {
        id = setInterval(frame, 20)
      }
      function frame() {
        if (i >= 100) {
          clearInterval(id)
          tl1.play()
          welcomeScreen.play()
        } else {
          i++
          loaderRef.current.innerHTML = i + '%'
        }
      }
      window.onload = function () {
        loader()
      }

      welcomeScreen.to(loadingScreenRef.current, {
        duration: 0.8,
        y: -2000,
        ease: 'Power4.out',
        delay: 0.4,
      })
      welcomeScreen.from(
        bannerImageRef.current,
        {
          y: 500,
          duration: 0.9,
          stagger: {
            amount: 0.2,
          },
        },
        '-=.2',
      )

      welcomeScreen.from(
        bannerRef.current,
        {
          y: 500,
          duration: 0.9,
          stagger: {
            amount: 0.2,
          },
        },
        '-=.2',
      )
      const blocks = gsap.utils.toArray(contentSectionRef.current)

      blocks.forEach((block) => {
        const blockTimeline = gsap
          .timeline({
            scrollTrigger: {
              trigger: block,
              start: 'top center',
              end: 'bottom center',
              toggleActions: 'play',
              markers: false,
            },
          })
          // Animate the header items
          .from(block.querySelectorAll(sectionTitlesRef.current), {
            duration: 1.8,
            y: 100,
            opacity: 0,
            stagger: 0.5,
          })

        // Animate the content items
        const items = block.querySelectorAll(animatedRef.current)
        blockTimeline.from(
          items,
          {
            duration: 1.8,
            y: 100,
            opacity: 0,
            stagger: 0.5,
          },
          0,
        )
      })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: firstSectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      })

      timeline
        .to(montOlympusRef.current.rotation, { z: 1.6 })
        .to(montOlympusRef.current.rotation, { z: 0.02, y: 3.1 }, 'simultaneously')
        .to(montOlympusRef.current.position, { x: 0.16 }, 'simultaneously')
        .to(montOlympusRef.current.material, { opacity: 0, scale: 0 }, 'simultaneously')

      const everestTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: secondSectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      })

      everestTimeline
        .to(everestRef.current.rotation, { z: 1.6 })
        .to(everestRef.current.rotation, { z: 0.02, y: 3.1 }, 'simultaneously')
        .to(everestRef.current.position, { x: 0.16 }, 'simultaneously')
        .to(everestRef.current.material, { opacity: 0, scale: 0 }, 'simultaneously')

      let radius = +circleRef.current.getAttribute('r')
      let imgWidth, imgHeight

      gsap.set(videoRef.current, {
        scale: 2,
        xPercent: -50,
        yPercent: -50,
      })

      const tv = gsap
        .timeline({
          scrollTrigger: {
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.2,
          },
          defaults: {
            duration: 1,
          },
        })
        .to(
          circleRef.current,
          {
            attr: {
              r: () => radius,
            },
          },
          0,
        )
        .to(
          videoRef.current,
          {
            scale: 1,
          },
          0,
        )
        .to(
          '#whiteLayer',
          {
            alpha: 0,
            ease: 'power1.in',
            duration: 1 - 0.25,
          },
          0.25,
        )

      window.addEventListener('load', init)
      window.addEventListener('resize', resize)

      function init() {
        imgWidth = videoRef.current.naturalWidth
        imgHeight = videoRef.current.naturalHeight

        resize()
      }

      function resize() {
        tv.progress(0)

        const r = svgRef.current.getBoundingClientRect()
        const rectWidth = r.width + pad
        const rectHeight = r.height + pad

        const rx = rectWidth / imgWidth
        const ry = rectHeight / imgHeight

        const ratio = Math.max(rx, ry)

        const width = imgWidth * ratio
        const height = imgHeight * ratio

        const dx = rectWidth / 2
        const dy = rectHeight / 2
        radius = Math.sqrt(dx * dx + dy * dy)

        gsap.set(videoRef.current, { width, height })

        tv.invalidate()

        ScrollTrigger.refresh()
      }

      return () => tl.kill()
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className='absolute z-10 h-screen w-full overflow-hidden bg-[#222222] text-[white]' ref={loadingScreenRef}>
        <div className='absolute flex h-screen w-full items-center justify-center'>
          <div className='text-[250px] font-bold' ref={loaderRef} />
        </div>
      </div>

      <div>
        <div className='pointer-events-none fixed inset-x-0 z-[999999] flex size-full flex-col' ref={fromLeftRef}>
          <span className='relative h-full w-[0%] bg-[#4f5bff]' ref={fromLeftTileRef} />
          <span className='relative h-full w-[0%] bg-[#4f5bff]' ref={fromLeftTileRef} />
          <span className='relative h-full w-[0%] bg-[#4f5bff]' ref={fromLeftTileRef} />
        </div>
      </div>
      <section>
        <div className='relative cursor-none leading-6 text-neutral-800' style={{}}>
          <div className='mx-auto w-full cursor-none px-3'>
            <div className='-mx-3 mt-0 flex flex-wrap text-neutral-800'>
              <div className='mt-0 w-full max-w-full shrink-0 px-3 lg:w-1/2 lg:flex-none'>
                <div className='absolute' style={{ top: '20%' }}>
                  <h2
                    ref={bannerRef}
                    style={{
                      translate: 'none',
                      rotate: 'none',
                      scale: 'none',
                      transform: 'translate(0px, 0px)',
                      lineHeight: '1.2',
                    }}
                    className='mb-2 mt-0 text-9xl font-extrabold text-white xl:text-3xl'
                  >
                    Fastest in all
                    <p className='mb-4 mt-0 block text-violet-400' style={{ letterSpacing: '-5px', lineHeight: 132 }}>
                      four corners.
                    </p>
                  </h2>
                  <a
                    href='#'
                    className='relative cursor-pointer px-0 py-2 font-extrabold uppercase text-white hover:text-blue-700'
                    style={{
                      translate: 'none',
                      rotate: 'none',
                      scale: 'none',
                      transform: 'translate(0px, 0px)',
                      textDecoration: 'none',
                      lineHeight: 60,
                    }}
                  >
                    <b
                      className='mr-5 inline-block size-16 border-2 border-solid border-violet-400 text-center text-xl font-normal uppercase'
                      style={{ lineHeight: 50, borderRadius: '50%' }}
                    >
                      +
                    </b>
                    of the Universe
                  </a>
                </div>
              </div>
              <div className='mt-0 w-full max-w-full shrink-0 px-3 lg:w-1/2 lg:flex-none' ref={bannerImageRef}>
                <div className='size-full align-middle'></div>
              </div>
            </div>
          </div>
        </div>
        <section
          className='flex w-full cursor-none flex-wrap bg-white px-0 py-40 leading-6 text-neutral-800'
          ref={contentSectionRef}
        >
          <div className='mx-auto w-full cursor-none px-3'>
            <div className='-mx-3 mt-0 flex flex-wrap text-neutral-800'>
              <div
                className='mt-0 w-full max-w-full flex-none px-3 opacity-100'
                style={{
                  translate: 'none',
                  rotate: 'none',
                  scale: 'none',
                  opacity: 1,
                  transform: 'translate(0px, 0px)',
                }}
              >
                <div
                  className='mb-12 flex w-full flex-wrap opacity-100'
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    opacity: 1,
                    transform: 'translate(0px, 0px)',
                  }}
                >
                  <h5
                    ref={sectionTitlesRef}
                    className='relative mx-2 my-1 inline-block h-px w-32 bg-violet-400 text-xs font-medium'
                    style={{ lineHeight: '1.2', letterSpacing: 3, content: '""' }}
                  >
                    IN PERPETUITY TILL HEAT DEATH
                  </h5>
                  <h2
                    className='my-0 w-full text-5xl font-extrabold xl:text-3xl'
                    style={{ lineHeight: '1.4', paddingRight: '8%', zIndex: 2 }}
                  >
                    Seeking out the essential qualities that formulate the fastest man to have ever lived, in the past,
                    present and hereafter.
                  </h2>
                </div>
              </div>
              <div className=''></div>
              {/* end col-12 */}
              <div
                ref={animatedRef}
                className='mt-0 w-full max-w-full shrink-0 px-3 opacity-100 lg:w-7/12 lg:flex-none'
                style={{
                  translate: 'none',
                  rotate: 'none',
                  scale: 'none',
                  opacity: 1,
                  transform: 'translate(0px, 0px)',
                }}
              >
                <p className='mb-5 mt-0 text-base font-extrabold' style={{ lineHeight: '1.7' }}>
                  What Does it mean to be the fastest ?
                  <strong className='leading-7' style={{ fontWeight: 'bolder' }}>
                    Is it possible to point out just a single individual
                  </strong>
                  as the collective limit of bipedal terrestrial locomotion ?
                  <strong className='leading-7' style={{ fontWeight: 'bolder' }}>
                    interact
                  </strong>
                  Is the Definition Exclusive ?
                </p>
                <br className='' />
                <p className='mb-5 mt-0 text-base font-extrabold' style={{ lineHeight: '1.7' }}></p>
                <br className='' />
                <p ref={firstSectionRef} className='mb-5 mt-0 text-base font-extrabold' style={{ lineHeight: '1.7' }}>
                  Till the controversial 1968 Olympics, (controversial for altitude), all track measurements were done
                  by hand with stopwatches with accuracy up to a tenth of a second.It was all a matter of time, the
                  reaction time of both the umpires and the runners. Reaction time varies evenly within the whole
                  population of humans and sprinters, sprinters are not in any way more reactive than your average
                  layman. Giving the umpires a generous reaction time of 0.1s, that would mean variation of the actual
                  time by up to 0.2s for starting and stopping the stopwatch. The 1968 Olympics were the first and last
                  to be held at such a high altitude, something that Jim Hines took serious advantage of. He improved
                  the new record by 0.05s, which remained unbroken for 15 long years, just half as long as the longest
                  siege in history, to be only be improved by 0.02s.
                </p>
                <br className='' />
                <p className='mb-5 mt-0 text-base font-extrabold' style={{ lineHeight: '1.7' }}>
                  What is the highest mountain in the solar system ? Simplifying things, what is the highest mountain on
                  planet Earth ? It should be easy for anyone who has access to broadcast media or print media. It has
                  to be Mt Everest, or Peak XV, named after the Surveyor General of India and Chairman of the Mt Everest
                  menthol ciggarettes. There is nothing more than pierces, and not scrapes, the skies more than Mount
                  Everest, things cannot get higher than that. Chimborizo, is lesser known, moutain in Equador, was for
                  a stretch of time, accepted as the highest mountain in the world and was as popular with climbers as
                  Everest is today. The mountain lies absurdely close to the equator, which happens to be the furthest
                  place from the the core. That would make the peak of Chimborazo the furthest place one can get from
                  the core. What makes this form of measurement/classification much less superior to the one that makes
                  Everest the highest mountain ? The only difference is the starting point of the measurement.
                </p>
              </div>
              {/* end col-7 */}
              <div
                className='mt-0 w-full max-w-full shrink-0 px-3 opacity-100 lg:w-5/12 lg:flex-none'
                style={{
                  translate: 'none',
                  rotate: 'none',
                  scale: 'none',
                  opacity: 1,
                  transform: 'translate(0px, 0px)',
                }}
              >
                <p ref={animatedRef} className='mb-5 mt-0 text-base font-extrabold' style={{ lineHeight: '1.7' }}>
                  Are Dormant Volcanos
                  <strong className='leading-7' style={{ fontWeight: 'bolder' }}>
                    Mountains or Explosive-Laden Hills ?
                  </strong>
                  &amp;
                  <strong className='leading-7' style={{ fontWeight: 'bolder' }}>
                    Is a ridge
                  </strong>
                  , guaranteed its long enough and tall enough, to see from space, a mountain ?
                </p>
                <p className='mb-5 mt-0 text-base font-extrabold' style={{ lineHeight: '1.7' }}>
                  On Mars, there is a very large shield volcano that is over 21.9km high, measured and verified by the
                  Mars Orbiter Laser Altimeter, making it almost twice as high as Everest above sea level. Last eruption
                  of the volcano was over 25 million years ago, and so there is guarantee that its not an active volcano
                  anymore. Located in the Tharsis Bulge, Mons Olympus awards adventurers with a 26km gain in height,
                  when measured from the Martian global datum, making it almost twice as tall as the massive Hawaiian
                  Islands, that would measure 14km when measured from the sea floor, the base of that volcano. The
                  volcano is a pile of continously discharging lava that remained stationary and piled up to make a
                  structure 26km in height. The climate and weather on Mars is not that impressive but given its size,
                  weather events happen on a planetary scale, the most common being a dust storm. During global dust
                  storms, temperatures drop from 50°C to 10°C and wind speed reaches
                </p>

                <br className='' />
                <p className='mb-5 mt-0 text-base font-extrabold' style={{ lineHeight: '1.7' }}>
                  For an athlete 2m from the pistol, sound takes 0.006 seconds to arrive at the inner-membrane and
                  0.0061s to reach a sprinter 20m from the pistol. An umpire standing at the 60m mark would only hear
                  the sound 0.182s after the shot. By the time the sound reaches the umpire, the sprinters would have
                  already taken off, meaning light from the athletes reaches you faster than the sound.All the athletes
                  will noticeabley move before the gun,causing a false start flag ? The setup of the standard track
                  places lane 8 at a distance of 8.5m from lane 1, giving a sound delay of 0.026s. If it so happened
                  that the umpire was standing 10m from the starting line, and not directly next like a creep, the
                  individual in lane 8 will only hear the sound after 0.0052s.Not necessarily true, because this is the
                  time it takes sound to trigger impulses in the inner-ear, directing information-laden pulses to the
                  brain where decisions are made as to how the muscles can move, till the muscles finally moving, after
                  an extra 0.026s, provided the athlete is 1.80m tall. So,when exactly should start be ? Should the
                  start be determined as the pulse pressure on the starting blocks ? Hand timers are trained to wait at
                  the finish line and to react to the smoke signal from the muzzle flash of the starting pistol.A
                  handtimer sees the smoke signal at 0.270s after the gun and hears the bang 0.303s after start. A ten
                  percent increase in the 100m record can be attributed solely to improvements in timing methods. How
                  then do we measure the performance of the fastest man ? What does it even mean to be the fastest man ?
                </p>
              </div>
              {/* end col-5 */}
              {/* end col-7 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
      </section>
    </>
  )
}

export default Landing
