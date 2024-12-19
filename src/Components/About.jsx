import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center md:items-start w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
        </div>
        <p className='text-xl mt-20 text-justify'>
        I’m Khewang Thing, a dedicated Frontend Developer with a passion for solving complex problems and delivering exceptional user experiences. With expertise in technologies like HTML, CSS, Javascript, React and tailwindCSS. I thrive on crafting scalable, efficient, and visually appealing applications.
        </p> <br />
        <p className='text-xl text-justify'>
        Beyond coding, I enjoy exploring new technologies and continuously learning to stay ahead in the ever-evolving tech landscape. My goal is to create solutions that not only meet but exceed client expectations, making a real impact through technology. Let’s collaborate to turn your ideas into reality!
        </p>
      </div>
    </div>
  )
}

export default About
