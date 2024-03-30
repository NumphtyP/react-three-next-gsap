'use client'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function TilesScroll() {
  const wrapper = useRef(null)
  const content = useRef(null)

  useEffect(() => {
    // Function to initialize Locomotive Scroll
    const initializeLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector('.smooth-scroll'),
        smooth: true,
        tablet: { smooth: true },
        smartphone: { smooth: true },
      })

      locoScroll.on('scroll', ScrollTrigger.update)

      ScrollTrigger.scrollerProxy('.smooth-scroll', {
        scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
      })
      setIsLoading(false)
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0)
    }
    setTimeout(initializeLocomotiveScroll, 2000)
  }, []) // Make sure this effect runs only once

  gsap.registerPlugin(ScrollTrigger)
  const lenis = useRef(null)
  const update = (time, deltaTime, frame) => {
    lenis.current.raf(time * 1000)
  }

  const resize = (e) => {
    ScrollTrigger.refresh()
  }

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.01,
    })
    lenis.current.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      // console.log({ scroll, limit, velocity, direction, progress })
      ScrollTrigger.update()
    })

    function raf(time) {
      lenis.current.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    gsap.ticker.add(update)
  }, [])
  return (
    <>
      <div
        ref={wrapper}
        className='container relative mx-auto box-border flex h-screen w-screen resize items-center justify-center overflow-hidden '
      >
        <div ref={content} className='relative box-border flex   justify-center p-0  antialiased'>
          <section
            id='header'
            className='relative flex flex-col p-12 md:absolute md:right-12 md:top-1/2 md:-mt-7 md:flex md:size-16 md:items-center md:justify-center md:rounded-none md:border md:border-solid md:text-white'
            style={{ minHeight: '90vh', placeContent: 'center space-between' }}
          >
            <div
              className='relative text-center text-white md:grid md:w-full md:content-between'
              style={{ zIndex: 900 }}
            ></div>
            <p className='mt-auto text-3xl text-stone-500'>Unseeing the seen</p>
            <h1
              className='mx-0 mb-12 mt-0 font-normal text-white will-change-transform'
              data-scroll=''
              data-scroll-speed={2}
              style={{
                transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 26.625, 0, 1)',
                fontSize: '9vw',
                lineHeight: '0.8',
                maxWidth: 800,
              }}
            >
              decondition yourself
            </h1>
          </section>
          <section
            className='relative flex flex-col p-12 md:absolute md:right-12 md:top-1/2 md:-mt-7 md:flex md:size-16 md:items-center md:justify-center md:rounded-none md:border md:border-solid md:text-white'
            style={{ minHeight: '90vh', placeContent: 'center space-between' }}
          >
            <p
              className='text-white'
              data-scroll=''
              data-scroll-speed={2}
              style={{
                transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -16.22, 0, 1)',
              }}
            >
              The human world is exploding at the seams. Human creativity and the implementation of human inventions and
              technology is now at an accelerated fever pitch like nothing ever before seen in the history of the world.
              Well, where is it leading, and how does one integrate this stuff into one’s own life? What does it mean
              about the experience of being human? I have proposed the existence of an invisible, permeating
              <em className='text-4xl italic'>Something</em> that is throughout all being, all time, all space, all
              bodies, all thought, which I call
              <em className='text-4xl italic'>Novelty</em>; and the interesting thing about novelty is that it’s
              increasing constantly.
            </p>
          </section>
          <div
            className='flex text-white'
            data-scroll=''
            data-scroll-speed={1}
            data-scroll-target='#grid'
            data-scroll-direction='horizontal'
            style={{
              transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5.06301, 0, 0, 1)',
            }}
          >
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/badman-beamon.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage: 'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/babel.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/chigure-che-glitch-schwarz.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/carter-world-champion.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/diagoras-of-rhodes.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/dark-pyramids.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
          </div>
          <div
            className='flex text-white'
            data-scroll=''
            data-scroll-speed={2}
            data-scroll-target='#grid'
            data-scroll-direction='horizontal'
            style={{
              transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -62.415, 0, 0, 1)',
            }}
          >
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/gettyimages-1578738-2048x2048.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage: 'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/horns.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/dance-macabre.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/gettyimages-497501594-2048x2048.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/amarndo-duplantis.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/Jeremy-Wariner.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
          </div>
          <div
            className='flex text-white'
            data-scroll=''
            data-scroll-speed={1}
            data-scroll-target='#grid'
            data-scroll-direction='horizontal'
            style={{
              transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -66.6512, 0, 0, 1)',
            }}
          >
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/Charlie-Paddock-1920-Antwerp-100m-final.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/arial-view-fencing.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage: 'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/vatican.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/sr71-pilots-queit-standing.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/puma-evo-speed.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='m-10 w-64 flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/makazole-mapimpi-of-south-africa-breaks-through-the-tackle-of-gabriel-pop-of-romania.jpg")',
                height: '275.188px',
                backgroundPosition: '50% 50%',
              }}
            />
          </div>
          <p
            className='-mx-11 my-0 whitespace-nowrap font-serif font-extralight uppercase italic text-stone-900'
            data-scroll=''
            data-scroll-speed={3}
            data-scroll-direction='horizontal'
            style={{
              transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 15.9497, 0, 0, 1)',
              fontSize: '13vw',
            }}
          >
            endless acceleration toward infinity
          </p>
          <p
            className='-mx-11 my-0 whitespace-nowrap font-serif font-extralight uppercase italic text-stone-900'
            data-scroll=''
            data-scroll-speed={-1}
            data-scroll-direction='horizontal'
            style={{
              transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.403125, 0, 0, 1)',
              fontSize: '5vw',
            }}
          >
            the greatest barrier to your enlightenment
          </p>
          <section
            className='relative flex flex-col p-12 md:absolute md:right-12 md:top-1/2 md:-mt-7 md:flex md:size-16 md:items-center md:justify-center md:rounded-none md:border md:border-solid md:text-white'
            style={{ minHeight: '90vh', placeContent: 'center space-between' }}
          >
            <p
              className='text-white'
              data-scroll=''
              data-scroll-speed={2}
              style={{
                transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -41.2645, 0, 1)',
              }}
            >
              The conservation of novelty is simply that, over time, the universe has become more complicated. New
              levels of complexity become the foundations for yet deeper levels of complexity. And this phenomenon of
              the production and conservation of what I call novelty is not something which goes on only in the
              biological domain or only in the cultural domain or only in the domain of physics. It is a
              trans-categorical impulse in reality, meaning: it’s everywhere.{' '}
              <em className='text-4xl italic'>Everywhere!</em>
            </p>
          </section>
          <div
            className='block w-1/4 px-4 py-0 text-white'
            data-scroll=''
            data-scroll-speed={1}
            data-scroll-target='#grid3'
            data-scroll-direction='vertical'
            style={{
              transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1.20625, 0, 1)',
            }}
          >
            <div
              className='mx-0 my-8 w-full flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/downhill-inline.jpg")',
                height: 624,
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='mx-0 my-8 w-full flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/upside-down-jets.jpg")',
                height: 624,
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='mx-0 my-8 w-full flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/a-view-of-the-panathenaic-stadium-in-athens-during-the-opening-ceremony-of-the-1906.jpg")',
                height: 624,
                backgroundPosition: '50% 50%',
              }}
            />
          </div>
          <div
            className='block w-1/4 px-4 py-0 text-white'
            data-scroll=''
            data-scroll-speed={-1}
            data-scroll-target='#grid3'
            data-scroll-direction='vertical'
            style={{
              transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.37076, 0, 1)',
            }}
          >
            <div
              className='mx-0 my-8 w-full flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/night-of-speed.jpg")',
                height: 624,
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='mx-0 my-8 w-full flex-none bg-cover'
              style={{
                backgroundImage: 'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/hermes.jpg")',
                height: 624,
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='mx-0 my-8 w-full flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/freya-ingva-FcAQd8TCBzE-unsplash.jpg")',
                height: 624,
                backgroundPosition: '50% 50%',
              }}
            />
          </div>
          <div
            className='block w-1/4 px-4 py-0 text-white'
            data-scroll=''
            data-scroll-speed={1}
            data-scroll-target='#grid3'
            data-scroll-direction='vertical'
            style={{
              transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -46.7938, 0, 1)',
            }}
          >
            <div
              className='mx-0 my-8 w-full flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/lea-kobal-UlHxDEtBDM0.jpg")',
                height: 624,
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='mx-0 my-8 w-full flex-none bg-cover'
              style={{
                backgroundImage: 'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/lu-xiang.jpg")',
                height: 624,
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='mx-0 my-8 w-full flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/marcus-ganahl-M4Kk0nWdZtE-unsplash.jpg")',
                height: 624,
                backgroundPosition: '50% 50%',
              }}
            />
          </div>
          <div
            className='block w-1/4 px-4 py-0 text-white'
            data-scroll=''
            data-scroll-speed={-1}
            data-scroll-target='#grid3'
            data-scroll-direction='vertical'
            style={{
              transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 46.7938, 0, 1)',
            }}
          >
            <div
              className='mx-0 my-8 w-full flex-none bg-cover'
              style={{
                backgroundImage: 'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/karsten.jpg")',
                height: 624,
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='mx-0 my-8 w-full flex-none bg-cover'
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/blind-leading-blind.jpeg")',
                height: 624,
                backgroundPosition: '50% 50%',
              }}
            />
            <div
              className='mx-0 my-8 w-full flex-none bg-cover'
              style={{
                backgroundImage: 'url("https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/DP870302.jpg")',
                height: 624,
                backgroundPosition: '50% 50%',
              }}
            />
          </div>
          <section
            className='relative flex flex-col p-12 text-white'
            style={{ minHeight: '90vh', placeContent: 'center space-between' }}
          ></section>
        </div>
      </div>
    </>
  )
}
