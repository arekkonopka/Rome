import React from 'react'

const About = ({ active }) => {
  return (
    <div className={`card text-center ${active && 'ml-52'} `}>
      <p className='mt-10 ml-20 mr-20 w-auto'>
        Hi! This website was created randomly. It was made to practice tailwind.
        <br />
        <br />
        Not for commercial using.
      </p>
    </div>
  )
}

export default About
