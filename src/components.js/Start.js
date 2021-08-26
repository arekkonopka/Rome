import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Typing from 'react-typing-animation';

const Start = () => {
  const [animation, setAnimation] = useState('')
  const history = useHistory()

  const onClickBtn = () => {
    setAnimation('opacity-0')
    setTimeout(() => { history.push('/home') }, 100)
  }

  return (
    <div
      className={`shadow-xl opacity-1 flex justify-center items-center flex-col  bg-gradient-to-r from-green-400 via-gray-100 to-red-500 text-white w-screen h-screen absolute top-0 trasition duration-200 ${animation}`} >

      <div className={` h-full flex-1 flex text-center items-center p-10`}>
        <Typing
          speed={200}
          startDelay={200}
        >
          <h1 className='font-rampart text-7xl text-black'>Italy - Rome
          </h1>
        </Typing>
      </div>

      <div className='flex-1'>
        <button className='text-2xl tracking-wide text-black p-2 rounded-lg hover:bg-white border-2 hover:border-green-500 hover:text-red-600 transition duration-300 transform hover:scale-125' onClick={onClickBtn}>Start</button>
      </div>

    </div >
  )
}

export default Start
