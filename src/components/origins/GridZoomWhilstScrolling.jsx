import React, { useRef } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Flip } from 'gsap/dist/Flip'
import Image from 'next/image'
import useIsomorphicLayoutEffect from '@/templates/hooks/useIsomorphicLayoutEffect'

gsap.registerPlugin(Flip, ScrollTrigger)

const GridZoomWhilstScrolling = () => {
  const wrapper = useRef(null)
  const gridRef = useRef(null)
  const gridItemsRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gridItemsRef.current.forEach((item) => item.classList.add('final-state'))
      gridRef.current.classList.add('final-state')
      const state = Flip.getState([gridRef.current, gridItemsRef.current], {
        props: 'opacity,borderRadius',
      })
      gridRef.current.classList.remove('final-state')
      gridItemsRef.current.forEach((item) => item.classList.remove('final-state'))

      // animate with Flip
      const tl = Flip.to(state, {
        ease: 'none',
        absolute: true,
        scale: true,
        scrollTrigger: {
          trigger: '.height',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      })
    }, wrapper)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div
        ref={wrapper}
        className='m-0 box-border h-screen w-full bg-[#121111] bg-cover bg-fixed bg-center bg-no-repeat p-0 text-white subpixel-antialiased'
      >
        <section className='block px-10 leading-5 text-zinc-100'>
          <div
            className='clear-both mx-auto block text-zinc-100'
            style={{ maxWidth: 940, content: '" "', gridArea: '1 / 1 / 2 / 2' }}
          >
            <div className='flex items-center justify-center'>
              <h1 className='mx-0 mb-2 mt-5 text-center text-6xl font-extralight' style={{ lineHeight: '0.8' }}>
                Grid Zoom while Scrolling with GSAP Flip and ScrollTrigger
              </h1>
            </div>
          </div>
        </section>
        <div className='sticky top-0 w-full overflow-hidden leading-5 text-zinc-100'>
          <div
            ref={gridRef}
            className='absolute left-0 top-0 grid w-64 rounded-none p-0 opacity-100'
            data-flip-id='auto-1'
            style={{
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              padding: 0,
              gridArea: '1 / 1 / 1 / 1',
              transition: 'none 0s ease 0s',
              position: 'absolute',
              width: 1903,
              height: 919,
              top: 0,
              left: 0,
              transform: 'translate(-1920px, -937.4px)',
              borderRadius: 0,
              opacity: 1,
              willChange: 'grid-column-gap, grid-row-gap, transform',
              gap: '3.5vw',
              gridTemplateRows: 'auto auto auto',
              gridTemplateColumns: 'auto auto auto',
              gridAutoColumns: '1fr',
            }}
          >
            <div
              ref={gridItemsRef}
              className='absolute left-0 top-0 flex w-64 overflow-hidden rounded-lg p-0 opacity-100'
              data-flip-id='auto-2'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                padding: 0,
                gridArea: '1 / 1 / 1 / 1',
                transition: 'none 0s ease 0s',
                position: 'absolute',
                width: '595.2px',
                height: '284.9px',
                top: 0,
                left: 0,
                transform: 'translate(1920px, 937.4px)',
                borderRadius: 8,
                opacity: 1,
                willChange: 'opacity, border-radius, transform',
              }}
            >
              <Image
                src='https://assets.website-files.com/64c9e8aec91870fda7bf74a3/64c9f50942e58c3c159007a1_egy-1.webp'
                loading='lazy'
                alt=''
                className='absolute inline-block size-full max-w-full border-0 object-cover align-middle'
                style={{ inset: '0%' }}
              />
            </div>
            <div
              ref={gridItemsRef}
              className='absolute left-0 top-0 flex w-64 overflow-hidden rounded-lg p-0 opacity-100'
              data-flip-id='auto-3'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                padding: 0,
                gridArea: '1 / 1 / 1 / 1',
                transition: 'none 0s ease 0s',
                position: 'absolute',
                width: '595.2px',
                height: '284.9px',
                top: 0,
                left: 0,
                transform: 'translate(2582px, 937.4px)',
                borderRadius: 8,
                opacity: 1,
                willChange: 'opacity, border-radius, transform',
              }}
            >
              <Image
                src='https://assets.website-files.com/64c9e8aec91870fda7bf74a3/64c9f6f7966686a7d146ff7e_egy-9.webp'
                loading='lazy'
                alt=''
                className='absolute inline-block size-full max-w-full border-0 object-cover align-middle'
                style={{ inset: '0%' }}
              />
            </div>
            <div
              ref={gridItemsRef}
              className='absolute left-0 top-0 flex w-64 overflow-hidden rounded-lg p-0 opacity-100'
              data-flip-id='auto-4'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                padding: 0,
                gridArea: '1 / 1 / 1 / 1',
                transition: 'none 0s ease 0s',
                position: 'absolute',
                width: '595.2px',
                height: '284.9px',
                top: 0,
                left: 0,
                transform: 'translate(3245px, 937.4px)',
                borderRadius: 8,
                opacity: 1,
                willChange: 'opacity, border-radius, transform',
              }}
            >
              <Image
                src='https://assets.website-files.com/64c9e8aec91870fda7bf74a3/64c9f564e2a7676e8f05b2b9_egy-4.webp'
                loading='lazy'
                alt=''
                className='absolute inline-block size-full max-w-full border-0 object-cover align-middle'
                style={{ inset: '0%' }}
              />
            </div>
            <div
              ref={gridItemsRef}
              className='absolute left-0 top-0 flex w-64 overflow-hidden rounded-lg p-0 opacity-100'
              data-flip-id='auto-5'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                padding: 0,
                gridArea: '1 / 1 / 1 / 1',
                transition: 'none 0s ease 0s',
                position: 'absolute',
                width: '595.2px',
                height: '284.9px',
                top: 0,
                left: 0,
                transform: 'translate(1920px, 1289.4px)',
                borderRadius: 8,
                opacity: 1,
                willChange: 'opacity, border-radius, transform',
              }}
            >
              <Image
                src='https://assets.website-files.com/64c9e8aec91870fda7bf74a3/64c9f6d2966686a7d146dbdb_egy-7.webp'
                loading='lazy'
                alt=''
                className='absolute inline-block size-full max-w-full border-0 object-cover align-middle'
                style={{ inset: '0%' }}
              />
            </div>
            <div
              ref={gridItemsRef}
              className='absolute left-0 top-0 flex w-64 overflow-hidden rounded-lg p-0 opacity-100'
              data-flip-id='auto-6'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                padding: 0,
                gridArea: '1 / 1 / 1 / 1',
                transition: 'none 0s ease 0s',
                position: 'absolute',
                width: '595.2px',
                height: '284.9px',
                top: 0,
                left: 0,
                transform: 'translate(2582px, 1289.4px)',
                borderRadius: 8,
                opacity: 1,
                willChange: 'opacity, border-radius, transform',
              }}
            >
              <Image
                src='https://assets.website-files.com/64c9e8aec91870fda7bf74a3/64c9f4fc1ae882e08f229191_egy-3.webp'
                loading='lazy'
                alt=''
                className='text-zinc-100'
              />
            </div>
            <div
              ref={gridItemsRef}
              className='absolute left-0 top-0 flex w-64 overflow-hidden rounded-lg p-0 opacity-100'
              data-flip-id='auto-7'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                padding: 0,
                gridArea: '1 / 1 / 1 / 1',
                transition: 'none 0s ease 0s',
                position: 'absolute',
                width: '595.2px',
                height: '284.9px',
                top: 0,
                left: 0,
                transform: 'translate(3245px, 1289.4px)',
                borderRadius: 8,
                opacity: 1,
                willChange: 'opacity, border-radius, transform',
              }}
            >
              <Image
                src='https://assets.website-files.com/64c9e8aec91870fda7bf74a3/64c9f9e8cde1577e5e294862_egy-10.png'
                loading='lazy'
                alt=''
                className='absolute inline-block size-full max-w-full border-0 object-cover align-middle'
                style={{ inset: '0%' }}
              />
            </div>
            <div
              ref={gridItemsRef}
              className='absolute left-0 top-0 flex w-64 overflow-hidden rounded-lg p-0 opacity-100'
              data-flip-id='auto-8'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                padding: 0,
                gridArea: '1 / 1 / 1 / 1',
                transition: 'none 0s ease 0s',
                position: 'absolute',
                width: '595.2px',
                height: '284.9px',
                top: 0,
                left: 0,
                transform: 'translate(1920px, 1641.4px)',
                borderRadius: 8,
                opacity: 1,
                willChange: 'opacity, border-radius, transform',
              }}
            >
              <Image
                src='https://assets.website-files.com/64c9e8aec91870fda7bf74a3/64c9f6cd7ff2b8ff071a3a6c_egy-8.webp'
                loading='lazy'
                alt=''
                className='absolute inline-block size-full max-w-full border-0 object-cover align-middle'
                style={{ inset: '0%' }}
              />
            </div>
            <div
              ref={gridItemsRef}
              className='absolute left-0 top-0 flex w-64 overflow-hidden rounded-lg p-0 opacity-100'
              data-flip-id='auto-9'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                padding: 0,
                gridArea: '1 / 1 / 1 / 1',
                transition: 'none 0s ease 0s',
                position: 'absolute',
                width: '595.2px',
                height: '284.9px',
                top: 0,
                left: 0,
                transform: 'translate(2582px, 1641.4px)',
                borderRadius: 8,
                opacity: 1,
                willChange: 'opacity, border-radius, transform',
              }}
            >
              <Image
                src='https://assets.website-files.com/64c9e8aec91870fda7bf74a3/64c9fb2ccde1577e5e2acb20_egy-13.png'
                loading='lazy'
                alt=''
                className='absolute inline-block size-full max-w-full border-0 object-cover align-middle'
                style={{ inset: '0%' }}
              />
            </div>
            <div
              ref={gridItemsRef}
              className='absolute left-0 top-0 flex w-64 overflow-hidden rounded-lg p-0 opacity-100'
              data-flip-id='auto-10'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                padding: 0,
                gridArea: '1 / 1 / 1 / 1',
                transition: 'none 0s ease 0s',
                position: 'absolute',
                width: '595.2px',
                height: '284.9px',
                top: 0,
                left: 0,
                transform: 'translate(3245px, 1641.4px)',
                borderRadius: 8,
                opacity: 1,
                willChange: 'opacity, border-radius, transform',
              }}
            >
              <Image
                src='https://assets.website-files.com/64c9e8aec91870fda7bf74a3/64c9fb40c91870fda7d582c4_egy-14.png'
                loading='lazy'
                alt=''
                className='absolute inline-block size-full max-w-full border-0 object-cover align-middle'
                style={{ inset: '0%' }}
              />
            </div>
          </div>
        </div>
        <section className='block leading-5 text-zinc-100'>
          <div
            className='clear-both mx-auto block text-zinc-100'
            style={{ maxWidth: 940, content: '" "', gridArea: '1 / 1 / 2 / 2' }}
          >
            <div className='flex items-center justify-center'>
              <h2 className='mb-2 mt-5 text-center text-3xl font-light leading-9'>Bye bye!</h2>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default GridZoomWhilstScrolling
