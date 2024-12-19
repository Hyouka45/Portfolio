import React from 'react'
import HeroImage from '../assets/hero.jpg';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div 
    name="home" 
    className='h-screen w-full  bg-gradient-to-b  from-black via-black to-gray-800'>
      <div className=' max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl md:text-7xl font-bold  text-white'>
            I'm a Frontend developer 
          </h2>
          <p className='text-gray-500 py-4 max-w-md text-justify'>
          Hi, I'm Khewang Thing, a passionate Frontend Developer with expertise in building dynamic, user-centric web applications. From intuitive front-end designs to robust back-end architectures, I turn ideas into scalable, high-performing solutions. Let’s build something amazing together!
          </p>
            <Link to="portfolio"  smooth duration={500}  className='group text-white  my-2 p-[2px] mx-auto md:mx-0 flex justify-center items-center rounded-md cursor-pointer duration-200 h-[40px] w-[128px] card-wapper relative  size-inc shadow-xl hover:sizeinc'>
            <div className='flex items-center justify-center h-full w-full bg-gray-900 rounded-md hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-200 group-hover:ease-in-out z-[1]'>
                Portfolio  
                <span className='px-2 group-hover:rotate-90 duration-150'>
                <HiOutlineArrowNarrowRight/>
              </span>
            </div>
            
            </Link>
        </div>
        <div>
          <img src={HeroImage} alt="My profile" className='rounded-2xl mx-auto w-2/3 md:w-full hover:scale-110 duration-150 hover:shadow-[0_5px_15px_5px_gray]'/>
        </div>
      </div>
    </div>
  )
}

export default Home
