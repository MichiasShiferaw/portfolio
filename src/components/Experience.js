import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon';

const Details=({position, company, companyLink,time, address,work})=>{
  const ref = useRef(null);
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
    ref={ref}>
      <LiIcon reference={ref}/>
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        
        >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbps;
          <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
        </h3>
        <span className='capitalize font-medium text-dark/75  dark:text-light/75 xs:text-sm'>
          {time}| {address}
        </span>
        <p className='font-medium w-full md:text-sm'>{work}</p>
      </motion.div>
    </li>
  );
}


const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} =useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top  dark:bg-primaryDark dark:shadow-3xl"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"Software Engineer"}
            company={"Trend Micro"}
            companyLink={"www.youtube.com"}
            time="2002-Present"
            address="Your Mom's"
            work="Paragraph...."
          />

          <Details
            position={"Software Engineer"}
            company={"Trend Micro"}
            companyLink={"www.youtube.com"}
            time="2002-Present"
            address="Your Mom's"
            work="Paragraph...."
          />

          <Details
            position={"Software Engineer"}
            company={"Trend Micro"}
            companyLink={"www.youtube.com"}
            time="2002-Present"
            address="Your Mom's"
            work="Paragraph...."
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience