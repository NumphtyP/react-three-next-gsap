'use client'

import dynamic from 'next/dynamic'
import React, { Suspense, useEffect, useRef } from 'react'
import gsap from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import elementResizeDetectorMaker from 'element-resize-detector'

gsap.registerPlugin(ScrollTrigger)
const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  const viewportRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    let viewport = viewportRef.current
    let content = contentRef.current
    let smoothness = 1

    const isMobileDevice = window.innerWidth <= 767

    if (isMobileDevice) {
      smoothness = 0.2 // Adjust the smoothness for mobile devices
    }

    gsap.set(viewport || content.parentNode, {
      overflow: 'hidden',
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    })

    gsap.set(content, { overflow: 'visible' })

    let getProp = gsap.getProperty(content)
    let setProp = gsap.quickSetter(content, 'y', 'px')
    let setScroll = ScrollTrigger.getScrollFunc(window)
    let removeScroll = () => (content.style.overflow = 'visible')
    let killScrub = function (trigger) {
      let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]
      scrub && scrub.kill()
      trigger.animation.progress(trigger.progress)
    }
    let height, isProxyScrolling

    function onResize() {
      height = content.clientHeight
      content.style.overflow = 'visible'
      document.body.style.height = height + 'px'
    }
    onResize()

    ScrollTrigger.addEventListener('refreshInit', onResize)
    ScrollTrigger.addEventListener('refresh', function () {
      removeScroll()
      requestAnimationFrame(removeScroll)
    })

    ScrollTrigger.defaults({ scroller: content })
    ScrollTrigger.prototype.update = function (p) {
      p
    }

    ScrollTrigger.scrollerProxy(content, {
      scrollTop: function scrollTop(value) {
        if (arguments.length) {
          isProxyScrolling = true
          setProp(-value)
          setScroll(value)
          return
        }

        return -getProp('y')
      },
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    function elResizeListener() {
      let erdUltraFast = elementResizeDetectorMaker({
        strategy: 'scroll',
      })

      erdUltraFast.listenTo(document.getElementsByClassName('section-container'), function () {
        ScrollTrigger.refresh()
      })
    }
    elResizeListener()

    return ScrollTrigger.create({
      animation: gsap.fromTo(
        content,
        { y: 0 },
        {
          y: function () {
            return document.documentElement.clientHeight - height
          },
          ease: 'none',
          onUpdate: ScrollTrigger.update,
        },
      ),
      scroller: window,
      invalidateOnRefresh: true,
      start: 0,
      end: function () {
        return height - document.documentElement.clientHeight
      },
      scrub: smoothness,
      onUpdate: function (self) {
        if (isProxyScrolling) {
          killScrub(self)
          isProxyScrolling = false
        }
      },
      onRefresh: killScrub,
    })
  }, [])
  return (
    <>
      <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
        {/* jumbo */}
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
          <p className='w-full uppercase'>Next + React Three Fiber</p>
          <h1 className='my-4 text-5xl font-bold leading-tight'>Next 3D Starter</h1>
          <p className='mb-8 text-2xl leading-normal'>A minimalist starter for React, React-three-fiber and Threejs.</p>
        </div>

        <div className='w-full text-center md:w-3/5'>
          <View className='flex h-96 w-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
              <Logo route='/blob' scale={0.6} position={[0, 0, 0]} />
              <Common />
            </Suspense>
          </View>
        </div>
      </div>
      <div
        className='fixed flex h-full w-1/2 select-none items-center justify-center font-light text-white'
        style={{ zIndex: 2, top: '0%' }}
      >
        {/* INNER CONTENT */}
        <div
          className='relative text-white opacity-100'
          style={{
            transform: 'translate(0%, 0px) rotateY(5deg) scale(1.00001, 1)',
            opacity: 1,
            width: '26vw',
            height: '32vw',
          }}
        >
          {/* NAME */}
          <div className='absolute bottom-12 left-16 z-10 opacity-100' style={{ opacity: 1 }}>
            <p className='my-0 font-sans text-4xl leading-6 tracking-wide'>Jenna Sinclair</p>
            <div className='mt-2 h-px w-16 bg-white' />
          </div>
          {/* /NAME */}
          <div className='absolute left-0 top-0 size-full overflow-hidden'>
            <div
              className='absolute left-0 top-0 size-full bg-cover bg-no-repeat'
              style={{
                backgroundImage: 'url("assets/images/person.jpg")',
                backgroundPosition: 'center center',
              }}
            />
            <canvas
              width={998}
              height={1228}
              style={{ display: 'block', width: 499, height: 614, zIndex: 3 }}
              className='absolute left-0 top-px block w-64'
            />
          </div>
          <div
            className='absolute left-0 top-0 size-full border border-solid border-white opacity-25'
            style={{ zIndex: -2, transform: 'translate(-2rem, 2rem)' }}
          />
          <div
            className='absolute left-0 top-0 size-full border border-solid border-white'
            style={{
              zIndex: -2,
              opacity: '0.15',
              transform: 'translate(-4rem, 4rem)',
            }}
          />
          <div
            className='absolute left-0 top-0 size-full border border-solid border-white opacity-5'
            style={{ zIndex: -2, transform: 'translate(-6rem, 6rem)' }}
          />
        </div>
        {/* /INNER CONTENT */}
      </div>

      <div
        className='relative left-1/2 w-1/2 overflow-visible font-light text-white'
        style={{
          overflow: 'visible',
          transform: 'translate3d(0px, -379.604px, 0px)',
        }}
      >
        {/* SECTION CONTAINER */}
        <div className='relative text-white' style={{ position: 'relative', maxWidth: '70rem' }}>
          {/* SECTION ( INTRODUCTION ) */}
          <div
            className='relative flex min-h-screen w-full items-center pb-8'
            style={{ paddingBottom: '2rem' }}
            id='intro'
          >
            {/* CONTAINER */}
            <div className='block w-full'>
              <p className='mb-16 mt-0 font-sans text-xl font-bold leading-6' style={{ letterSpacing: '2.24px' }}>
                INTRODUCTION
              </p>
              <h1
                className='mb-20 ml-12 mt-0 font-sans font-extralight leading-4 tracking-normal'
                style={{ fontSize: 160 }}
              >
                Im a Creative Developer &amp; Technology Expert
              </h1>
              <div className='h-px w-16 bg-white' />
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( INTRODUCTION ) */}
          {/* SECTION ( ABOUT ) */}
          <div className='relative w-full' style={{ paddingBottom: 416 }} id='about'>
            {/* CONTAINER */}
            <div className='block w-full'>
              <p
                className='mb-12 mt-0 font-sans text-xl font-bold leading-6 opacity-100'
                style={{
                  opacity: 1,
                  transform: 'translate(0px, 0px)',
                  letterSpacing: '2.24px',
                }}
              >
                ABOUT
              </p>
              <h3
                className='mb-16 ml-4 mt-0 font-sans text-6xl leading-4 tracking-normal opacity-100'
                style={{ opacity: 0, transform: 'translate(0px, 0px)' }}
              >
                My approach to building
                <br className='text-5xl tracking-tight' style={{ lineHeight: 55 }} />
                the tech brands of tomorrow.
              </h3>
              <div
                className='mb-16 h-px w-16 bg-white opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              />
              <p
                className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500 opacity-100'
                style={{ opacity: 0, transform: 'translate(0px, 0px)' }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting.
              </p>
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( ABOUT ) */}
          {/* SECTION ( ACHIEVEMENTS ) */}
          <div className='relative w-full pb-80' style={{ paddingBottom: '20rem' }}>
            {/* CONTAINER */}
            <div className='block w-full'>
              <p
                className='mb-12 mt-0 font-sans text-xl font-bold leading-6 opacity-0'
                style={{
                  opacity: 0,
                  transform: 'translate(0px, 150px)',
                  letterSpacing: '2.24px',
                }}
              >
                ACHIEVEMENTS
              </p>
              <h3
                className='mb-16 ml-4 mt-0 font-sans text-6xl leading-4 tracking-normal opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              >
                Acceleration: A rapid increase in valuation and standards.
              </h3>
              <div
                className='mb-16 h-px w-16 bg-white opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              />
              <p
                className='mb-20 mt-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500 opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text.
              </p>
              {/* CARD GRID */}
              <div className='flex flex-wrap opacity-0' style={{ opacity: 0, transform: 'translate(0px, 150px)' }}>
                {/* LEFT SIDE */}
                <div className='shrink-0 grow-0 basis-1/2'>
                  {/* ITEM */}
                  <div
                    className='relative select-none bg-neutral-900'
                    style={{
                      backgroundColor: 'rgb(24, 24, 24)',
                      paddingBottom: '96%',
                    }}
                  >
                    {/* ITEM CONTAINER */}
                    <div className='absolute left-1/2 top-1/2' style={{ transform: 'translate(-50%, -50%)' }}>
                      <h2 className='my-0 font-sans text-9xl font-extralight leading-4 tracking-normal'>40</h2>
                      <p className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>Awards</p>
                    </div>
                    {/* /ITEM CONTAINER */}
                  </div>
                  {/* /ITEM */}
                  {/* ITEM */}
                  <div className='relative bg-black' style={{ backgroundColor: 'rgb(8, 8, 8)', paddingBottom: '96%' }}>
                    {/* ITEM CONTAINER */}
                    <div className='absolute left-1/2 top-1/2' style={{ transform: 'translate(-50%, -50%)' }}>
                      <h2 className='my-0 font-sans text-9xl font-extralight leading-4 tracking-normal'>30+</h2>
                      <p className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>Apps</p>
                    </div>
                    {/* /ITEM CONTAINER */}
                  </div>
                  {/* /ITEM */}
                </div>
                {/* /LEFT SIDE */}
                {/* RIGHT SIDE */}
                <div className='mt-24 shrink-0 grow-0 basis-1/2'>
                  {/* ITEM */}
                  <div
                    className='relative bg-neutral-900'
                    style={{
                      backgroundColor: 'rgb(17, 17, 17)',
                      paddingBottom: '96%',
                    }}
                  >
                    {/* ITEM CONTAINER */}
                    <div className='absolute left-1/2 top-1/2' style={{ transform: 'translate(-50%, -50%)' }}>
                      <h2 className='my-0 font-sans text-9xl font-extralight leading-4 tracking-normal'>90+</h2>
                      <p className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>Projects</p>
                    </div>
                    {/* /ITEM CONTAINER */}
                  </div>
                  {/* /ITEM */}
                  {/* ITEM */}
                  <div className='relative bg-black' style={{ backgroundColor: 'rgb(3, 3, 3)', paddingBottom: '96%' }}>
                    {/* ITEM CONTAINER */}
                    <div className='absolute left-1/2 top-1/2' style={{ transform: 'translate(-50%, -50%)' }}>
                      <h2 className='my-0 font-sans text-9xl font-extralight leading-4 tracking-normal'>130%</h2>
                      <p className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>Client ROI</p>
                    </div>
                    {/* /ITEM CONTAINER */}
                  </div>
                  {/* /ITEM */}
                </div>
                {/* /RIGHT SIDE */}
              </div>
              {/* /CARD GRID */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( ACHIEVEMENTS ) */}
          {/* SECTION ( SERVICES ) */}
          <div className='relative w-full pb-80' style={{ paddingBottom: '20rem' }}>
            {/* CONTAINER */}
            <div className='block w-full'>
              <p
                className='mb-12 mt-0 font-sans text-xl font-bold leading-6 opacity-0'
                style={{
                  opacity: 0,
                  transform: 'translate(0px, 150px)',
                  letterSpacing: '2.24px',
                }}
              >
                SERVICES
              </p>
              <h3
                className='mb-16 ml-4 mt-0 font-sans text-6xl leading-4 tracking-normal opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              >
                What I can do.
              </h3>
              <div
                className='mb-16 h-px w-16 bg-white opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              />
              <p
                className='mb-16 mt-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500 opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              >
                Lorem ipsum dolor sit amet, consectetur.
                <br className='text-4xl' style={{ lineHeight: '47.6px' }} />
                adipiscing elit. Aenean et elementum purus.
              </p>
              {/* ACCORDION */}
              <ul
                className='relative mx-0 mb-0 mt-2 p-0'
                data-active-index='false'
                data-slide-Speed={200}
                style={{ listStyle: 'none' }}
              >
                {/* ACCORDION ITEM */}
                <li
                  className='relative z-10 overflow-hidden pb-8 text-left opacity-0'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 150px)',
                    listStyle: 'outside none none',
                  }}
                >
                  <div
                    className='relative block cursor-pointer border-b-2 border-solid border-white py-8 pl-0 pr-20'
                    style={{ listStyle: 'outside none none' }}
                  >
                    <h5
                      className='my-0 font-sans text-5xl leading-5 tracking-normal'
                      style={{ listStyle: 'outside none none' }}
                    >
                      Design
                    </h5>
                    <div
                      className='absolute right-8 top-1/2 size-6 border-b-2 border-l-2 border-solid border-white'
                      style={{
                        transform: 'translateY(-50%) rotate(-225deg)',
                        transition: 'all 0.1s ease 0s',
                        listStyle: 'outside none none',
                      }}
                    />
                  </div>
                  <div className='block px-0 pb-4 pt-12' style={{ listStyle: 'outside none none' }}>
                    <p
                      className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'
                      style={{ listStyle: 'outside none none' }}
                    >
                      Brand Systems - Design Systems - Visual Identities - Interaction Design - Visal Design - Motion
                      Design
                    </p>
                  </div>
                </li>
                {/* /ACCORDION ITEM */}
                {/* ACCORDION ITEM */}
                <li
                  className='relative z-10 overflow-hidden pb-8 text-left opacity-0'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 150px)',
                    listStyle: 'outside none none',
                  }}
                >
                  <div
                    className='relative block cursor-pointer border-b-2 border-solid border-white py-8 pl-0 pr-20'
                    style={{ listStyle: 'outside none none' }}
                  >
                    <h5
                      className='my-0 font-sans text-5xl leading-5 tracking-normal'
                      style={{ listStyle: 'outside none none' }}
                    >
                      Marketing
                    </h5>
                    <div
                      className='absolute right-8 top-1/2 size-6 border-b-2 border-l-2 border-solid border-white'
                      style={{
                        transform: 'translateY(-50%) rotate(-45deg)',
                        transition: 'all 0.1s ease 0s',
                        listStyle: 'outside none none',
                      }}
                    />
                  </div>
                  <div className='hidden px-0 pb-4 pt-12' style={{ display: 'none', listStyle: 'outside none none' }}>
                    <p
                      className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'
                      style={{ listStyle: 'outside none none' }}
                    >
                      Marketing Strategy - SEO Strategy - Analytics - Creative Storytelling - UX Copywriting - Google
                      PPC
                    </p>
                  </div>
                </li>
                {/* /ACCORDION ITEM */}
                {/* ACCORDION ITEM */}
                <li
                  className='relative z-10 overflow-hidden pb-8 text-left opacity-0'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 150px)',
                    listStyle: 'outside none none',
                  }}
                >
                  <div
                    className='relative block cursor-pointer border-b-2 border-solid border-white py-8 pl-0 pr-20'
                    style={{ listStyle: 'outside none none' }}
                  >
                    <h5
                      className='my-0 font-sans text-5xl leading-5 tracking-normal'
                      style={{ listStyle: 'outside none none' }}
                    >
                      Development
                    </h5>
                    <div
                      className='absolute right-8 top-1/2 size-6 border-b-2 border-l-2 border-solid border-white'
                      style={{
                        transform: 'translateY(-50%) rotate(-45deg)',
                        transition: 'all 0.1s ease 0s',
                        listStyle: 'outside none none',
                      }}
                    />
                  </div>
                  <div className='hidden px-0 pb-4 pt-12' style={{ display: 'none', listStyle: 'outside none none' }}>
                    <p
                      className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'
                      style={{ listStyle: 'outside none none' }}
                    >
                      UI Development - Technical Consultancy - App Development - Back-End Development - Cloud
                      Infrastructure - Dev-Ops - SDK Development
                    </p>
                  </div>
                </li>
                {/* /ACCORDION ITEM */}
              </ul>
              {/* /ACCORDION */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( SERVICES ) */}
          {/* SECTION ( RESUME ) */}
          <div className='relative w-full pb-80' style={{ paddingBottom: '20rem' }} id='resume'>
            {/* CONTAINER */}
            <div className='block w-full'>
              <p
                className='mb-12 mt-0 font-sans text-xl font-bold leading-6 opacity-100'
                style={{
                  opacity: 0,
                  transform: 'translate(0px, 0px)',
                  letterSpacing: '2.24px',
                }}
              >
                RESUME
              </p>
              <h3
                className='mb-16 ml-4 mt-0 font-sans text-6xl leading-4 tracking-normal opacity-100'
                style={{ opacity: 0, transform: 'translate(0px, 0px)' }}
              >
                Experience
              </h3>
              <div
                className='mb-16 h-px w-16 bg-white opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              />
              <p
                className='mb-24 mt-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500 opacity-100'
                style={{ opacity: 0, transform: 'translate(0px, 0px)' }}
              >
                Lorem ipsum dolor sit amet, consectetur.
                <br className='text-4xl' style={{ lineHeight: '47.6px' }} />
                adipiscing elit. Aenean et elementum purus.
              </p>
              {/* RESUME */}
              <div className='border-l-2 border-solid border-white'>
                {/* ITEM */}
                <div
                  className='absolute -left-20 mb-24 ml-20 flex h-10 w-px bg-white px-32 py-24 opacity-0'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 150px)',
                    flexFlow: 'column wrap',
                    content: '""',
                    top: '20%',
                    zIndex: 11,
                  }}
                >
                  <p className='mb-6 mt-0 font-sans text-4xl font-normal leading-6 tracking-normal'>
                    Google<span className='ml-8 text-xl leading-8'>2017-2019</span>
                  </p>
                  <p className='mb-4 mt-0 font-sans text-5xl leading-6 tracking-normal'>Full-Stack Developer</p>
                  <p className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </p>
                </div>
                {/* /ITEM */}
                {/* ITEM */}
                <div
                  className='absolute -left-20 mb-24 ml-20 flex h-10 w-px bg-white px-32 py-24 opacity-100'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 0px)',
                    flexFlow: 'column wrap',
                    content: '""',
                    top: '20%',
                    zIndex: 11,
                  }}
                >
                  <p className='mb-6 mt-0 font-sans text-4xl font-normal leading-6 tracking-normal'>
                    Tesla<span className='ml-8 text-xl leading-8'>2015-2017</span>
                  </p>
                  <p className='mb-4 mt-0 font-sans text-5xl leading-6 tracking-normal'>Front-End Developer</p>
                  <p className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </p>
                </div>
                {/* /ITEM */}
                {/* ITEM */}
                <div
                  className='absolute -left-20 ml-20 flex h-10 w-px bg-white px-32 py-24 opacity-100'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 0px)',
                    flexFlow: 'column wrap',
                    content: '""',
                    top: '20%',
                    zIndex: 11,
                  }}
                >
                  <p className='mb-6 mt-0 font-sans text-4xl font-normal leading-6 tracking-normal'>
                    Adobe<span className='ml-8 text-xl leading-8'>2014-2015</span>
                  </p>
                  <p className='mb-4 mt-0 font-sans text-5xl leading-6 tracking-normal'>Javascript Developer</p>
                  <p className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </p>
                </div>
                {/* /ITEM */}
              </div>
              {/* /RESUME */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( RESUME ) */}
          {/* SECTION ( SKILLS ) */}
          <div className='relative w-full pb-80' style={{ paddingBottom: '20rem' }}>
            {/* CONTAINER */}
            <div className='block w-full'>
              <p
                className='mb-12 mt-0 font-sans text-xl font-bold leading-6 opacity-0'
                style={{
                  opacity: 0,
                  transform: 'translate(0px, 150px)',
                  letterSpacing: '2.24px',
                }}
              >
                SKILLS
              </p>
              <h3
                className='mb-16 ml-4 mt-0 font-sans text-6xl leading-4 tracking-normal opacity-100'
                style={{ opacity: 0, transform: 'translate(0px, 0px)' }}
              >
                Skills I have collected
                <br className='text-5xl tracking-tight' style={{ lineHeight: 55 }} />
                over the years and days.
              </h3>
              <div
                className='mb-16 h-px w-16 bg-white opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              />
              {/* SKILL BAR */}
              <div className='opacity-0' style={{ opacity: 0, transform: 'translate(0px, 150px)' }}>
                <div className='select-none px-0 py-8'>
                  <h5 className='my-0 font-sans text-5xl leading-5 tracking-normal'>HTML/CSS</h5>
                </div>
                {/* BAR */}
                <div className='relative mb-8 block h-px w-full bg-white bg-opacity-[0.2]'>
                  <div className='absolute left-0 top-0 h-full w-5/6' style={{ width: '85%' }} />
                  <div
                    className='absolute top-0 size-4 select-none bg-neutral-900 px-5 py-1'
                    style={{
                      left: '85%',
                      transform: 'translateX(-50%) rotate(45deg)',
                      content: '""',
                      bottom: '-0.45rem',
                      zIndex: -2,
                    }}
                  >
                    <p className='my-0 font-sans text-4xl leading-6 tracking-normal'>85%</p>
                  </div>
                </div>
                {/* /BAR */}
              </div>
              {/* /SKILL BAR */}
              {/* SKILL BAR */}
              <div className='mb-8 opacity-0' style={{ opacity: 0, transform: 'translate(0px, 150px)' }}>
                <div className='select-none px-0 py-8'>
                  <h5 className='my-0 font-sans text-5xl leading-5 tracking-normal'>Javascript</h5>
                </div>
                {/* BAR */}
                <div className='relative block h-px w-full bg-white bg-opacity-[0.2]'>
                  <div className='absolute left-0 top-0 h-full w-2/3' style={{ width: '70%' }} />
                  <div
                    className='absolute top-0 size-4 select-none bg-neutral-900 px-5 py-1'
                    style={{
                      left: '70%',
                      transform: 'translateX(-50%) rotate(45deg)',
                      content: '""',
                      bottom: '-0.45rem',
                      zIndex: -2,
                    }}
                  >
                    <p className='my-0 font-sans text-4xl leading-6 tracking-normal'>70%</p>
                  </div>
                </div>
                {/* /BAR */}
              </div>
              {/* /SKILL BAR */}
              {/* SKILL BAR */}
              <div className='opacity-0' style={{ opacity: 0, transform: 'translate(0px, 150px)' }}>
                <div className='select-none px-0 py-8'>
                  <h5 className='my-0 font-sans text-5xl leading-5 tracking-normal'>WordPress</h5>
                </div>
                {/* BAR */}
                <div className='relative block h-px w-full bg-white bg-opacity-[0.2]'>
                  <div className='absolute left-0 top-0 h-full' style={{ width: '96%' }} />
                  <div
                    className='absolute top-0 size-4 select-none bg-neutral-900 px-5 py-1'
                    style={{
                      left: '95%',
                      transform: 'translateX(-50%) rotate(45deg)',
                      content: '""',
                      bottom: '-0.45rem',
                      zIndex: -2,
                    }}
                  >
                    <p className='my-0 font-sans text-4xl leading-6 tracking-normal'>95%</p>
                  </div>
                </div>
                {/* /BAR */}
              </div>
              {/* /SKILL BAR */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( SKILLS ) */}
          {/* SECTION ( PORTFOLIO ) */}
          <div className='relative w-full pb-80' style={{ paddingBottom: '20rem' }} id='portfolio'>
            {/* CONTAINER */}
            <div className='block w-full'>
              <p
                className='mb-12 mt-0 font-sans text-xl font-bold leading-6 opacity-0'
                style={{
                  opacity: 0,
                  transform: 'translate(0px, 150px)',
                  letterSpacing: '2.24px',
                }}
              >
                PORTFOLIO
              </p>
              <h3
                className='mb-16 ml-4 mt-0 font-sans text-6xl leading-4 tracking-normal opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              >
                Selected Work
              </h3>
              <div
                className='mb-16 h-px w-16 bg-white opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              />
              <p
                className='mb-24 mt-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500 opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              >
                Lorem ipsum dolor sit amet, consectetur.
                <br className='text-4xl' style={{ lineHeight: '47.6px' }} />
                adipiscing elit. Aenean et elementum purus.
              </p>
              {/* WORK GRID */}
              <div className=''>
                {/* ITEM */}
                <div
                  className='absolute left-0 top-0 block size-full select-none opacity-100'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 0px)',
                    paddingBottom: '48%',
                    content: '""',
                    zIndex: -1,
                    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))',
                  }}
                >
                  <div
                    className='absolute bottom-12 right-20 inline-block size-24 cursor-pointer select-none flex-wrap overflow-hidden border-2 border-solid border-white text-center text-2xl opacity-0'
                    style={{
                      lineHeight: 58,
                      borderRadius: '100%',
                      zIndex: 2,
                      transition: 'all 0.25s ease 0s',
                    }}
                  >
                    <span
                      className='absolute left-0 top-0 font-normal normal-case not-italic text-neutral-500'
                      style={{
                        fontFamily: 'themify',
                        speak: 'none',
                        fontVariant: 'normal',
                      }}
                    />
                  </div>
                  <div className='absolute bottom-16 left-20 overflow-hidden' style={{ zIndex: 2 }}>
                    <p className='my-0 font-sans text-5xl leading-6 tracking-normal'>Immersive Solutions</p>
                    <div className='mt-4 h-px w-16 bg-white' />
                  </div>
                  <div
                    className='absolute left-0 top-0 size-full bg-cover bg-no-repeat'
                    style={{
                      backgroundImage: 'url("assets/images/work/item-1/preview.jpg")',
                      backgroundPosition: 'center center',
                      zIndex: -2,
                    }}
                  />
                  {/* LIGHTBOX CONTENT */}
                  <div className='hidden'>
                    {/* LIGHTBOX IMAGES */}
                    <div className=''>
                      <div
                        className='absolute left-0 top-0 block size-full'
                        data-image='assets/images/work/item-1/1.jpg'
                        style={{
                          paddingBottom: '48%',
                          content: '""',
                          zIndex: -1,
                          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))',
                        }}
                      />
                      <div
                        className='absolute left-0 top-0 block size-full'
                        data-image='assets/images/work/item-1/2.jpg'
                        style={{
                          paddingBottom: '48%',
                          content: '""',
                          zIndex: -1,
                          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))',
                        }}
                      />
                      <div
                        className='absolute left-0 top-0 block size-full'
                        data-image='assets/images/work/item-1/3.jpg'
                        style={{
                          paddingBottom: '48%',
                          content: '""',
                          zIndex: -1,
                          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))',
                        }}
                      />
                    </div>
                    {/* /LIGHTBOX IMAGES */}
                    {/* INFO CONTENT */}
                    <div className=''>
                      <h3 className='mb-12 mt-0 font-sans text-6xl leading-4 tracking-normal'>Immersive Solutions</h3>
                      <div className='mb-12 h-px w-16 bg-white' />
                      <p className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    {/* /INFO CONTENT */}
                  </div>
                  {/* LIGHTBOX CONTENT */}
                </div>
                {/* /ITEM */}
                {/* ITEM */}
                <div
                  className='absolute left-0 top-0 mt-24 block size-full select-none opacity-100'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 0px)',
                    paddingBottom: '48%',
                    content: '""',
                    zIndex: -1,
                    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))',
                  }}
                >
                  <div
                    className='absolute bottom-12 right-20 inline-block size-24 cursor-pointer select-none flex-wrap overflow-hidden border-2 border-solid border-white text-center text-2xl opacity-0'
                    style={{
                      lineHeight: 58,
                      borderRadius: '100%',
                      zIndex: 2,
                      transition: 'all 0.25s ease 0s',
                    }}
                  >
                    <span
                      className='absolute left-0 top-0 font-normal normal-case not-italic text-neutral-500'
                      style={{
                        fontFamily: 'themify',
                        speak: 'none',
                        fontVariant: 'normal',
                      }}
                    />
                  </div>
                  <div className='absolute bottom-16 left-20 overflow-hidden' style={{ zIndex: 2 }}>
                    <p className='my-0 font-sans text-5xl leading-6 tracking-normal'>Surface Experience</p>
                    <div className='mt-4 h-px w-16 bg-white' />
                  </div>
                  <div
                    className='absolute left-0 top-0 size-full bg-cover bg-no-repeat'
                    style={{
                      backgroundImage: 'url("assets/images/work/item-2/preview.jpg")',
                      backgroundPosition: 'center center',
                      zIndex: -2,
                    }}
                  />
                  {/* LIGHTBOX CONTENT */}
                  <div className='hidden'>
                    {/* LIGHTBOX IMAGES */}
                    <div className=''>
                      <div
                        className='absolute left-0 top-0 block size-full'
                        data-image='assets/images/work/item-2/1.jpg'
                        style={{
                          paddingBottom: '48%',
                          content: '""',
                          zIndex: -1,
                          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))',
                        }}
                      />
                    </div>
                    {/* /LIGHTBOX IMAGES */}
                    {/* INFO CONTENT */}
                    <div className=''>
                      <h3 className='mb-12 mt-0 font-sans text-6xl leading-4 tracking-normal'>Surface Experience</h3>
                      <div className='mb-12 h-px w-16 bg-white' />
                      <p className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
                        We chose Lenoox because its the perfect combination of convenience and quality. Team takes care
                        of getting us high-quality images quickly and more than build jacket efficiently
                      </p>
                    </div>
                    {/* /INFO CONTENT */}
                  </div>
                  {/* LIGHTBOX CONTENT */}
                </div>
                {/* /ITEM */}
                {/* ITEM */}
                <div
                  className='absolute left-0 top-0 mt-24 block size-full select-none opacity-100'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 0px)',
                    paddingBottom: '48%',
                    content: '""',
                    zIndex: -1,
                    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))',
                  }}
                >
                  <div
                    className='absolute bottom-12 right-20 inline-block size-24 cursor-pointer select-none flex-wrap overflow-hidden border-2 border-solid border-white text-center text-2xl opacity-0'
                    style={{
                      lineHeight: 58,
                      borderRadius: '100%',
                      zIndex: 2,
                      transition: 'all 0.25s ease 0s',
                    }}
                  >
                    <span
                      className='absolute left-0 top-0 font-normal normal-case not-italic text-neutral-500'
                      style={{
                        fontFamily: 'themify',
                        speak: 'none',
                        fontVariant: 'normal',
                      }}
                    />
                  </div>
                  <div className='absolute bottom-16 left-20 overflow-hidden' style={{ zIndex: 2 }}>
                    <p className='my-0 font-sans text-5xl leading-6 tracking-normal'>Adaptive Generation</p>
                    <div className='mt-4 h-px w-16 bg-white' />
                  </div>
                  <div
                    className='absolute left-0 top-0 size-full bg-cover bg-no-repeat'
                    style={{
                      backgroundImage: 'url("assets/images/work/item-3/preview.jpg")',
                      backgroundPosition: 'center center',
                      zIndex: -2,
                    }}
                  />
                  {/* LIGHTBOX CONTENT */}
                  <div className='hidden'>
                    {/* LIGHTBOX IMAGES */}
                    <div className=''>
                      <div
                        className='absolute left-0 top-0 block size-full'
                        data-image='assets/images/work/item-3/1.jpg'
                        style={{
                          paddingBottom: '48%',
                          content: '""',
                          zIndex: -1,
                          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))',
                        }}
                      />
                      <div
                        className='absolute left-0 top-0 block size-full'
                        data-image='assets/images/work/item-3/2.jpg'
                        style={{
                          paddingBottom: '48%',
                          content: '""',
                          zIndex: -1,
                          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))',
                        }}
                      />
                      <div
                        className='absolute left-0 top-0 block size-full'
                        data-image='assets/images/work/item-3/3.jpg'
                        style={{
                          paddingBottom: '48%',
                          content: '""',
                          zIndex: -1,
                          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))',
                        }}
                      />
                    </div>
                    {/* /LIGHTBOX IMAGES */}
                    {/* INFO CONTENT */}
                    <div className=''>
                      <h3 className='mb-12 mt-0 font-sans text-6xl leading-4 tracking-normal'>Adaptive Generation</h3>
                      <div className='mb-12 h-px w-16 bg-white' />
                      <p className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                      </p>
                    </div>
                    {/* /INFO CONTENT */}
                  </div>
                  {/* LIGHTBOX CONTENT */}
                </div>
                {/* /ITEM */}
                {/* ITEM */}
                <div
                  className='absolute left-0 top-0 mt-24 block size-full select-none'
                  style={{
                    opacity: '0.9847',
                    transform: 'translate3d(0px, 2.2919px, 0px)',
                    paddingBottom: '48%',
                    content: '""',
                    zIndex: -1,
                    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))',
                  }}
                >
                  <div
                    className='absolute bottom-12 right-20 inline-block size-24 cursor-pointer select-none flex-wrap overflow-hidden border-2 border-solid border-white text-center text-2xl opacity-0'
                    style={{
                      lineHeight: 58,
                      borderRadius: '100%',
                      zIndex: 2,
                      transition: 'all 0.25s ease 0s',
                    }}
                  >
                    <span
                      className='absolute left-0 top-0 font-normal normal-case not-italic text-neutral-500'
                      style={{
                        fontFamily: 'themify',
                        speak: 'none',
                        fontVariant: 'normal',
                      }}
                    />
                  </div>
                  <div className='absolute bottom-16 left-20 overflow-hidden' style={{ zIndex: 2 }}>
                    <p className='my-0 font-sans text-5xl leading-6 tracking-normal'>Frame Manufacturer</p>
                    <div className='mt-4 h-px w-16 bg-white' />
                  </div>
                  <div
                    className='absolute left-0 top-0 size-full bg-cover bg-no-repeat'
                    style={{
                      backgroundImage: 'url("assets/images/work/item-4/preview.jpg")',
                      backgroundPosition: 'center center',
                      zIndex: -2,
                    }}
                  />
                  {/* LIGHTBOX CONTENT */}
                  <div className='hidden'>
                    {/* LIGHTBOX IMAGES */}
                    <div className=''>
                      <div
                        className='absolute left-0 top-0 block size-full'
                        data-image='assets/images/work/item-4/1.jpg'
                        style={{
                          paddingBottom: '48%',
                          content: '""',
                          zIndex: -1,
                          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))',
                        }}
                      />
                      <div
                        className='absolute left-0 top-0 block size-full'
                        data-image='assets/images/work/item-4/2.jpg'
                        style={{
                          paddingBottom: '48%',
                          content: '""',
                          zIndex: -1,
                          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), 40%, rgba(0, 0, 0, 0))',
                        }}
                      />
                    </div>
                    {/* /LIGHTBOX IMAGES */}
                    {/* INFO CONTENT */}
                    <div className=''>
                      <h3 className='mb-12 mt-0 font-sans text-6xl leading-4 tracking-normal'>Frame Manufacturer</h3>
                      <div className='mb-12 h-px w-16 bg-white' />
                      <p className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    {/* /INFO CONTENT */}
                  </div>
                  {/* LIGHTBOX CONTENT */}
                </div>
                {/* /ITEM */}
              </div>
              {/* /WORK GRID */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( PORTFOLIO ) */}
          {/* SECTION ( CUSTOMERS ) */}
          <div className='relative w-full pb-80' style={{ paddingBottom: '20rem' }}>
            {/* CONTAINER */}
            <div className='block w-full'>
              <p
                className='mb-12 mt-0 font-sans text-xl font-bold leading-6 opacity-100'
                style={{
                  opacity: 0,
                  transform: 'translate(0px, 0px)',
                  letterSpacing: '2.24px',
                }}
              >
                CUSTOMERS
              </p>
              <h3
                className='mb-16 ml-4 mt-0 font-sans text-6xl leading-4 tracking-normal opacity-100'
                style={{ opacity: 0, transform: 'translate(0px, 0px)' }}
              >
                Selected Clients
              </h3>
              <div
                className='mb-24 h-px w-16 bg-white opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              />
              {/* CUSTOMER GRID */}
              <div className='flex flex-wrap opacity-0' style={{ opacity: 0, transform: 'translate(0px, 150px)' }}>
                <div className='mb-20 shrink-0 grow-0 opacity-80' style={{ flexBasis: '33.3333%' }}>
                  <img
                    src='assets/images/clients/1.png'
                    className='h-auto align-middle'
                    alt='logo'
                    style={{ maxWidth: '65%' }}
                  />
                </div>
                <div className='mb-20 shrink-0 grow-0 opacity-80' style={{ flexBasis: '33.3333%' }}>
                  <img
                    src='assets/images/clients/2.png'
                    className='h-auto align-middle'
                    alt='logo'
                    style={{ maxWidth: '65%' }}
                  />
                </div>
                <div className='mb-20 shrink-0 grow-0 opacity-80' style={{ flexBasis: '33.3333%' }}>
                  <img
                    src='assets/images/clients/3.png'
                    className='h-auto align-middle'
                    alt='logo'
                    style={{ maxWidth: '65%' }}
                  />
                </div>
                <div className='mb-20 shrink-0 grow-0 opacity-80' style={{ flexBasis: '33.3333%' }}>
                  <img
                    src='assets/images/clients/4.png'
                    className='h-auto align-middle'
                    alt='logo'
                    style={{ maxWidth: '65%' }}
                  />
                </div>
                <div className='mb-20 shrink-0 grow-0 opacity-80' style={{ flexBasis: '33.3333%' }}>
                  <img
                    src='assets/images/clients/5.png'
                    className='h-auto align-middle'
                    alt='logo'
                    style={{ maxWidth: '65%' }}
                  />
                </div>
                <div className='mb-20 shrink-0 grow-0 opacity-80' style={{ flexBasis: '33.3333%' }}>
                  <img
                    src='assets/images/clients/6.png'
                    className='h-auto align-middle'
                    alt='logo'
                    style={{ maxWidth: '65%' }}
                  />
                </div>
                <div className='shrink-0 grow-0 opacity-80' style={{ flexBasis: '33.3333%' }}>
                  <img
                    src='assets/images/clients/7.png'
                    className='h-auto align-middle'
                    alt='logo'
                    style={{ maxWidth: '65%' }}
                  />
                </div>
                <div className='shrink-0 grow-0 opacity-80' style={{ flexBasis: '33.3333%' }}>
                  <img
                    src='assets/images/clients/8.png'
                    className='h-auto align-middle'
                    alt='logo'
                    style={{ maxWidth: '65%' }}
                  />
                </div>
                <div className='shrink-0 grow-0 opacity-80' style={{ flexBasis: '33.3333%' }}>
                  <img
                    src='assets/images/clients/9.png'
                    className='h-auto align-middle'
                    alt='logo'
                    style={{ maxWidth: '65%' }}
                  />
                </div>
              </div>
              {/* /CUSTOMER GRID */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( CUSTOMERS ) */}
          {/* SECTION ( TESTIMONIALS ) */}
          <div className='relative w-full pb-80' style={{ paddingBottom: '20rem' }}>
            {/* CONTAINER */}
            <div className='block w-full'>
              <p
                className='mb-12 mt-0 font-sans text-xl font-bold leading-6 opacity-0'
                style={{
                  opacity: 0,
                  transform: 'translate(0px, 150px)',
                  letterSpacing: '2.24px',
                }}
              >
                TESTIMONIALS
              </p>
              <h3
                className='mb-16 ml-4 mt-0 font-sans text-6xl leading-4 tracking-normal'
                style={{
                  opacity: '0.9617',
                  transform: 'translate3d(0px, 5.7489px, 0px)',
                }}
              >
                What my customers
                <br className='text-5xl tracking-tight' style={{ lineHeight: 55 }} />
                are saying about me?
              </h3>
              <div
                className='mb-24 h-px w-16 bg-white opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              />
              {/* TESTIMONIAL CAROUSEL */}
              <div
                className='relative block select-none opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              >
                <div
                  className='absolute left-0 top-0 inline-block size-24 cursor-pointer select-none flex-wrap overflow-hidden border-2 border-solid border-white text-center text-2xl opacity-0'
                  aria-disabled='true'
                  style={{
                    lineHeight: 58,
                    borderRadius: '100%',
                    zIndex: 4,
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.3s ease 0s',
                  }}
                >
                  <span
                    className='absolute left-0 top-0 font-normal normal-case not-italic text-neutral-500'
                    style={{
                      fontFamily: 'themify',
                      speak: 'none',
                      fontVariant: 'normal',
                    }}
                  />
                </div>
                {/* ITEM */}
                <div
                  className='relative m-0 block overflow-hidden p-0'
                  style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                >
                  <div
                    className='relative left-0 top-0 clear-both mx-auto table w-64 opacity-100'
                    style={{
                      opacity: 1,
                      width: 2100,
                      content: '""',
                      transform: 'translate3d(0px, 0px, 0px)',
                    }}
                  >
                    <div
                      className='relative left-0 top-0 float-left block h-full w-64 opacity-100'
                      data-slick-index={0}
                      aria-hidden='false'
                      tabIndex={0}
                      style={{
                        width: 700,
                        position: 'relative',
                        left: 0,
                        top: 0,
                        zIndex: 999,
                        opacity: 1,
                        minHeight: 1,
                      }}
                    >
                      <p className='relative my-0 bg-neutral-900 px-32 py-24 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
                        We chose Lenoox because its the perfect combination of convenience and quality. Team takes care
                        of getting us high-quality images quickly and more than build jacket efficiently
                      </p>
                      <p className='mb-0 mt-12 font-sans text-5xl leading-5 tracking-normal'>Elena Clouse</p>
                      <p className='my-0 font-sans text-5xl leading-5 tracking-normal text-neutral-500'>
                        CEO Stellar Inc.
                      </p>
                    </div>
                    <div
                      className='relative top-0 float-left block h-full w-64 opacity-0'
                      data-slick-index={1}
                      aria-hidden='true'
                      tabIndex={-1}
                      style={{
                        width: 700,
                        position: 'relative',
                        left: '-700px',
                        top: 0,
                        zIndex: 998,
                        opacity: 0,
                        minHeight: 1,
                      }}
                    >
                      <p className='relative my-0 bg-neutral-900 px-32 py-24 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
                        We chose Lenoox because the perfect combination of convenience and quality. Team takes care of
                        getting us high-quality images quickly and more than build jacket efficiently.
                      </p>
                      <p className='mb-0 mt-12 font-sans text-5xl leading-5 tracking-normal'>Brandon Hadid</p>
                      <p className='my-0 font-sans text-5xl leading-5 tracking-normal text-neutral-500'>
                        CTO Market Hero
                      </p>
                    </div>
                    <div
                      className='relative top-0 float-left block h-full w-64 opacity-0'
                      data-slick-index={2}
                      aria-hidden='true'
                      tabIndex={-1}
                      style={{
                        width: 700,
                        position: 'relative',
                        left: '-1400px',
                        top: 0,
                        zIndex: 998,
                        opacity: 0,
                        minHeight: 1,
                      }}
                    >
                      <p className='relative my-0 bg-neutral-900 px-32 py-24 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>
                        We chose Lenoox because the perfect combination of convenience and quality. Team takes care of
                        getting us high-quality images quickly and more than build jacket efficiently.
                      </p>
                      <p className='mb-0 mt-12 font-sans text-5xl leading-5 tracking-normal'>John Miller</p>
                      <p className='my-0 font-sans text-5xl leading-5 tracking-normal text-neutral-500'>
                        CTO SpaceX Industries
                      </p>
                    </div>
                  </div>
                </div>
                {/* /ITEM */}
                {/* ITEM */}
                {/* /ITEM */}
                {/* ITEM */}
                {/* /ITEM */}
                <div
                  className='absolute right-0 inline-block size-24 cursor-pointer select-none flex-wrap overflow-hidden border-2 border-solid border-white text-center text-2xl'
                  style={{
                    top: '293.969px',
                    lineHeight: 58,
                    borderRadius: '100%',
                    zIndex: 4,
                    transform: 'translate(50%, 50%)',
                    transition: 'all 0.3s ease 0s',
                  }}
                  aria-disabled='false'
                >
                  <span
                    className='absolute left-0 top-0 font-normal normal-case not-italic text-neutral-500'
                    style={{
                      fontFamily: 'themify',
                      speak: 'none',
                      fontVariant: 'normal',
                    }}
                  />
                </div>
              </div>
              {/* /TESTIMONIAL CAROUSEL */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( TESTIMONIALS ) */}
          {/* SECTION ( PRICING ) */}
          <div className='relative w-full pb-80' style={{ paddingBottom: '20rem' }}>
            {/* CONTAINER */}
            <div className='block w-full'>
              <p
                className='mb-12 mt-0 font-sans text-xl font-bold leading-6 opacity-100'
                style={{
                  opacity: 0,
                  transform: 'translate(0px, 0px)',
                  letterSpacing: '2.24px',
                }}
              >
                PRICING
              </p>
              <h3
                className='mb-16 ml-4 mt-0 font-sans text-6xl leading-4 tracking-normal'
                style={{
                  opacity: '0.9897',
                  transform: 'translate3d(0px, 1.5521px, 0px)',
                }}
              >
                Find the plan that’s
                <br className='text-5xl tracking-tight' style={{ lineHeight: 55 }} />
                right for your business.
              </h3>
              <div
                className='mb-16 h-px w-16 bg-white opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              />
              <p
                className='mb-16 mt-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500 opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              >
                Lorem ipsum dolor sit amet, consectetur.
                <br className='text-4xl' style={{ lineHeight: '47.6px' }} />
                adipiscing elit. Aenean et elementum purus.
              </p>
              {/* PRICING ACCORDION */}
              <ul
                className='relative mx-0 mb-0 mt-2 p-0'
                data-active-index='false'
                data-slide-Speed={200}
                style={{ listStyle: 'none' }}
              >
                {/* ACCORDION ITEM */}
                <li
                  className='relative z-10 overflow-hidden bg-black px-24 pb-8 pt-20 text-left opacity-0'
                  style={{
                    backgroundColor: 'rgb(3, 3, 3)',
                    opacity: 0,
                    transform: 'translate(0px, 150px)',
                    listStyle: 'outside none none',
                  }}
                >
                  {/* HEAD */}
                  <div
                    className='relative block cursor-pointer border-b-0 p-0'
                    style={{ listStyle: 'outside none none' }}
                  >
                    <div
                      className='absolute right-0 top-1/2 size-6 border-b-2 border-l-2 border-solid border-white'
                      style={{
                        transform: 'translateY(-50%) rotate(-45deg)',
                        transition: 'all 0.1s ease 0s',
                        listStyle: 'outside none none',
                      }}
                    />
                    <p
                      className='mb-2 mt-0 font-sans text-4xl font-normal leading-6 tracking-normal'
                      style={{ listStyle: 'outside none none' }}
                    >
                      Full-Time
                    </p>
                    {/* PRICE */}
                    <div
                      className='flex flex-row content-center items-center'
                      style={{ listStyle: 'outside none none' }}
                    >
                      <h2
                        className='my-0 ml-4 font-sans text-9xl font-extralight leading-4 tracking-normal'
                        style={{ listStyle: 'outside none none' }}
                      >
                        $55
                      </h2>
                      <p
                        className='my-0 ml-8 font-sans text-5xl leading-6 tracking-normal text-neutral-500'
                        style={{ listStyle: 'outside none none' }}
                      >
                        /each hour
                      </p>
                    </div>
                    {/* /PRICE */}
                    <div className='mt-8 h-px w-16 bg-white' style={{ listStyle: 'outside none none' }} />
                  </div>
                  {/* /HEAD */}
                  {/* CONTENT */}
                  <div className='hidden p-0' style={{ display: 'none', listStyle: 'outside none none' }}>
                    {/* FEATURES */}
                    <div
                      className='my-12 flex justify-start'
                      style={{ flexFlow: 'wrap', listStyle: 'outside none none' }}
                    >
                      {/* FEATURE ITEM */}
                      <div className='mr-10 mt-8 inline-block align-middle' style={{ listStyle: 'outside none none' }}>
                        <span
                          className='mr-4 inline-block align-middle text-3xl font-normal normal-case not-italic leading-none text-neutral-500'
                          style={{
                            fontFamily: 'themify',
                            speak: 'none',
                            fontVariant: 'normal',
                            listStyle: 'outside none none',
                          }}
                        />
                        <p
                          className='my-0 inline-block align-middle font-sans text-5xl leading-6 tracking-normal text-neutral-500'
                          style={{ listStyle: 'outside none none' }}
                        >
                          Remote
                        </p>
                      </div>
                      {/* /FEATURE ITEM */}
                      {/* FEATURE ITEM */}
                      <div className='mr-10 mt-8 inline-block align-middle' style={{ listStyle: 'outside none none' }}>
                        <span
                          className='mr-4 inline-block align-middle text-3xl font-normal normal-case not-italic leading-none text-neutral-500'
                          style={{
                            fontFamily: 'themify',
                            speak: 'none',
                            fontVariant: 'normal',
                            listStyle: 'outside none none',
                          }}
                        />
                        <p
                          className='my-0 inline-block align-middle font-sans text-5xl leading-6 tracking-normal text-neutral-500'
                          style={{ listStyle: 'outside none none' }}
                        >
                          Weekends
                        </p>
                      </div>
                      {/* /FEATURE ITEM */}
                      {/* FEATURE ITEM */}
                      <div className='mr-10 mt-8 inline-block align-middle' style={{ listStyle: 'outside none none' }}>
                        <span
                          className='mr-4 inline-block align-middle text-3xl font-normal normal-case not-italic leading-none text-neutral-500'
                          style={{
                            fontFamily: 'themify',
                            speak: 'none',
                            fontVariant: 'normal',
                            listStyle: 'outside none none',
                          }}
                        />
                        <p
                          className='my-0 inline-block align-middle font-sans text-5xl leading-6 tracking-normal text-neutral-500'
                          style={{ listStyle: 'outside none none' }}
                        >
                          Daily Reports
                        </p>
                      </div>
                      {/* /FEATURE ITEM */}
                      {/* FEATURE ITEM */}
                      <div className='mr-10 mt-8 inline-block align-middle' style={{ listStyle: 'outside none none' }}>
                        <span
                          className='mr-4 inline-block align-middle text-3xl font-normal normal-case not-italic leading-none text-neutral-500'
                          style={{
                            fontFamily: 'themify',
                            speak: 'none',
                            fontVariant: 'normal',
                            listStyle: 'outside none none',
                          }}
                        />
                        <p
                          className='my-0 inline-block align-middle font-sans text-5xl leading-6 tracking-normal text-neutral-500'
                          style={{ listStyle: 'outside none none' }}
                        >
                          24/7 Support
                        </p>
                      </div>
                      {/* /FEATURE ITEM */}
                    </div>
                    {/* /FEATURES */}
                  </div>
                  {/* /CONTENT */}
                </li>
                {/* /ACCORDION ITEM */}
              </ul>
              {/* /PRICING ACCORDION */}
              {/* PRICING ITEM */}
              <div
                className='mb-8 mt-12 bg-neutral-900 px-24 py-20 opacity-0'
                style={{
                  backgroundColor: 'rgb(24, 24, 24)',
                  opacity: 0,
                  transform: 'translate(0px, 150px)',
                }}
              >
                <p className='mb-2 mt-0 font-sans text-4xl font-normal leading-6 tracking-normal'>Contract</p>
                {/* PRICE */}
                <div className='flex flex-row content-center items-center'>
                  <h2 className='my-0 ml-4 font-sans text-9xl font-extralight leading-4 tracking-normal'>$79</h2>
                  <p className='my-0 ml-8 font-sans text-5xl leading-6 tracking-normal text-neutral-500'>/each hour</p>
                </div>
                {/* /PRICE */}
                <div className='mt-8 h-px w-16 bg-white' />
              </div>
              {/* /PRICING ITEM */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( PRICING ) */}
          {/* SECTION ( FAQ ) */}
          <div className='relative w-full pb-80' style={{ paddingBottom: '20rem' }}>
            {/* CONTAINER */}
            <div className='block w-full'>
              <p
                className='mb-12 mt-0 font-sans text-xl font-bold leading-6 opacity-0'
                style={{
                  opacity: 0,
                  transform: 'translate(0px, 150px)',
                  letterSpacing: '2.24px',
                }}
              >
                FAQ
              </p>
              <h3
                className='mb-16 ml-4 mt-0 font-sans text-6xl leading-4 tracking-normal opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              >
                Do you have questions?
              </h3>
              <div
                className='mb-16 h-px w-16 bg-white opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              />
              {/* ACCORDION */}
              <ul
                className='relative mx-0 mb-0 mt-2 p-0'
                data-active-index={1}
                data-slide-Speed={200}
                style={{ listStyle: 'none' }}
              >
                {/* ACCORDION ITEM */}
                <li
                  className='relative z-10 overflow-hidden pb-8 text-left opacity-0'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 150px)',
                    listStyle: 'outside none none',
                  }}
                >
                  <div
                    className='relative block cursor-pointer border-b-2 border-solid border-white py-8 pl-0 pr-20'
                    style={{ listStyle: 'outside none none' }}
                  >
                    <h5
                      className='my-0 font-sans text-5xl leading-5 tracking-normal'
                      style={{ listStyle: 'outside none none' }}
                    >
                      Can I purchase for commercial work?
                    </h5>
                    <div
                      className='absolute right-8 top-1/2 size-6 border-b-2 border-l-2 border-solid border-white'
                      style={{
                        transform: 'translateY(-50%) rotate(-225deg)',
                        transition: 'all 0.1s ease 0s',
                        listStyle: 'outside none none',
                      }}
                    />
                  </div>
                  <div className='block px-0 pb-4 pt-12' style={{ listStyle: 'outside none none' }}>
                    <p
                      className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'
                      style={{ listStyle: 'outside none none' }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industrys standard since the 1500s.
                    </p>
                  </div>
                </li>
                {/* /ACCORDION ITEM */}
                {/* ACCORDION ITEM */}
                <li
                  className='relative z-10 overflow-hidden pb-8 text-left opacity-0'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 150px)',
                    listStyle: 'outside none none',
                  }}
                >
                  <div
                    className='relative block cursor-pointer border-b-2 border-solid border-white py-8 pl-0 pr-20'
                    style={{ listStyle: 'outside none none' }}
                  >
                    <h5
                      className='my-0 font-sans text-5xl leading-5 tracking-normal'
                      style={{ listStyle: 'outside none none' }}
                    >
                      How does the daily update work?
                    </h5>
                    <div
                      className='absolute right-8 top-1/2 size-6 border-b-2 border-l-2 border-solid border-white'
                      style={{
                        transform: 'translateY(-50%) rotate(-45deg)',
                        transition: 'all 0.1s ease 0s',
                        listStyle: 'outside none none',
                      }}
                    />
                  </div>
                  <div className='hidden px-0 pb-4 pt-12' style={{ display: 'none', listStyle: 'outside none none' }}>
                    <p
                      className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'
                      style={{ listStyle: 'outside none none' }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industrys standard since the 1500s.
                    </p>
                  </div>
                </li>
                {/* /ACCORDION ITEM */}
                {/* ACCORDION ITEM */}
                <li
                  className='relative z-10 overflow-hidden pb-8 text-left opacity-0'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 150px)',
                    listStyle: 'outside none none',
                  }}
                >
                  <div
                    className='relative block cursor-pointer border-b-2 border-solid border-white py-8 pl-0 pr-20'
                    style={{ listStyle: 'outside none none' }}
                  >
                    <h5
                      className='my-0 font-sans text-5xl leading-5 tracking-normal'
                      style={{ listStyle: 'outside none none' }}
                    >
                      Do you use long term contracts?
                    </h5>
                    <div
                      className='absolute right-8 top-1/2 size-6 border-b-2 border-l-2 border-solid border-white'
                      style={{
                        transform: 'translateY(-50%) rotate(-45deg)',
                        transition: 'all 0.1s ease 0s',
                        listStyle: 'outside none none',
                      }}
                    />
                  </div>
                  <div className='hidden px-0 pb-4 pt-12' style={{ display: 'none', listStyle: 'outside none none' }}>
                    <p
                      className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'
                      style={{ listStyle: 'outside none none' }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industrys standard since the 1500s.
                    </p>
                  </div>
                </li>
                {/* /ACCORDION ITEM */}
                {/* ACCORDION ITEM */}
                <li
                  className='relative z-10 overflow-hidden pb-8 text-left opacity-0'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 150px)',
                    listStyle: 'outside none none',
                  }}
                >
                  <div
                    className='relative block cursor-pointer border-b-2 border-solid border-white py-8 pl-0 pr-20'
                    style={{ listStyle: 'outside none none' }}
                  >
                    <h5
                      className='my-0 font-sans text-5xl leading-5 tracking-normal'
                      style={{ listStyle: 'outside none none' }}
                    >
                      Can you work full time?
                    </h5>
                    <div
                      className='absolute right-8 top-1/2 size-6 border-b-2 border-l-2 border-solid border-white'
                      style={{
                        transform: 'translateY(-50%) rotate(-45deg)',
                        transition: 'all 0.1s ease 0s',
                        listStyle: 'outside none none',
                      }}
                    />
                  </div>
                  <div className='hidden px-0 pb-4 pt-12' style={{ display: 'none', listStyle: 'outside none none' }}>
                    <p
                      className='my-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500'
                      style={{ listStyle: 'outside none none' }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industrys standard since the 1500s.
                    </p>
                  </div>
                </li>
                {/* /ACCORDION ITEM */}
              </ul>
              {/* /ACCORDION */}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( FAQ ) */}
          {/* SECTION ( CONTACT ) */}
          <div className='relative w-full pb-80' style={{ paddingBottom: '20rem' }} id='contact'>
            {/* CONTAINER */}
            <div className='block w-full'>
              <p
                className='mb-12 mt-0 font-sans text-xl font-bold leading-6 opacity-0'
                style={{
                  opacity: 0,
                  transform: 'translate(0px, 150px)',
                  letterSpacing: '2.24px',
                }}
              >
                CONTACT
              </p>
              <h3
                className='mb-16 ml-4 mt-0 font-sans text-6xl leading-4 tracking-normal opacity-100'
                style={{ opacity: 0, transform: 'translate(0px, 0px)' }}
              >
                Let’s get in touch.
              </h3>
              <div
                className='mb-16 h-px w-16 bg-white opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              />
              <p
                className='mb-24 mt-0 font-sans text-5xl leading-6 tracking-normal text-neutral-500 opacity-0'
                style={{ opacity: 0, transform: 'translate(0px, 150px)' }}
              >
                Fill out my form below and send me an email.
              </p>
              {/* FORM */}
              <form id='contact-form' action='assets/contact.php' method='post' autoComplete='off' className='relative'>
                <input
                  type='text'
                  id='contact-form-name'
                  className='block w-full cursor-text rounded-none border-b-2 border-solid border-white bg-none px-0 pb-8 pt-0 font-sans text-5xl leading-6 tracking-normal opacity-0'
                  name='name'
                  placeholder='* Name'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 150px)',
                    borderImage: 'initial',
                  }}
                />
                <input
                  type='text'
                  id='contact-form-email'
                  className='mt-20 block w-full cursor-text rounded-none border-b-2 border-solid border-white bg-none px-0 pb-8 pt-0 font-sans text-5xl leading-6 tracking-normal opacity-0'
                  name='email'
                  placeholder='* E-Mail'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 150px)',
                    borderImage: 'initial',
                  }}
                />
                <input
                  data-require-filling='false'
                  type='text'
                  id='contact-form-phone'
                  className='mt-20 block w-full cursor-text rounded-none border-b-2 border-solid border-white bg-none px-0 pb-8 pt-0 font-sans text-5xl leading-6 tracking-normal opacity-0'
                  name='phone'
                  placeholder='Phone'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 150px)',
                    borderImage: 'initial',
                  }}
                />
                {/*  HONEYPOT CAPTCHA - FOR SPAM PROTECTION - DO NOT REMOVE THE COUNTRY FIELD */}
                <div className='pointer-events-none absolute hidden size-0 opacity-0' style={{ zIndex: -999 }}>
                  <input
                    type='text'
                    id='contact-form-country'
                    name='taxid'
                    placeholder='* Tax ID'
                    className='block w-full cursor-text rounded-none border-b-2 border-solid border-white bg-none px-0 pb-8 pt-0 font-sans text-5xl leading-6 tracking-normal'
                    style={{ borderImage: 'initial' }}
                  />
                </div>
                {/*  / HONEYPOT CAPTCHA - FOR SPAM PROTECTION - DO NOT REMOVE THE COUNTRY FIELD */}
                <textarea
                  id='contact-form-message'
                  className='mt-20 block h-56 w-full cursor-text whitespace-pre-wrap break-words rounded-none border-b-2 border-solid border-white bg-none p-0 font-sans text-5xl leading-6 tracking-normal'
                  name='message'
                  placeholder='* Message'
                  style={{
                    opacity: '0.9971',
                    transform: 'translate3d(0px, 0.4352px, 0px)',
                    borderImage: 'initial',
                  }}
                  defaultValue={''}
                />
                {/* BUTTON AREA */}
                <div
                  className='m-0 flex items-center justify-between p-0 opacity-0'
                  style={{
                    opacity: 0,
                    transform: 'translate(0px, 150px)',
                    flexFlow: 'wrap',
                  }}
                >
                  {/* BUTTON */}
                  <button
                    type='submit'
                    className='m-0 flex h-32 cursor-pointer select-none flex-wrap items-center bg-none p-0 text-center text-5xl leading-6 tracking-normal'
                  >
                    <span className='' style={{ lineHeight: '47.6px' }}>
                      Send
                    </span>
                    <span
                      className='relative ml-8 inline-block size-24 select-none flex-wrap overflow-hidden border-2 border-solid border-white text-2xl'
                      style={{ lineHeight: 58, borderRadius: '100%' }}
                    >
                      <span
                        className='absolute left-0 top-0 font-normal normal-case not-italic text-neutral-500'
                        style={{
                          fontFamily: 'themify',
                          speak: 'none',
                          fontVariant: 'normal',
                        }}
                      />
                    </span>
                  </button>
                  {/* /BUTTON */}
                  <p className='my-0 font-sans text-4xl font-normal leading-6 tracking-normal text-neutral-500'>
                    * Marked fields are required to fill.
                  </p>
                </div>
                {/* /BUTTON AREA */}
                {/* SUCCESS BOX */}
                <div
                  className='pointer-events-none absolute left-0 top-0 flex size-full items-center justify-center bg-neutral-900 opacity-0'
                  style={{
                    zIndex: -100,
                    flexFlow: 'wrap',
                    transition: 'all 0.3s ease 0s',
                  }}
                >
                  <div
                    className='relative mr-8 inline-block size-24 cursor-pointer select-none flex-wrap overflow-hidden border-2 border-solid border-green-500 text-center text-2xl text-green-500'
                    style={{ lineHeight: 58, borderRadius: '100%' }}
                  >
                    <span
                      className='absolute left-0 top-0 font-normal normal-case not-italic text-neutral-500'
                      style={{
                        fontFamily: 'themify',
                        speak: 'none',
                        fontVariant: 'normal',
                      }}
                    />
                  </div>
                  <p className='my-0 font-sans text-5xl leading-6 tracking-normal text-green-500'>
                    Your Message has been sent!
                  </p>
                </div>
                {/* /SUCCESS BOX */}
              </form>
              {/* /FORM*/}
            </div>
            {/* /CONTAINER */}
          </div>
          {/* /SECTION ( CONTACT ) */}
          <div
            className='invisible m-0 inline size-0 overflow-hidden p-0'
            style={{
              visibility: 'hidden',
              display: 'inline',
              width: 0,
              height: 0,
              zIndex: -1,
              overflow: 'hidden',
              margin: 0,
              padding: 0,
              animationDuration: '0.1s',
              animationName: 'erd_scroll_detection_container_animation',
            }}
          >
            <div
              dir='ltr'
              className='absolute left-0 top-0 size-full flex-none overflow-hidden'
              style={{
                position: 'absolute',
                flex: '0 0 auto',
                overflow: 'hidden',
                zIndex: -1,
                visibility: 'hidden',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
              }}
            >
              <div
                className='absolute flex-none overflow-hidden'
                style={{
                  position: 'absolute',
                  flex: '0 0 auto',
                  overflow: 'hidden',
                  zIndex: -1,
                  visibility: 'hidden',
                  inset: '-18px -17px -17px -18px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    flex: '0 0 auto',
                    overflow: 'scroll',
                    zIndex: -1,
                    visibility: 'hidden',
                    width: '100%',
                    height: '100%',
                  }}
                  className='absolute size-full flex-none overflow-scroll'
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: 745,
                      height: 13427,
                    }}
                    className='absolute left-0 top-0 w-64'
                  />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    flex: '0 0 auto',
                    overflow: 'scroll',
                    zIndex: -1,
                    visibility: 'hidden',
                    width: '100%',
                    height: '100%',
                  }}
                  className='absolute size-full flex-none overflow-scroll'
                >
                  <div style={{ position: 'absolute', width: '192%', height: '192%' }} className='absolute' />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /SECTION CONTAINER */}
      </div>

      <div className='mx-auto flex w-full flex-col flex-wrap items-center p-12 md:flex-row  lg:w-4/5'>
        {/* first row */}
        <div className='relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40'>
          <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Events are propagated</h2>
          <p className='mb-8 text-gray-600'>Drag, scroll, pinch, and rotate the canvas to explore the 3D scene.</p>
        </div>
        <div className='relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40'>
          <View orbit className='relative h-full  sm:h-48 sm:w-full'>
            <Suspense fallback={null}>
              <Dog scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
              <Common color={'lightpink'} />
            </Suspense>
          </View>
        </div>
        {/* second row */}
        <div className='relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40'>
          <View orbit className='relative h-full animate-bounce sm:h-48 sm:w-full'>
            <Suspense fallback={null}>
              <Duck route='/blob' scale={2} position={[0, -1.6, 0]} />
              <Common color={'lightblue'} />
            </Suspense>
          </View>
        </div>
        <div className='w-full p-6 sm:w-1/2'>
          <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Dom and 3D are synchronized</h2>
          <p className='mb-8 text-gray-600'>
            3D Divs are renderer through the View component. It uses gl.scissor to cut the viewport into segments. You
            tie a view to a tracking div which then controls the position and bounds of the viewport. This allows you to
            have multiple views with a single, performant canvas. These views will follow their tracking elements,
            scroll along, resize, etc.
          </p>
        </div>
      </div>
    </>
  )
}
