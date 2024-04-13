import React from 'react'

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div className='laptop:p-4 link overflow-hidden rounded-lg p-2 first:ml-0' onClick={onClick}>
      <div
        className='mob:h-auto relative h-48 overflow-hidden rounded-lg transition-all duration-300 ease-out'
        style={{ height: '600px' }}
      >
        <img
          alt={name}
          className='size-full object-cover transition-all duration-300 ease-out hover:scale-110'
          src={img}
        ></img>
      </div>
      <h1 className='mt-5 text-3xl font-medium'>{name ? name : 'Project Name'}</h1>
      <h2 className='text-xl opacity-50'>{description ? description : 'Description'}</h2>
    </div>
  )
}

export default WorkCard
