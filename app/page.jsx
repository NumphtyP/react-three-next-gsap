'use client'

import React, { useRef, useEffect, Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import ResizeObserver from 'resize-observer-polyfill'
import Home from '@/components/home/Home'
import Quote from '@/components/origins/Quote'
import Loader from '@/components/loader/Loader'
import VerticalImageGallery from '@/components/origins/VerticalGallery'
import OlduvaiGorgeMap from '@/components/origins/OlduvaiGorgeMap'
import SolarTerminator from '@/components/origins/SolarTerminator'
import FireRegimes from '@/components/origins/FireRegimes'

gsap.registerPlugin(ScrollTrigger)

const animation = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    slideStart: { clipPath: 'inset(0 100% 0 0 round 8px)' },
    slideEnd: { clipPath: 'inset(0 0% 0 0 round 8px)' },
  },
  initial: ['hidden', 'slideStart'],
  whileInView: ['visible', 'slideEnd'],
  exit: ['hidden', 'slideStart'],
  viewport: {
    amount: 0.4,
    // once: true
  },
  // onViewportEnter: () => console.log("enter"),
  // onViewportLeave: () => console.log("leave"),
  transition: { type: 'spring', duration: 1, bounce: 0 },
}

export default function Page() {
  const [started, setStarted] = useState(false)
  const wrapper = useRef(null)
  useEffect(() => {
    const gsapCtx = gsap.context(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: true,
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      })
      const raf = (time) => {
        lenis.raf(time)
        ScrollTrigger.update()
        requestAnimationFrame(raf)
      }

      const resize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
      }

      window.addEventListener('resize', resize)
      requestAnimationFrame(raf)
      resize()
    }, wrapper)
    return () => {
      gsapCtx.revert()
      window.removeEventListener('resize', resize)
    }
  }, [])
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // Handle resizing logic here
        // You can access the new dimensions of the element like this:
        console.log(entry.contentRect.width, entry.contentRect.height)
      }
    })

    if (wrapper.current) {
      resizeObserver.observe(wrapper.current)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [])
  return (
    <>
      <Loader started={started} setStarted={setStarted} />
      <div
        ref={wrapper}
        className='relative mx-auto box-border flex h-screen w-full w-screen resize flex-col flex-wrap items-center overflow-hidden scroll-smooth  antialiased mix-blend-multiply md:flex-row lg:w-4/5'
      >
        <div className='container relative mx-auto box-border flex h-screen w-screen resize content-center justify-items-center'>
          <section className='container relative mx-auto box-border block flex h-screen w-screen justify-items-center'>
            <motion.div {...animation} className='mx-auto items-center justify-center'>
              <Home />
            </motion.div>
          </section>

          <section>
            <Quote />
          </section>
        </div>
      </div>
    </>
  )
}
