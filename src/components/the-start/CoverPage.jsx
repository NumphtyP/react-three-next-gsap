import React, { useState, useEffect } from 'react'
import WaterWave from 'react-water-wave'

const CoverPage = () => {
  const [counter, setCounter] = useState(0)
  const backgroundImgs = [
    'https://images.unsplash.com/photo-1530053969600-caed2596d242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zaWRlJTIwc2VhfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      updateCounter()
    }, 3000)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [counter, backgroundImgs]) // Dependencies array includes counter and backgroundImgs to update based on their changes

  const updateCounter = () => {
    const newCounter = counter + 1
    if (newCounter === backgroundImgs.length) {
      setCounter(0)
    } else {
      setCounter(newCounter)
    }
  }

  return (
    <div className='relative float-left clear-both min-h-screen w-full'>
      <div className='absolute inset-y-0 left-0 z-[15] w-2/5'>
        <WaterWave
          style={{
            width: `100%`,
            height: `100%`,
            position: `relative`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
          dropRadius={12}
          perturbance={0.01}
          interactive={true}
        >
          {(methods) => <></>}
        </WaterWave>
      </div>
    </div>
  )
}

export default CoverPage
