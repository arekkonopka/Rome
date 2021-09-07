import React from 'react'

const Monument = ({ monumentName, description, id }) => {
  return (
    <div className='pl-52 pr-52 mt-10 mb-20' id={id} name={id}>
      <h1 className='text-lg'>{monumentName}</h1>
      <p className='mt-5 mb-5'>{description}</p>
      <div className='p-10'><img src={''} alt='obrazek' /></div>


    </div>
  )
}

export default Monument
