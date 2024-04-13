import { motion } from 'framer-motion'
import React from 'react'

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className='bg-primary fixed inset-y-0 right-full z-30 h-screen w-screen'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className='bg-light dark:bg-dark fixed inset-y-0 right-full z-20 h-screen w-screen'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className='bg-dark dark:bg-light fixed inset-y-0 right-full z-10 h-screen w-screen'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
      />
    </>
  )
}

export default TransitionEffect
