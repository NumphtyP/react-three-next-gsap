import React from 'react'

const Card = ({ children, title, subtitle }) => {
  return (
    <div className='overflow-hidden rounded-md border-none bg-slate-800'>
      {(title || subtitle) && (
        <header className='border-none'>
          <div>
            {title && <div className='mb-16 mt-0 font-sans font-extralight leading-4 tracking-normal'>{title}</div>}
            {subtitle && <div className='mb-20 mt-0 font-sans text-6xl leading-4 tracking-normal'>{subtitle}</div>}
          </div>
        </header>
      )}
      <main className='p-6 subpixel-antialiased'>{children}</main>
    </div>
  )
}

export default Card
