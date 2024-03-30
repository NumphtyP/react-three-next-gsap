import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

const phrases = [
  'Who is the fastest Canadian of all time ? Donavan Bailey or Bruny Surin ?',
  'Top-shelf photo-finish cameras have 0.001s sampling rate but records are kept at two decimals for reasons.',
  'Donovan Bailey recorded 9.8435s at the 1996 Olympics whilst Surin achieved 9.833s, same year and month, in Seville',
  'Bailey had a reaction time of 0.174s whilst Surin had 0.127s adjusting their true times to respectively 9.661s and 9.706s.',
  'Bailey ran with a 0.7m/s tailwind at 315m altitude whilst Surin ran with a 0.2m/s tailwind at an altitude of 12m above sea-level.',
  'How much do elevation-specific pressure variations influence athlete performance performance ?',
]

const Description = () => {
  return (
    <section className='relative z-10 ml-[10vw] mt-[45vh] text-[3vw] uppercase text-white'>
      {phrases.map((phrase, i) => (
        <AnimatedText key={`phrase-${i}`}>{phrase}</AnimatedText>
      ))}
    </section>
  )
}

const AnimatedText = ({ children }) => {
  const text = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: '0 bottom',
        end: 'bottom+=300px bottom',
        scrub: true,
      },
      left: '-200px',
      opacity: 0,
    })
  }, [])

  return (
    <p ref={text} className='relative m-0 lowercase'>
      {children}
    </p>
  )
}
export default Description
