// ScrollingDot.js
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TimelineDot = ({ triggerId, content }) => {
  const dotRef = useRef()

  useEffect(() => {
    gsap.to(dotRef.current, {
      scrollTrigger: {
        trigger: `#${triggerId}`,
        start: 'bottom 80%',
        end: 'top 40%',
        scrub: true,
        markers: true,
      },
      duration: 2,
      visibility: 'visible',
      text: content,
    })
  }, [triggerId, content])

  return (
    <p ref={dotRef} className='cursor'>
      |
    </p>
  )
}

export default TimelineDot
