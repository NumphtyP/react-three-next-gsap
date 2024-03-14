import { atom, useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { scenes } from './Experience'

export const slideAtom = atom(0)

export const Overlay = () => {
  const [slide, setSlide] = useAtom(slideAtom)
  const [displaySlide, setDisplaySlide] = useState(slide)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 1000)
  }, [])

  useEffect(() => {
    setVisible(false)
    setTimeout(() => {
      setDisplaySlide(slide)
      setVisible(true)
    }, 2600)
  }, [slide])
  return (
    <>
      <div
        className={`pointer-events-none fixed inset-0 z-10 flex flex-col justify-between text-black ${
          visible ? '' : 'opacity-0'
        } transition-opacity duration-1000`}
      >
        <svg className='mx-auto mt-8 w-40' viewBox='0 0 342 35' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z'
            fill='currentColor'
          ></path>
        </svg>
        <div className='absolute inset-0 flex flex-1 items-center justify-between p-4'>
          <svg
            onClick={() => setSlide((prev) => (prev > 0 ? prev - 1 : scenes.length - 1))}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='pointer-events-auto size-10 cursor-pointer transition-opacity hover:opacity-60'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18' />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='pointer-events-auto size-10 cursor-pointer transition-opacity hover:opacity-60'
            onClick={() => setSlide((prev) => (prev < scenes.length - 1 ? prev + 1 : 0))}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
          </svg>
        </div>
        <div className='flex flex-col items-center bg-gradient-to-t from-white/90 p-4 pb-10 pt-20 text-center'>
          <h1 className='text-5xl font-extrabold'>{scenes[displaySlide].name}</h1>
          <p className='italic text-opacity-60'>{scenes[displaySlide].description}</p>
          <div className='mt-10 flex items-center gap-12'>
            <div className='flex flex-col items-center'>
              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
                  />
                </svg>
                <p className='text-3xl font-semibold'>${scenes[displaySlide].price.toLocaleString()}</p>
              </div>
              <p className='text-sm opacity-80'>After Federal Tax Credit</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z'
                  />
                </svg>
                <p className='text-3xl font-semibold'>{scenes[displaySlide].range}km</p>
              </div>
              <p className='text-sm opacity-80'>With one single charge</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
import {
  AccumulativeShadows,
  Environment,
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
  Sphere,
  useGLTF,
} from '@react-three/drei'

import * as THREE from 'three'

import React, { useEffect } from 'react'
import { DEG2RAD } from 'three/src/math/MathUtils'

export const Scene = ({ mainColor, path, ...props }) => {
  const { nodes, materials, scene } = useGLTF(path)
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [scene])
  const ratioScale = Math.min(0.8, Math.max(0.5, window.innerWidth / 1920))
  return (
    <>
      <color attach='background' args={['#ffffff']} />
      <group {...props} dispose={null}>
        <PerspectiveCamera makeDefault position={[3, 3, 8]} near={0.5} />
        <OrbitControls
          autoRotate
          enablePan={false}
          maxPolarAngle={DEG2RAD * 75}
          minDistance={6}
          maxDistance={10}
          autoRotateSpeed={0.5}
        />
        <primitive object={scene} scale={ratioScale} />
        <ambientLight intensity={0.1} color='pink' />
        <AccumulativeShadows
          frames={100}
          alphaTest={0.9}
          scale={30}
          position={[0, -0.005, 0]}
          color='pink'
          opacity={0.8}
        >
          <RandomizedLight amount={4} radius={9} intensity={0.8} ambient={0.25} position={[10, 5, 15]} />
          <RandomizedLight amount={4} radius={5} intensity={0.5} position={[-5, 5, 15]} bias={0.001} />
        </AccumulativeShadows>
        <Environment blur={0.8} background>
          <Sphere scale={15}>
            <meshBasicMaterial color={mainColor} side={THREE.BackSide} />
          </Sphere>
          <Lightformer
            position={[5, 0, -5]}
            form='rect' // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color='red' // (optional = white)
            scale={[3, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />

          <Lightformer
            position={[-5, 0, 1]}
            form='circle' // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color='green' // (optional = white)
            scale={[2, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />

          <Lightformer
            position={[0, 5, -2]}
            form='ring' // circle | ring | rect (optional, default = rect)
            intensity={0.5} // power level (optional = 1)
            color='orange' // (optional = white)
            scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />
          <Lightformer
            position={[0, 0, 5]}
            form='rect' // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color='purple' // (optional = white)
            scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />
        </Environment>
      </group>
    </>
  )
}

useGLTF.preload('/models/acceleration.glb')
useGLTF.preload('/models/curveglb.glb')
useGLTF.preload('/models/start_mini.glb')
