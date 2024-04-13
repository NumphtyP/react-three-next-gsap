import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import WaterWave from 'react-water-wave'
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect'

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`
const moveUp = keyframes`
100%{
    transform: translateY(0);
}
`

const Text = styled.p`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;

  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay};
    font-family: var(--fontL);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .author {
    width: 100%;
    text-align: end;
    font-family: var(--fontR);
  }

  @media screen and (max-width: 70em) {
    width: 70%;
  }

  @media screen and (max-width: 48em) {
    font-size: var(--fontmd);
    height: var(--fontsm);
  }
  @media screen and (max-width: 40em) {
    width: 90%;
  }
  @media screen and (max-width: 30em) {
    font-size: var(--fontxs);
  }
`

const Quote = () => {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    let Elem = sectionRef.current

    let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: 'top top',
      pin: true,
      pinSpacing: false,
    })

    return () => {
      if (trigger) trigger.kill()
    }
  }, [])

  // add gl image as background

  return (
    <div className='relative mx-auto box-border flex size-full resize overflow-hidden text-right align-baseline text-lg font-medium leading-normal tracking-normal text-white subpixel-antialiased '>
      <div className='container fixed -z-50 m-0 mx-auto flex h-screen w-screen rounded-none border-0 p-0 transition-all '>
        <WaterWave
          imageUrl={'/images/ninesevennine/athletics-history-of-100-metres-world-record-ben-johnson.jpg'}
          style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
          dropRadius={30}
        ></WaterWave>
      </div>

      <div
        ref={sectionRef}
        className='container relative z-40 mx-auto  flex h-screen w-screen items-center justify-center rounded-none border-0 mix-blend-overlay transition-all'
      >
        <TextContainer>
          <Text delay='0s'>
            <span>&#8220; Who cares if I failed drug tests ?;</span>
          </Text>
          <Text delay='0.4s'>
            <span>&nbsp;&nbsp;&nbsp;There were hundreds of people getting off</span>
          </Text>
          <Text delay='0.8s'>
            <span>&nbsp;&nbsp;&nbsp;The climate was different back then</span>
          </Text>
          <Text delay='1.2s'>
            <span>&nbsp;&nbsp;&nbsp;Everyone was treated the same &#8221;</span>
          </Text>
          <Text delay='1.6s'>
            <span className='w-full text-end'>&#x23AF; Carl Lewis</span>
          </Text>
        </TextContainer>
      </div>
    </div>
  )
}

export default Quote
