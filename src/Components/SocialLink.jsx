import React from 'react';
import  {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { HiMail } from "react-icons/hi";

const SocialLink = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                          LinkedIn<FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/khewang-theeng-8b302b2b7/',
            style:'rounded-tr-lg'
        },
        {
            id: 2,
            child: (
                <>
                          Github<FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/Hyouka45',
        },
        {
            id: 3,
            child: (
                <>
                          Gmail<HiMail size={30}/>
                </>
            ),
           href:'mailto:khewang212@gmail.com',
            
        },
        {
            id: 4,
            child: (
                <>
                          Instagram<FaInstagram size={30}/>
                </>
            ),
            href:'https://www.instagram.com/hyouka1_72/',
            style:'rounded-br-lg'
        },
       
    ]
  return (
    <div className='hidden xl:flex flex-col top-[35%] left-0 fixed '>
      <ul>

        {links.map(({id, child, href, style})=> (
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-lg duration-150'+" "+style}>
                <a href={href} 
                className='flex justify-between items-center w-full text-white'
                target='_blank'
                rel='noreferrer'
                >
                {child}
                    </a>
                </li>
        ))}

        
      </ul>
    </div>
  )
}

export default SocialLink
