import React, { useRef } from 'react'
import gsap from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { Laocoon } from './Models'
import PaleogeographicTimeLapse from './models/PaleogeographicTimeLapse'
gsap.registerPlugin(ScrollTrigger)

const Landing = () => {
  const fromLeftRef = useRef(null)
  const loaderRef = useRef(null)
  const fromLeftTileRef = useRef(null)
  const contentSectionRef = useRef(null)
  const sectionTitlesRef = useRef(null)
  const animatedRef = useRef(null)
  const bannerRef = useRef(null)
  const bannerImageRef = useRef(null)
  const loadingScreenRef = useRef(null)

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
                    Biogeophysical
                    <p className='mb-4 mt-0 block text-violet-400' style={{ letterSpacing: '-5px', lineHeight: 132 }}>
                      Fire Feedback Regimes.
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
                    ></b>
                    and Human Evolution
                  </a>
                </div>
              </div>
              <div className='mt-0 w-full max-w-full shrink-0 px-3 lg:w-1/2 lg:flex-none' ref={bannerImageRef}>
                <div className='size-full align-middle'>
                  <PaleogeographicTimeLapse />
                </div>
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
                    style={{
                      lineHeight: '1.2',
                      letterSpacing: 3,
                      content: '""',
                    }}
                  >
                    Origin of Fire
                  </h5>
                  <h2
                    className='my-0 w-full text-5xl font-extrabold xl:text-3xl'
                    style={{ lineHeight: '1.4', paddingRight: '8%', zIndex: 2 }}
                  >
                    Plants provide two of the three essential elements for a fire, oxygen and fuel.
                  </h2>
                </div>
              </div>
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
                  The origin of fire is tied to the origin of plants, which are responsible for two of the three
                  elements essential to the existence of fire: oxygen and fuel. The third element, a heat source (figure
                  1a), has probably been available throughout the history of the planet (mainly through lightning, but
                  less predictably from volcanoes and sparks from rock falls or meteor ite impacts). Before the
                  appearance of photosynthetic organisms, the atmosphere lacked sufficient oxygen, and before the
                  appearance of terrestrial plants, it lacked fuels; thus, fire did not exist on our planet. By the
                  beginning of the Paleo zoic Era (540 million years ago [mya]; figure 2) the oxygenated atmosphere was
                  sufficient to support fire, but the lack of terrestrial plant fuels limited the possibility of fire.
                  However, with the earliest Silurian origins of land plants, there is evidence of fire. Glasspool and
                  colleagues (2004) reported charred remains of low-growing vegetation of the earliest stomata-bearing
                  plants (440 mya), plus charred coprolites, indicating a low-temperature surface fire.
                  <strong className='leading-7' style={{ fontWeight: 'bolder' }}></strong>
                  <strong className='leading-7' style={{ fontWeight: 'bolder' }}></strong>
                </p>
                <br className='' />
                <p className='mb-5 mt-0 text-base font-extrabold' style={{ lineHeight: '1.7' }}></p>
                <br className='' />
                <p className='mb-5 mt-0 text-base font-extrabold' style={{ lineHeight: '1.7' }}></p>
                <br className='' />
                <p className='mb-5 mt-0 text-base font-extrabold' style={{ lineHeight: '1.7' }}></p>
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
                  Going
                  <strong className='leading-7' style={{ fontWeight: 'bolder' }}>
                    Around in
                  </strong>
                  &amp;
                  <strong className='leading-7' style={{ fontWeight: 'bolder' }}>
                    Circles
                  </strong>
                </p>
                <p className='mb-5 mt-0 text-base font-extrabold' style={{ lineHeight: '1.7' }}></p>
                <p className='mb-5 mt-0 text-base font-extrabold' style={{ lineHeight: '1.7' }}></p>

                <br className='' />
                <p className='mb-5 mt-0 text-base font-extrabold' style={{ lineHeight: '1.7' }}></p>
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
