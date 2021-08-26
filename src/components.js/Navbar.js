import React from 'react'
import { useHistory } from 'react-router-dom'
import flag from '../assets/images/flag.jpg'

const Navbar = ({ active }) => {


  const history = useHistory()



  return (

    <div className={`absolute top-0 z-10 pt-10 flex justify-between items-center transform transition duration-200   ${active ? 'translate-x-0' : "-translate-x-full"} sm:p-4 sm:h-14 sm:w-full sm:flex sm:translate-x-0 `}>
      <div className='ml-2 w-12 h-15'><img src={flag} alt="italy flag" /></div>
      <h1 className='text-5xl pt-12 text-center text-gray-400'>Rome</h1>
      <ul className=' flex flex-col justify-center items-center sm:flex-row'>
        <li className='p-2 cursor-pointer rounded hover:bg-black hover:text-white hover:rounded transition duration-200' onClick={() => history.push('/home')}>Home</li>
        <li className='p-2 cursor-pointer rounded hover:bg-black hover:text-white  hover:rounded  transition duration-200' onClick={() => history.push('/about')}>Projects</li>
        <li className='p-2 cursor-pointer rounded hover:bg-black hover:text-white hover:rounded  transition duration-200' onClick={() => history.push('/history')}>History</li>
        <li className='p-2 cursor-pointer rounded hover:bg-black hover:text-white hover:rounded  transition duration-200' onClick={() => history.push('/contact')}>About</li>
      </ul>
    </div>
  )
}

export default Navbar
