import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import { AnimatePresence, motion } from 'framer-motion';
import colosseum from '../assets/images/HomeImg/colosseum.jpg'
import fontannaDiTrevi from '../assets/images/HomeImg/fontannaDiTrevi.jpg'
import forumRomanum from '../assets/images/HomeImg/forumRomanum.jpg'
import kaplicaSykstynska from '../assets/images/HomeImg/kaplicaSykstyńska.jpg'
import muzeaWatykanskie from '../assets/images/HomeImg/muzeaWatykanskie.jpg'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import img1 from '../assets/images/backgroundImg/img1.jpg'
import img2 from '../assets/images/backgroundImg/img2.jpg'
import img3 from '../assets/images/backgroundImg/img3.jpg'
import img4 from '../assets/images/backgroundImg/img4.jpg'
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
    forumRomanum: {
      isHover: false,
      selected: false
    },
    muzeaWatykanskie: {
      isHover: false,
      selected: false
    },
    kaplicaSykstynska: {
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
          fontannaDiTrevi: { ...mouseOn.fontannaDiTrevi, selected: false },
          forumRomanum: { ...mouseOn.forumRomanum, selected: false },
          muzeaWatykanskie: { ...mouseOn.muzeaWatykanskie, selected: false },
          kaplicaSykstynska: { ...mouseOn.kaplicaSykstynska, selected: false }
        })
        break;
      case 'fontannaDiTrevi':
        setMouseOn({
          ...mouseOn,
          fontannaDiTrevi: { ...mouseOn.fontannaDiTrevi, isHover: true, selected: true },
          colloseum: { ...mouseOn.colloseum, selected: false },
          forumRomanum: { ...mouseOn.forumRomanum, selected: false },
          muzeaWatykanskie: { ...mouseOn.muzeaWatykanskie, selected: false },
          kaplicaSykstynska: { ...mouseOn.kaplicaSykstynska, selected: false }
        })
        break
      case 'forumRomanum':
        setMouseOn({
          ...mouseOn,
          fontannaDiTrevi: { ...mouseOn.fontannaDiTrevi, selected: false },
          colloseum: { ...mouseOn.colloseum, selected: false },
          forumRomanum: { ...mouseOn.forumRomanum, isHover: true, selected: true },
          muzeaWatykanskie: { ...mouseOn.muzeaWatykanskie, selected: false },
          kaplicaSykstynska: { ...mouseOn.kaplicaSykstynska, selected: false }
        })
        break
      case 'muzeaWatykanskie':
        setMouseOn({
          ...mouseOn,
          fontannaDiTrevi: { ...mouseOn.fontannaDiTrevi, selected: false },
          colloseum: { ...mouseOn.colloseum, selected: false },
          forumRomanum: { ...mouseOn.forumRomanum, selected: false },
          muzeaWatykanskie: { ...mouseOn.muzeaWatykanskie, isHover: true, selected: true },
          kaplicaSykstynska: { ...mouseOn.kaplicaSykstynska, selected: false }
        })
        break
      case 'kaplicaSykstynska':
        setMouseOn({
          ...mouseOn,
          fontannaDiTrevi: { ...mouseOn.fontannaDiTrevi, selected: false },
          colloseum: { ...mouseOn.colloseum, selected: false },
          forumRomanum: { ...mouseOn.forumRomanum, selected: false },
          muzeaWatykanskie: { ...mouseOn.muzeaWatykanskie, selected: false },
          kaplicaSykstynska: { ...mouseOn.kaplicaSykstynska, isHover: true, selected: true }
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
      case 'forumRomanum':
        setMouseOn({
          ...mouseOn,
          forumRomanum: { ...mouseOn.forumRomanum, isHover: false, selected: true },
        })
        break
      case 'muzeaWatykanskie':
        setMouseOn({
          ...mouseOn,
          muzeaWatykanskie: { ...mouseOn.muzeaWatykanskie, isHover: false, selected: true },
        })
        break
      case 'kaplicaSykstynska':
        setMouseOn({
          ...mouseOn,
          kaplicaSykstynska: { ...mouseOn.kaplicaSykstynska, isHover: false, selected: true },
        })
        break
    }
  }



  useEffect(() => {
    if (mouseOn.colloseum.isHover) {
      setBackground(img5)
    } else if (mouseOn.fontannaDiTrevi.isHover) {
      setBackground(img2)
    } else if (mouseOn.forumRomanum.isHover) {
      setBackground(img3)
    } else if (mouseOn.muzeaWatykanskie.isHover) {
      setBackground(img1)
    } else if (mouseOn.kaplicaSykstynska.isHover) {
      setBackground(img4)
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

          <li className='monument-name m-5 relative' onMouseOver={() => onMouseOver('forumRomanum')} onMouseOut={() => onMouseOut('forumRomanum')}>Forum Romanum
            <span className='block w-2/3 h-0.5 bg-gray-200 absolute -bottom-5 -left-10 transition duration'></span></li>
          <div className={`transition duration-500 home-img-container absolute ${mouseOn.forumRomanum.isHover ? 'flex flex-col' : `${mouseOn.forumRomanum.selected ? 'opacity-1' : 'opacity-0'}`}`} >
            <img src={forumRomanum} alt="fontannaDiTrevi" className='rounded-lg ' />
            <div className='flex items-center transition duration-1000 delay-300'>
              <p className='text-xl mr-2 text-gray-300'>Let see something </p><ArrowRightAltIcon fontSize='large' className='text-gray-300' />
            </div>
          </div>


          <li className='monument-name m-5 relative' onMouseOver={() => onMouseOver('muzeaWatykanskie')} onMouseOut={() => onMouseOut('muzeaWatykanskie')} >Muzea Watykańskie
            <span className='block w-2/3 h-0.5 bg-gray-200 absolute -bottom-5 -left-10 transition duration'></span></li>
          <div className={`transition duration-500 home-img-container absolute ${mouseOn.muzeaWatykanskie.isHover ? 'flex flex-col' : `${mouseOn.muzeaWatykanskie.selected ? 'opacity-1' : 'opacity-0'}`}`} >
            <img src={muzeaWatykanskie} alt="fontannaDiTrevi" className='rounded-lg ' />
            <div className='flex items-center transition duration-1000 delay-300'>
              <p className='text-xl mr-2 text-gray-300'>Let see something </p><ArrowRightAltIcon fontSize='large' className='text-gray-300' />
            </div>
          </div>

          <li className='monument-name m-5 relative' onMouseOver={() => onMouseOver('kaplicaSykstynska')} onMouseOut={() => onMouseOut('kaplicaSykstynska')} >Kaplica Sykstyńska
            <span className='block w-2/3 h-0.5 bg-gray-200 absolute -bottom-5 -left-10 transition duration'></span></li>
          <div className={`transition duration-500 home-img-container absolute ${mouseOn.kaplicaSykstynska.isHover ? 'flex flex-col' : `${mouseOn.kaplicaSykstynska.selected ? 'opacity-1' : 'opacity-0'}`}`} >
            <img src={kaplicaSykstynska} alt="fontannaDiTrevi" className='rounded-lg ' />
            <div className='flex items-center transition duration-1000 delay-300'>
              <p className='text-xl mr-2 text-gray-300'>Let see something </p><ArrowRightAltIcon fontSize='large' className='text-gray-300' />
            </div>
          </div>



        </ul>
      </div>

    </div >
  )
}

export default Home
