'use client'
import { useRef } from 'react'

export default function TextOpacity({ phrase }) {
  let refs = useRef([])
  const container = useRef(null)

  const splitWords = (phrase) => {
    let body = []
    phrase.split(' ').forEach((word, i) => {
      const letters = splitLetters(word)
      body.push(<p key={word + '_' + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word) => {
    let letters = []
    word.split('').forEach((letter, i) => {
      letters.push(
        <span
          className='m-0 mr-[1.5vw] text-[3.5vw] font-bold'
          key={letter + '_' + i}
          ref={(el) => {
            refs.current.push(el)
          }}
        >
          {letter}
        </span>,
      )
    })
    return letters
  }

  return (
    <main ref={container} className='mb-[100vh] flex h-screen items-end justify-center text-[rgb(211,211,211)]'>
      <div ref={refs} className='flex w-[90%] flex-wrap'>
        {splitWords(phrase)}
      </div>
    </main>
  )
}
