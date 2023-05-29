import { frame, motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


const FramerImage = motion(Image);

const MovingImg= ({title,img,link})=>{

}

const video = ({img, title, link}) => {
  return (
    <motion.li 
      initial={{y:200}}
      whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
      viewport={{once:true}}
      className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid bordere-dark border-r-4 border-b-4 dark:border-light dark:bg-dark'
      >

      <MovingImg title={title} img={img} link={link}/>
      <span className='text-primary font-semibold pl-4 dark:text-primaryDark'>Hi</span>
      </motion.li>
    // <div>articles</div>
  )
}


const FeaturedVideos=({img,title,link})=>{
  return(
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>




      <Link 
      href={link}
      target='_blank'
      className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
        src={img}
        alt={title}
        className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority 
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>


      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2>
      </Link>
    </li>
  )
}


const videos=()=>{
  return(
    <>
      <Head>
        <title>Videos</title>
      </Head>
    </>
  )
}

export default videos