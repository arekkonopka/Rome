import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import { AnimatePresence, motion } from 'framer-motion';
import colosseum from '../assets/images/HomeImg/colosseum.jpg'
import fontannaDiTrevi from '../assets/images/HomeImg/fontannaDiTrevi.jpg'
import forumRomanum from '../assets/images/HomeImg/forumRomanum.jpg'
import kaplicaSykstyńska from '../assets/images/HomeImg/kaplicaSykstyńska.jpg'
import muzeaWatykanskie from '../assets/images/HomeImg/muzeaWatykanskie.jpg'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import img2 from '../assets/images/backgroundImg/img2.jpg'
import img5 from '../assets/images/backgroundImg/img5.jpg'
import RomaView from '../assets/images/backgroundImg/RomaView.jpg'


const Home = () => {
  const [background, setBackground] = useState('')
  const [mouseOn, setMouseOn] = useState({
    colloseum: {
      isHover: false,
      selected: true
    },
    fontannaDiTrevi: {
      isHover: false,
      selected: false
    },
  })

  const onMouseOver = (value) => {
    switch (value) {
      case 'colloseum':
        setMouseOn({
          ...mouseOn,
          colloseum: { ...mouseOn.colloseum, isHover: true, selected: true },
          fontannaDiTrevi: { ...mouseOn.fontannaDiTrevi, selected: false }
        })
        break;
      case 'fontannaDiTrevi':
        setMouseOn({
          ...mouseOn,
          fontannaDiTrevi: { ...mouseOn.fontannaDiTrevi, isHover: true, selected: true },
          colloseum: { ...mouseOn.colloseum, selected: false }
        })
        break
    }
  }

  const onMouseOut = (value) => {
    switch (value) {
      case 'colloseum':
        setMouseOn(
          {
            ...mouseOn,
            colloseum: { ...mouseOn.colloseum, isHover: false, selected: true },
          })
        break;
      case 'fontannaDiTrevi':
        setMouseOn({
          ...mouseOn,
          fontannaDiTrevi: { ...mouseOn.fontannaDiTrevi, isHover: false, selected: true },
        })
        break
    }
  }



  useEffect(() => {
    if (mouseOn.colloseum.isHover) {
      setBackground(img5)
    } else if (mouseOn.fontannaDiTrevi.isHover) {
      setBackground(img2)
    } else {
      setBackground(RomaView)
    }
  }, [mouseOn])

  return (
    <div className={`home flex card transition duration-300 bg-gray-300`} >

      <div
        className={`absolute top-0 left-0 right-0 bottom-0 `} style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>

      <div className={`w-full  flex items-center overflow-y-hidden relative z-10`}>
        <ul className='ul-container text-gray-200 p-4 m-20 mr-25 bg-gray-800 opacity-75 transition duration-300 rounded-lg'>

          <li className='monument-name m-5 relative' onMouseOver={() => onMouseOver('colloseum')} onMouseOut={() => onMouseOut('colloseum')}>Koloseum w Rzymie
            <span className='block w-2/3 h-0.5 bg-gray-200 absolute -bottom-5 -left-10 transition duration'></span>
          </li>
          <div className={` transition duration-500 home-img-container absolute ${mouseOn.colloseum.isHover ? 'flex flex-col' : `${mouseOn.colloseum.selected ? 'opacity-1' : 'opacity-0'}`}`}>
            <img src={colosseum} alt="colloseum" className='rounded-lg ' />
            <div className='flex items-center transition duration-1000 delay-300'>
              <p className='text-xl mr-2 text-gray-500'>Let see something </p><ArrowRightAltIcon fontSize='large' className='text-gray-500' />
            </div>
          </div>

          <li className='monument-name m-5 relative' onMouseOver={() => onMouseOver('fontannaDiTrevi')} onMouseOut={() => onMouseOut('fontannaDiTrevi')}>Fontanna Di Trevi
            <span className='block w-2/3 h-0.5 bg-gray-200 absolute -bottom-5 -left-10 transition duration'></span></li>
          <div className={`transition duration-500 home-img-container absolute ${mouseOn.fontannaDiTrevi.isHover ? 'flex flex-col' : `${mouseOn.fontannaDiTrevi.selected ? 'opacity-1' : 'opacity-0'}`}`} >
            <img src={fontannaDiTrevi} alt="fontannaDiTrevi" className='rounded-lg ' />
            <div className='flex items-center transition duration-1000 delay-300'>
              <p className='text-xl mr-2 text-gray-300'>Let see something </p><ArrowRightAltIcon fontSize='large' className='text-gray-300' />
            </div>
          </div>

          <li className='monument-name m-5 relative'>Forum Romanum
            <span className='block w-2/3 h-0.5 bg-gray-200 absolute -bottom-5 -left-10 transition duration'></span></li>
          <li className='monument-name m-5 relative'>Muzea Watykańskie
            <span className='block w-2/3 h-0.5 bg-gray-200 absolute -bottom-5 -left-10 transition duration'></span></li>
          <li className='monument-name m-5 relative transition'>Kaplica Sykstyńska
            <span className='block w-2/3 h-0.5 bg-gray-200 absolute -bottom-5 -left-10 transition duration'></span></li>
        </ul>
      </div>
      {/* <div className='img-container w-1/2 flex items-center '>
        <div className='home-img-container ' >
          <img src={colosseum} alt="colosseum" />
        </div>
        <div className='home-img-container hidden'>
          <img src={fontannaDiTrevi} alt="fontannaDiTrevi" />
        </div>
        <div className='home-img-container hidden'>
          <img src={forumRomanum} alt="forumRomanum" />
        </div>
        <div className='home-img-container hidden'>
          <img src={kaplicaSykstyńska} alt="kaplicaSykstyńska" />
        </div>
        <div className='home-img-container hidden'>
          <img src={muzeaWatykanskie} alt="muzeaWatykanskie" />
        </div>

    </div> */}
    </div >
  )
}

export default Home
