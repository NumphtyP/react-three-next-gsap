'use client'
import React, { useEffect, useRef } from 'react'
import { Curtains, Plane } from 'curtainsjs'
import Image from 'next/image'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { vs, fs } from './Shaders'

const SmoothCurtains = () => {
  const curtainsPlanes = useRef([])

  // Function to animate the WebGL planes
  const animatePlanes = () => {
    curtainsPlanes.current.forEach((plane) => {
      // Update your uniforms, lerp values, or other animations here
      plane.uniforms.time.value += 1
    })
    curtainsPlanes.current[0].needRender() // Request rendering
  }

  useEffect(() => {
    const curtainsPlanesArray = curtainsPlanes.current
    const curtainParams = {
      container: 'canvas',
      pixelRatio: Math.min(1.5, window.devicePixelRatio),
      premultipliedAlpha: true,
      watchScroll: false,
      autoRender: false,
    }

    const curtains = new Curtains(curtainParams)

    curtains.onSuccess(() => {
      curtainsPlanesArray.forEach((plane) => {
        plane.needRender()
      })
    })

    gsap.ticker.add(animatePlanes)
  }, [])

  useEffect(() => {
    curtainsPlanes.current = Array.from(document.querySelectorAll('.plane')).map((planeEl) => {
      const isSmallPlane = planeEl.classList.contains('small-plane')
      const plane = new Plane(Curtains, planeEl, {
        vertexShader: vs,
        fragmentShader: fs,
        widthSegments: 40,
        heightSegments: 40,
        cullFace: 'none',
        // Add other necessary parameters
      })

      // Update your uniforms and set other shader parameters here
      plane.uniforms.time.value = 0
      // Set other uniform values or parameters as needed

      return plane
    })
  }, [])

  useEffect(() => {
    // Call the animation function once the component has mounted
    animatePlanes()
  }, [])

  useEffect(() => {
    // Initialize your animations
    initAnimations()
  }, [])

  return (
    <div>
      <canvas id='canvas'></canvas>
      <div
        id='content'
        className='relative mx-auto my-0 flex min-h-screen w-11/12 flex-col px-0 leading-6 text-black'
        style={{ paddingTop: '10vh', paddingBottom: '10vh' }}
      >
        <div
          className='relative mx-auto w-2/3 text-black'
          style={{ paddingBottom: '8%', marginTop: '10vh', marginBottom: '10vh' }}
        >
          <h2
            style={{
              opacity: 1,
              visibility: 'inherit',
              fontSize: '8vw',
              lineHeight: '0.9',
            }}
            className='m-0 text-center font-serif font-normal uppercase text-orange-800 opacity-100'
          >
            <span style={{ fontSize: '153.6px', lineHeight: '138.24px' }} className='flex justify-center uppercase'>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0px)',
                  opacity: 1,
                  visibility: 'inherit',
                  transformStyle: 'preserve-3d',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='relative inline-block uppercase opacity-100'
              >
                I
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0px)',
                  opacity: 1,
                  visibility: 'inherit',
                  transformStyle: 'preserve-3d',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='relative inline-block uppercase opacity-100'
              >
                s
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0px)',
                  opacity: 1,
                  visibility: 'inherit',
                  transformStyle: 'preserve-3d',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='relative inline-block uppercase opacity-100'
              >
                l
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0px)',
                  opacity: 1,
                  visibility: 'inherit',
                  transformStyle: 'preserve-3d',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='relative inline-block uppercase opacity-100'
              >
                a
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0px)',
                  opacity: 1,
                  visibility: 'inherit',
                  transformStyle: 'preserve-3d',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='relative inline-block uppercase opacity-100'
              >
                n
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0px)',
                  opacity: 1,
                  visibility: 'inherit',
                  transformStyle: 'preserve-3d',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='relative inline-block uppercase opacity-100'
              >
                d
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0px)',
                  opacity: 1,
                  visibility: 'inherit',
                  transformStyle: 'preserve-3d',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='relative inline-block uppercase opacity-100'
              >
                s
              </div>
            </span>
            <span style={{ fontSize: '153.6px', lineHeight: '138.24px' }} className='flex justify-center uppercase'>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0px)',
                  opacity: 1,
                  visibility: 'inherit',
                  transformStyle: 'preserve-3d',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='relative inline-block uppercase opacity-100'
              >
                h
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0px)',
                  opacity: 1,
                  visibility: 'inherit',
                  transformStyle: 'preserve-3d',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='relative inline-block uppercase opacity-100'
              >
                o
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0px)',
                  opacity: 1,
                  visibility: 'inherit',
                  transformStyle: 'preserve-3d',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='relative inline-block uppercase opacity-100'
              >
                p
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0px)',
                  opacity: 1,
                  visibility: 'inherit',
                  transformStyle: 'preserve-3d',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='relative inline-block uppercase opacity-100'
              >
                p
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0px)',
                  opacity: 1,
                  visibility: 'inherit',
                  transformStyle: 'preserve-3d',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='relative inline-block uppercase opacity-100'
              >
                i
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0px)',
                  opacity: 1,
                  visibility: 'inherit',
                  transformStyle: 'preserve-3d',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='relative inline-block uppercase opacity-100'
              >
                n
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0px)',
                  opacity: 1,
                  visibility: 'inherit',
                  transformStyle: 'preserve-3d',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='relative inline-block uppercase opacity-100'
              >
                g
              </div>
            </span>
          </h2>
          <p
            style={{
              opacity: 1,
              visibility: 'inherit',
              width: '35vw',
              fontSize: '1.25vw',
            }}
            className='mx-auto mb-12 mt-10 text-center leading-8 text-stone-500 opacity-100'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod nisi ac nisi rhoncus, in sollicitudin
            ipsum interdum. Nunc in leo at risus mattis vestibulum. Mauris eget turpis erat.
          </p>
          <div className='w-11/12'>
            <div className='relative h-0 w-full overflow-hidden' style={{ paddingBottom: '64%' }}>
              <div className='absolute' style={{ inset: 0 }}>
                <Image
                  src='https://source.unsplash.com/featured/1600x900/?boat,island,blue'
                  crossOrigin=''
                  data-sampler='planeTexture'
                  className='invisible'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 right-0 w-1/3'>
            <div className='relative h-0 w-full overflow-hidden' style={{ paddingBottom: '128%' }}>
              <div className='absolute' style={{ inset: 0 }}>
                <Image
                  src='https://source.unsplash.com/featured/1280x1600/?boat,island,blue'
                  crossOrigin=''
                  data-sampler='planeTexture'
                  className='invisible'
                  alt=''
                />
              </div>
            </div>
          </div>
          <span
            className='absolute left-0 inline-block border border-solid border-orange-800 px-5 py-3 leading-7 text-orange-800'
            style={{
              opacity: '0.98',
              visibility: 'inherit',
              bottom: '-2em',
              fontSize: '1vw',
            }}
          >
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
                transformStyle: 'preserve-3d',
              }}
              className='relative inline-block text-xl opacity-100'
            >
              R
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
                transformStyle: 'preserve-3d',
              }}
              className='relative inline-block text-xl opacity-100'
            >
              e
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate3d(0px, 0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
                transformStyle: 'preserve-3d',
              }}
              className='relative inline-block text-xl opacity-100'
            >
              a
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate3d(0px, 0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
                transformStyle: 'preserve-3d',
              }}
              className='relative inline-block text-xl opacity-100'
            >
              d
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate3d(0px, 0px, 0px) rotateX(0.0001deg)',
                opacity: 1,
                visibility: 'inherit',
                transformStyle: 'preserve-3d',
              }}
              className='relative inline-block text-xl opacity-100'
            >
              m
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate3d(0px, 0px, 0px) rotateX(0.0006deg)',
                opacity: 1,
                visibility: 'inherit',
              }}
              className='relative inline-block text-xl opacity-100'
            >
              o
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate3d(0px, 0.0001px, 0px) rotateX(0.0018deg)',
                opacity: '0.9999',
                visibility: 'inherit',
              }}
              className='relative inline-block text-xl'
            >
              r
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate3d(0px, 0.0003px, 0px) rotateX(0.0042deg)',
                opacity: '0.9999',
                visibility: 'inherit',
              }}
              className='relative inline-block text-xl'
            >
              e
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate3d(0px, 0.0006px, 0px) rotateX(0.0085deg)',
                opacity: '0.9998',
                visibility: 'inherit',
              }}
              className='relative inline-block text-xl'
            >
              →
            </div>
          </span>
        </div>
        <div
          className='relative mx-auto w-1/2 text-black'
          style={{ paddingBottom: '4%', marginTop: '10vh', marginBottom: '10vh' }}
        >
          <h2
            className='m-0 text-center font-serif font-normal uppercase text-orange-800 opacity-0'
            style={{ fontSize: '8vw', lineHeight: '0.9' }}
          >
            <span style={{ fontSize: '153.6px', lineHeight: '138.24px' }} className='flex justify-center uppercase'>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                M
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                o
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                u
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                n
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                t
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                a
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                i
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                n
              </div>
            </span>
            <span style={{ fontSize: '153.6px', lineHeight: '138.24px' }} className='flex justify-center uppercase'>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                h
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                i
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                k
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                i
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                n
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                g
              </div>
            </span>
          </h2>
          <p
            style={{
              opacity: 0,
              visibility: 'hidden',
              width: '35vw',
              fontSize: '1.25vw',
            }}
            className='invisible mx-auto mb-12 mt-10 text-center leading-8 text-stone-500 opacity-0'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod nisi ac nisi rhoncus, in sollicitudin
            ipsum interdum. Nunc in leo at risus mattis vestibulum. Mauris eget turpis erat.
          </p>
          <div className='w-11/12'>
            <div className='relative h-0 w-full overflow-hidden' style={{ paddingBottom: '128%' }}>
              <div className='absolute' style={{ inset: 0 }}>
                <Image
                  src='https://source.unsplash.com/featured/1280x1600/?mountain,summit,white'
                  crossOrigin=''
                  data-sampler='planeTexture'
                  className='invisible'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 right-0 w-1/2'>
            <div className='relative h-0 w-full overflow-hidden' style={{ paddingBottom: '128%' }}>
              <div className='absolute' style={{ inset: 0 }}>
                <Image
                  src='https://source.unsplash.com/featured/1280x1600/?mountain,summit,white,snow'
                  crossOrigin=''
                  data-sampler='planeTexture'
                  className='invisible'
                  alt=''
                />
              </div>
            </div>
          </div>
          <span
            className='invisible absolute left-0 inline-block border border-solid border-orange-800 px-5 py-3 leading-7 text-orange-800 opacity-0'
            style={{
              opacity: 0,
              visibility: 'hidden',
              bottom: '-2em',
              fontSize: '1vw',
            }}
          >
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              R
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              e
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              a
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              d
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              m
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              o
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              r
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              e
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              →
            </div>
          </span>
        </div>
        <div
          className='relative mx-auto w-2/3 text-black'
          style={{ paddingBottom: '8%', marginTop: '10vh', marginBottom: '10vh' }}
        >
          <h2
            className='m-0 text-center font-serif font-normal uppercase text-orange-800 opacity-0'
            style={{ fontSize: '8vw', lineHeight: '0.9' }}
          >
            <span style={{ fontSize: '153.6px', lineHeight: '138.24px' }} className='flex justify-center uppercase'>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                C
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                i
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                t
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                y
              </div>
            </span>
            <span style={{ fontSize: '153.6px', lineHeight: '138.24px' }} className='flex justify-center uppercase'>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                s
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                i
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                g
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                h
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                t
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                s
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                e
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                e
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                i
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                n
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                g
              </div>
            </span>
          </h2>
          <p
            style={{
              opacity: 0,
              visibility: 'hidden',
              width: '35vw',
              fontSize: '1.25vw',
            }}
            className='invisible mx-auto mb-12 mt-10 text-center leading-8 text-stone-500 opacity-0'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod nisi ac nisi rhoncus, in sollicitudin
            ipsum interdum. Nunc in leo at risus mattis vestibulum. Mauris eget turpis erat.
          </p>
          <div className='w-11/12' style={{ marginLeft: '8%' }}>
            <div className='relative h-0 w-full overflow-hidden' style={{ paddingBottom: '64%' }}>
              <div className='absolute' style={{ inset: 0 }}>
                <Image
                  src='https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/a-view-of-the-panathenaic-stadium-in-athens-during-the-opening-ceremony-of-the-1906.jpg'
                  crossOrigin=''
                  data-sampler='planeTexture'
                  className='invisible'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='absolute inset-x-0 bottom-0 w-1/3'>
            <div className='relative h-0 w-full overflow-hidden' style={{ paddingBottom: '128%' }}>
              <div className='absolute' style={{ inset: 0 }}>
                <Image
                  src='https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/asafa-powell-leads.jpg'
                  crossOrigin=''
                  data-sampler='planeTexture'
                  className='invisible'
                  alt=''
                />
              </div>
            </div>
          </div>
          <span
            className='invisible absolute inset-x-0 inline-block border border-solid border-orange-800 px-5 py-3 leading-7 text-orange-800 opacity-0'
            style={{
              opacity: 0,
              visibility: 'hidden',
              bottom: '-2em',
              fontSize: '1vw',
            }}
          >
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              R
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              e
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              a
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              d
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              m
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              o
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              r
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              e
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              →
            </div>
          </span>
        </div>
        <div
          className='relative mx-auto w-1/2 text-black'
          style={{ paddingBottom: '4%', marginTop: '10vh', marginBottom: '10vh' }}
        >
          <h2
            className='m-0 text-center font-serif font-normal uppercase text-orange-800 opacity-0'
            style={{ fontSize: '8vw', lineHeight: '0.9' }}
          >
            <span style={{ fontSize: '153.6px', lineHeight: '138.24px' }} className='flex justify-center uppercase'>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                F
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                o
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                r
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                e
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                s
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                t
              </div>
            </span>
            <span style={{ fontSize: '153.6px', lineHeight: '138.24px' }} className='flex justify-center uppercase'>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                t
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                r
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                e
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                k
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                k
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                i
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                n
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translate(0px, 0.125em) rotateX(35deg)',
                  opacity: 0,
                  visibility: 'hidden',
                  fontSize: '153.6px',
                  lineHeight: '138.24px',
                }}
                className='invisible relative inline-block uppercase opacity-0'
              >
                g
              </div>
            </span>
          </h2>
          <p
            style={{
              opacity: 0,
              visibility: 'hidden',
              width: '35vw',
              fontSize: '1.25vw',
            }}
            className='invisible mx-auto mb-12 mt-10 text-center leading-8 text-stone-500 opacity-0'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod nisi ac nisi rhoncus, in sollicitudin
            ipsum interdum. Nunc in leo at risus mattis vestibulum. Mauris eget turpis erat.
          </p>
          <div className='w-11/12'>
            <div className='relative h-0 w-full overflow-hidden' style={{ paddingBottom: '128%' }}>
              <div className='absolute' style={{ inset: 0 }}>
                <Image
                  src='https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/vatican.jpg'
                  crossOrigin=''
                  data-sampler='planeTexture'
                  className='invisible'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 right-0 w-1/2'>
            <div className='relative h-0 w-full overflow-hidden' style={{ paddingBottom: '128%' }}>
              <div className='absolute' style={{ inset: 0 }}>
                <Image
                  src='https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/nike-air-zoom-victory.jpg'
                  crossOrigin=''
                  data-sampler='planeTexture'
                  className='invisible'
                  alt=''
                />
              </div>
            </div>
          </div>
          <span
            className='invisible absolute left-0 inline-block border border-solid border-orange-800 px-5 py-3 leading-7 text-orange-800 opacity-0'
            style={{
              opacity: 0,
              visibility: 'hidden',
              bottom: '-2em',
              fontSize: '1vw',
            }}
          >
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              R
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              e
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              a
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              d
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              m
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              o
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              r
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              e
            </div>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'translate(0px, 0.125em) rotateX(35deg)',
                opacity: 0,
                visibility: 'hidden',
              }}
              className='relative inline-block text-xl opacity-0'
            >
              →
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}

