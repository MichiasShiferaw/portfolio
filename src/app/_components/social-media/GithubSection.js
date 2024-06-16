import React, { useState } from 'react';
import { GithubIcon } from "../Icons";
import Link from 'next/link';
import { motion } from 'framer-motion';


const GithubSection = () => {
  const [isFlipped,setIsFlipped]=useState(false)
  const [isAnimating, setIsAnimating]=useState(false)

  const handleFlip=()=>{
    // if (!isAnimating){
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    // }
  }
  return (
    <div onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
      <motion.div
        className="mdd:hidden block z-10"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <>
          <div className="flex items-center justify-start px-4">
            <div className="flex items-end">
              {/* <GithubIcon className="!w-36 !h-36 mdd:hidden block" /> */}
              <GithubIcon
                className="hover:motion-safe:animate-ping !w-32 !h-32 xl:!w-24 xl:!h-24 mdd:hidden block dark:hidden"
                color={"#fff"}
              />
              <GithubIcon
                className="hover:motion-safe:animate-ping !w-32 !h-32 xl:!w-24 xl:!h-24 mdd:hidden dark:block hidden"
                color={"#9FF5F2"}
              />
              {/* <div className="pot absolute -z-30 top-0; opacity-15">🐛</div>{" "} */}
            </div>
          </div>
          <div className="mt-4 text-black dark:text-darkicebBlue px-0.5">
            <Link href="#" className="flex justify-center font-medium">
              <h5 className="xl:hidden text-sm flex items-center gap-2 break-normal mx-4  ">
                I code in dark-mode because light attracts bugs.
              </h5>
            </Link>
          </div>
        </>
        {/* <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div> */}
      </motion.div>
      <div className="mdd:flex hidden Github_container__xhatr">
        {/* <GithubIcon className="w-full h-auto mdd:block hidden" />/ */}
        <GithubIcon
          className="w-full h-auto block dark:hidden"
          color={"#fff"}
        />
        <GithubIcon
          className="w-full h-auto dark:block hidden"
          color={"#9FF5F2"}
        />
        <Link
          href={"https://github.com/MichiasShiferaw/"}
          target={"_blank"}
          className="mdd:block hidden"
        >
          <motion.div whileHover={{ rotate: 45, scale: 1.4 }} className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.5em"
              height="0.5em"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18"></path>
              <path d="M8 6h10v10"></path>
            </svg>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default GithubSection