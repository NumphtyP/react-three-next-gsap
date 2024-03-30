import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
gsap.registerPlugin(ScrollTrigger, Flip)

const MultistepFlip = () => {
  const zoneRef = useRef(null)
  const targetRef = useRef(null)

  useEffect(() => {
    // SETUP TIMELINE
    let tl

    function createTimeline() {
      if (tl) {
        tl.kill()
        gsap.set(targetRef.current, {
          clearProps: 'all',
        })
      }
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: zoneRef.current,
          start: 'center center',
          endTrigger: zoneRef.current,
          end: 'center center',
          scrub: true,
        },
      })
      const zoneEls = Array.from(zoneRef.current.children)
      zoneEls.forEach((zoneEl, index) => {
        const nextZoneEl = zoneEls[index + 1]
        if (nextZoneEl) {
          const nextZoneDistance = nextZoneEl.offsetTop + nextZoneEl.offsetHeight / 2
          const thisZoneDistance = zoneEl.offsetTop + zoneEl.offsetHeight / 2
          const zoneDifference = nextZoneDistance - thisZoneDistance
          tl.add(
            Flip.fit(targetRef.current, nextZoneEl, {
              duration: zoneDifference,
              ease: 'power2.inOut',
            }),
          )
        }
      })
    }

    createTimeline()

    // SETUP RESIZE
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        createTimeline()
      }, 250)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array means this effect runs once after the initial render
  return (
    <main classname='block leading-7 text-lime-300'>
      <section classname='block leading-7 text-lime-300'>
        <div classname='mx-auto w-full text-lime-300' style={{ maxWidth: '80em' }}>
          <div
            classname='flex flex-col justify-center items-stretch py-20 min-h-screen'
            style={{ paddingRight: '4%', paddingLeft: '4%' }}
          >
            <div
              classname='gap-16 items-center mx-auto'
              style={{
                maxWidth: '29em',
                gridTemplateColumns: '1fr 1fr',
                gridAutoColumns: '1fr',
                gridTemplateRows: 'auto',
              }}
            >
              <div
                id='w-node-f2f1c651-5fcc-82f0-896c-3457f7a6a115-bb1292c6'
                classname='relative flex-col gap-6 justify-start items-start w-full'
                style={{
                  zIndex: 3,
                  maxWidth: '34em',
                  gridArea: 'span 1 / span 1 / span 1 / span 1',
                }}
              >
                <h1 classname='m-0 text-6xl font-normal tracking-tight' style={{ lineHeight: '0.9' }}>
                  Lorem ipsum dolor sit
                  <span classname='font-sans' style={{ lineHeight: '63.2842px', letterSpacing: '-2.10947px' }}>
                    ame consect
                  </span>
                </h1>
                <p classname='my-0 text-lg leading-8'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                  vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
                <a
                  href='#'
                  classname='inline-block py-3 px-6 text-lg font-normal leading-none whitespace-nowrap bg-lime-300 border-0 cursor-pointer text-neutral-900'
                  style={{ textDecoration: 'none', borderRadius: '100vw' }}
                >
                  Button Text
                </a>
              </div>
              <div
                id='w-node-_4ec89a4c-8890-b404-0dde-fe897d77c0ea-bb1292c6'
                classname=''
                style={{ gridArea: 'span 1 / span 1 / span 1 / span 1' }}
              >
                <div
                  js-scrollflip-element='zone'
                  classname='relative w-full bg-gray-800'
                  style={{ paddingTop: '128%' }}
                >
                  <div
                    data-poster-url='https://assets.website-files.com/63f602d2b9510761241292c8/63f6212402ff0471625ecc77_video-poster-00001.jpg'
                    data-video-urls='https://assets.website-files.com/63f602d2b9510761241292c8/63f6212402ff0471625ecc77_video-transcode.mp4,https://assets.website-files.com/63f602d2b9510761241292c8/63f6212402ff0471625ecc77_video-transcode.webm'
                    data-autoplay='true'
                    data-loop='true'
                    data-wf-ignore='true'
                    js-scrollflip-element='target'
                    classname='overflow-hidden absolute w-full h-full text-white'
                    style={{ inset: '0%', zIndex: 1 }}
                  >
                    <video
                      id='02bf1d2c-e516-dc10-ae86-f85845de3668-video'
                      autoPlay=''
                      loop=''
                      style={{
                        backgroundImage:
                          'url("https://assets.website-files.com/63f602d2b9510761241292c8/63f6212402ff0471625ecc77_video-poster-00001.jpg")',
                        backgroundPosition: '50% 50%',
                        inset: '-100%',
                        zIndex: -100,
                      }}
                      muted=''
                      playsInline=''
                      data-wf-ignore='true'
                      data-object-fit='cover'
                      classname='inline-block object-cover absolute m-auto w-full h-full align-baseline bg-cover'
                    >
                      <source
                        src='https://assets.website-files.com/63f602d2b9510761241292c8/63f6212402ff0471625ecc77_video-transcode.mp4'
                        data-wf-ignore='true'
                        classname='font-serif text-base text-black'
                      />
                      <source
                        src='https://assets.website-files.com/63f602d2b9510761241292c8/63f6212402ff0471625ecc77_video-transcode.webm'
                        data-wf-ignore='true'
                        classname='font-serif text-base text-black'
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section classname='block leading-7 text-lime-300'>
        <div classname='mx-auto w-full text-lime-300' style={{ maxWidth: '80em' }}>
          <div classname='py-20' style={{ paddingRight: '4%', paddingLeft: '4%' }}>
            <div classname='flex flex-col gap-12 justify-start items-center text-center'>
              <div classname='mx-auto w-32 max-w-full' style={{ transform: 'rotate(-9deg)' }}>
                <div js-scrollflip-element='zone' classname='w-full bg-gray-800' style={{ paddingTop: '96%' }} />
              </div>
              <h2
                classname='my-0 text-9xl font-normal tracking-tighter'
                style={{ lineHeight: '0.85', maxWidth: '8em' }}
              >
                Lorem ipsum dolor sit
                <span
                  classname='font-sans'
                  style={{
                    fontSize: '140.632px',
                    lineHeight: '119.537px',
                    letterSpacing: '-7.03158px',
                  }}
                >
                  ame consect
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section
        js-scrollflip-element='zone'
        classname='block relative my-20 w-full leading-7 text-lime-300 bg-gray-800'
        style={{ zIndex: 3 }}
      >
        <div classname='mx-auto w-full text-lime-300' style={{ maxWidth: '80em' }}>
          <div
            classname='flex gap-8 items-center place-content-center py-20 min-h-screen text-center'
            style={{
              paddingRight: '4%',
              paddingLeft: '4%',
              flexFlow: 'column wrap',
            }}
          >
            <h2 classname='my-0 text-6xl font-normal tracking-tight' style={{ lineHeight: '0.9', maxWidth: '8em' }}>
              Lorem ipsum dolor sit
              <span classname='font-sans' style={{ lineHeight: '63.2842px', letterSpacing: '-2.10947px' }}>
                ame consect
              </span>
            </h2>
            <a
              href='#'
              classname='inline-block py-3 px-6 text-lg font-normal leading-none whitespace-nowrap bg-lime-300 border-0 cursor-pointer text-neutral-900'
              style={{ textDecoration: 'none', borderRadius: '100vw' }}
            >
              Button Text
            </a>
          </div>
        </div>
      </section>
      <section classname='block leading-7 text-lime-300'>
        <div classname='mx-auto w-full text-lime-300' style={{ maxWidth: '80em' }}>
          <div
            classname='flex flex-col justify-center items-stretch py-20 min-h-screen'
            style={{ paddingRight: '4%', paddingLeft: '4%' }}
          >
            <div
              classname='gap-16 items-center mx-auto'
              style={{
                maxWidth: '29em',
                gridTemplateColumns: '1fr 1fr',
                gridAutoColumns: '1fr',
                gridTemplateRows: 'auto',
              }}
            >
              <div
                id='w-node-_91ab9424-d137-2d2f-79cc-819182a1f5f5-bb1292c6'
                classname='relative flex-col gap-6 justify-start items-start w-full'
                style={{
                  zIndex: 3,
                  maxWidth: '34em',
                  gridArea: 'span 1 / span 1 / span 1 / span 1',
                }}
              >
                <h1 classname='m-0 text-6xl font-normal tracking-tight' style={{ lineHeight: '0.9' }}>
                  Lorem ipsum dolor sit
                  <span classname='font-sans' style={{ lineHeight: '63.2842px', letterSpacing: '-2.10947px' }}>
                    ame consect
                  </span>
                </h1>
                <p classname='my-0 text-lg leading-8'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                  vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
                <a
                  href='#'
                  classname='inline-block py-3 px-6 text-lg font-normal leading-none whitespace-nowrap bg-lime-300 border-0 cursor-pointer text-neutral-900'
                  style={{ textDecoration: 'none', borderRadius: '100vw' }}
                >
                  Button Text
                </a>
              </div>
              <div
                id='w-node-_91ab9424-d137-2d2f-79cc-819182a1f5fe-bb1292c6'
                classname=''
                style={{ gridArea: 'span 1 / span 1 / span 1 / span 1' }}
              >
                <div
                  js-scrollflip-element='zone'
                  classname='relative w-full bg-gray-800'
                  style={{ paddingTop: '128%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section classname='block leading-7 text-lime-300'>
        <div classname='mx-auto w-full text-lime-300' style={{ maxWidth: '80em' }}>
          <div classname='py-20' style={{ paddingRight: '4%', paddingLeft: '4%' }}>
            <div classname='flex flex-col gap-12 justify-start items-center text-center'>
              <div classname='mx-auto w-32 max-w-full' style={{ transform: 'rotate(-9deg)' }}>
                <div js-scrollflip-element='zone' classname='w-full bg-gray-800' style={{ paddingTop: '96%' }} />
              </div>
              <h2
                classname='my-0 text-9xl font-normal tracking-tighter'
                style={{ lineHeight: '0.85', maxWidth: '8em' }}
              >
                Lorem ipsum dolor sit
                <span
                  classname='font-sans'
                  style={{
                    fontSize: '140.632px',
                    lineHeight: '119.537px',
                    letterSpacing: '-7.03158px',
                  }}
                >
                  ame consect
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section
        js-scrollflip-element='zone'
        classname='block relative my-20 w-full leading-7 text-lime-300 bg-gray-800'
        style={{ zIndex: 3 }}
      >
        <div classname='mx-auto w-full text-lime-300' style={{ maxWidth: '80em' }}>
          <div
            classname='flex gap-8 items-center place-content-center py-20 min-h-screen text-center'
            style={{
              paddingRight: '4%',
              paddingLeft: '4%',
              flexFlow: 'column wrap',
            }}
          >
            <h2 classname='my-0 text-6xl font-normal tracking-tight' style={{ lineHeight: '0.9', maxWidth: '8em' }}>
              Lorem ipsum dolor sit
              <span classname='font-sans' style={{ lineHeight: '63.2842px', letterSpacing: '-2.10947px' }}>
                ame consect
              </span>
            </h2>
            <a
              href='#'
              classname='inline-block py-3 px-6 text-lg font-normal leading-none whitespace-nowrap bg-lime-300 border-0 cursor-pointer text-neutral-900'
              style={{ textDecoration: 'none', borderRadius: '100vw' }}
            >
              Button Text
            </a>
          </div>
        </div>
      </section>
      <section classname='block leading-7 text-lime-300'>
        <div classname='mx-auto w-full text-lime-300' style={{ maxWidth: '80em' }}>
          <div classname='py-20' style={{ paddingRight: '4%', paddingLeft: '4%' }}>
            <div
              classname='gap-16 items-center mx-auto'
              style={{
                maxWidth: '29em',
                gridTemplateColumns: '1fr 1fr',
                gridAutoColumns: '1fr',
                gridTemplateRows: 'auto',
              }}
            >
              <div
                id='w-node-_0c7a32e7-5d17-3939-8326-f3422b9e3233-bb1292c6'
                classname=''
                style={{ gridArea: 'span 1 / span 1 / span 1 / span 1' }}
              >
                <div classname='relative w-full bg-gray-800' style={{ paddingTop: '128%' }}>
                  <img
                    src='https://assets.website-files.com/63f602d2b9510761241292c8/63f60b5355d27d98ee0450d9_milad-fakurian-dvfph1sB-oA-unsplash.jpg'
                    alt=''
                    classname='inline-block object-cover absolute w-full max-w-none h-full align-middle border-0'
                    style={{ inset: '0%' }}
                  />
                </div>
              </div>
              <div
                id='w-node-_0c7a32e7-5d17-3939-8326-f3422b9e322a-bb1292c6'
                classname='relative flex-col gap-6 justify-start items-start w-full'
                style={{
                  zIndex: 3,
                  maxWidth: '34em',
                  gridArea: 'span 1 / span 1 / span 1 / span 1',
                }}
              >
                <h1 classname='m-0 text-6xl font-normal tracking-tight' style={{ lineHeight: '0.9' }}>
                  Lorem ipsum dolor sit
                  <span classname='font-sans' style={{ lineHeight: '63.2842px', letterSpacing: '-2.10947px' }}>
                    ame consect
                  </span>
                </h1>
                <p classname='my-0 text-lg leading-8'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                  vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
                <a
                  href='#'
                  classname='inline-block py-3 px-6 text-lg font-normal leading-none whitespace-nowrap bg-lime-300 border-0 cursor-pointer text-neutral-900'
                  style={{ textDecoration: 'none', borderRadius: '100vw' }}
                >
                  Button Text
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