const initAnimations = () => {
  const planeTriggeredEls = document.querySelectorAll('.plane-elements')
  planeTriggeredEls.forEach((planeEl) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: planeEl,
        start: 'top center',
      },
    })

    // Show title
    tl.set(planeEl.querySelector('h2'), { autoAlpha: 1 })

    const splittedTitles = new SplitText(planeEl.querySelectorAll('span'), {
      type: 'chars',
    })

    tl.fromTo(
      splittedTitles.chars,
      {
        autoAlpha: 0,
        rotationX: 35,
        y: '0.125em',
      },
      {
        autoAlpha: 1,
        y: 0,
        rotationX: 0,
        duration: 2.5,
        transformStyle: 'preserve-3d',
        stagger: 0.05,
        ease: 'power3.out',
      },
    )

    tl.fromTo(
      planeEl.querySelectorAll('p'),
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1.5,
      },
      0.5,
    )

    // Animate WebGL planes
    const webglPlanesEl = planeEl.querySelectorAll('.plane')
    webglPlanesEl.forEach((webglPlaneEl, index) => {
      const plane = curtainsPlanes.find((plane) => plane.htmlElement.isSameNode(webglPlaneEl))

      if (plane) {
        gsap.to(plane.uniforms.opacity, {
          value: 1,
          duration: 1,
          ease: 'power3.inOut',
          delay: 1 + index * 0.5,
        })
      }
    })

    tl.fromTo(
      planeEl.querySelectorAll('.planes-read-more'),
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1.5,
      },
      2,
    )
  })
}

export default SmoothCurtains
