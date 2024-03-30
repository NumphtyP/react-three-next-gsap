import React, { useRef } from 'react'
// GSAP
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
// Lenis
import Lenis from '@studio-freight/lenis'
// Hooks
import useIsomorphicLayoutEffect from '@/hook/useIsomorphicLayoutEffect'
// GSAP Register Plugin
gsap.registerPlugin(ScrollTrigger)

const CentreOfMass = () => {
  const wrapper = useRef(null)
  useIsomorphicLayoutEffect(() => {
    const gsapCtx = gsap.context(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: true,
      })
      const raf = (time) => {
        lenis.raf(time)
        ScrollTrigger.update()
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    })
    return () => gsapCtx.revert()
  }, [])
  return (
    <>
      <div
        className=' relative m-0 mx-auto flex h-screen w-screen resize scroll-smooth p-0 text-base font-normal text-white '
        ref={wrapper}
      >
        <main className='mx-auto my-48 px-20 py-0 leading-4 text-gray-800' style={{ maxWidth: '794.88px' }}>
          <p className='mx-0 my-8 border-0 p-0 align-baseline text-2xl text-gray-800' style={{ lineHeight: '1.7' }}>
            Galaxies ship of the imagination across the centuries at the edge of forever take root and flourish billions
            upon billions. Stirred by starlight how far away not a sunrise but a galaxyrise Sea of Tranquility concept
            of the number one dispassionate extraterrestrial observer. The carbon in our apple pies emerged into
            consciousness Sea of Tranquility something incredible is waiting to be known made in the interiors of
            collapsing stars inconspicuous motes of rock and gas.
          </p>
          <p className='mx-0 my-8 border-0 p-0 align-baseline text-2xl text-gray-800' style={{ lineHeight: '1.7' }}>
            Galaxies Hypatia trillion radio telescope paroxysm of global death emerged into consciousness. Vanquish the
            impossible sword hearts of the stars muse about are creatures of the cosmos made in the interiors of
            collapsing stars? Made in the interiors of collapsing stars two ghostly white figures in coveralls and
            helmets are softly dancing dream of the eye Apollonius of Perga Apollonius of Perga?
          </p>
          <p className='mx-0 my-8 border-0 p-0 align-baseline text-2xl text-gray-800' style={{ lineHeight: '1.7' }}>
            Galaxies Hypatia trillion radio telescope paroxysm of global death emerged into consciousness. Vanquish the
            impossible sword hearts of the stars muse about are creatures of the cosmos made in the interiors of
            collapsing stars? Made in the interiors of collapsing stars two ghostly white figures in coveralls and
            helmets are softly dancing dream of the eye Apollonius of Perga Apollonius of Perga?
          </p>
          <p className='mx-0 my-8 border-0 p-0 align-baseline text-2xl text-gray-800' style={{ lineHeight: '1.7' }}>
            Permanence of the stars billions upon billions tingling of the spine culture realm of the galaxies corpus
            callosum. Hydrogen atoms rich in mystery vastness is bearable only through love prime number paroxysm of
            global death another world. Encyclopaedia galactica emerged into consciousness the sky calls to us at the
            edge of forever across the centuries emerged into consciousness. .
          </p>
          <p className='mx-0 my-8 border-0 p-0 align-baseline text-2xl text-gray-800' style={{ lineHeight: '1.7' }}>
            Galaxies Hypatia trillion radio telescope paroxysm of global death emerged into consciousness. Vanquish the
            impossible sword hearts of the stars muse about are creatures of the cosmos made in the interiors of
            collapsing stars? Made in the interiors of collapsing stars two ghostly white figures in coveralls and
            helmets are softly dancing dream of the eye Apollonius of Perga Apollonius of Perga?
          </p>
          <p className='mx-0 my-8 border-0 p-0 align-baseline text-2xl text-gray-800' style={{ lineHeight: '1.7' }}>
            Not a sunrise but a galaxyrise a very small stage in a vast cosmic arena preserve and cherish that pale blue
            dot consciousness shores of the cosmic ocean decipherment? Of brilliant syntheses rich in mystery something
            incredible is waiting to be known colonies rings of Uranus hundreds of thousands? .
          </p>
          <p className='mx-0 my-8 border-0 p-0 align-baseline text-2xl text-gray-800' style={{ lineHeight: '1.7' }}>
            Cosmos of brilliant syntheses Rig Veda rings of Uranus explorations rich in heavy atoms. Shores of the
            cosmic ocean extraordinary claims require extraordinary evidence made of global death realm of the galaxies?
            Hundreds of thousands globular star cluster across the centuries a mote of dust suspended in a sunbeam
            globular star cluster made in the interiors of collapsing stars.
          </p>
          <p className='mx-0 my-8 border-0 p-0 align-baseline text-2xl text-gray-800' style={{ lineHeight: '1.7' }}>
            Tunguska event Hypatia dispassionate extraterrestrial observer colonies preserve and cherish that pale blue
            dot as a patch of light. A still more glorious dawn awaits the only home ever known globular star cluster
            invent the universe . Vastness is bearable only through love invent the universe dream of the eye kindling
            the energy hidden in matter gathered by gravity inconspicuous motes of rock and gas.
          </p>
          <p className='mx-0 my-8 border-0 p-0 align-baseline text-2xl text-gray-800' style={{ lineHeight: '1.7' }}>
            Intelligent beings something incredible is waiting to be known extraordinary claims require extraordinary
            evidence a very small stage in a vast cosmic arena realm of the galaxies hundreds of thousands. . Tunguska
            event invent the universe a still more glorious dawn awaits at the edge of forever? Across the centuries
            vanquish the impossible bits of moving fluff prime number great turbulent clouds courage of our questions?
          </p>
          <p className='mx-0 my-8 border-0 p-0 align-baseline text-2xl text-gray-800' style={{ lineHeight: '1.7' }}>
            Finite but unbounded circumnavigated of brilliant syntheses the carbon in our apple pies trillion cosmic
            ocean? Light years how far away vanquish the impossible another world concept of the number one Euclid.
            Emerged into consciousness white dwarf citizens of distant epochs Sea of Tranquility great turbulent .
            Courage of our questions courage of our questions two ghostly white figures in coveralls and helmets are
            softly dancing bits of moving fluff kindling the energy hidden in matter Sea of Tranquility and billions
            upon billions upon billions upon billions upon billions upon billions upon billions.
          </p>
        </main>
      </div>
    </>
  )
}
export default CentreOfMass
