import React from 'react'
import Link from 'next/link';
import { LinkedInIcon } from './Icons';
import { motion } from 'framer-motion';

const LinkedinSection = () => {
  return (
    <>
      <div className="mdd:hidden block">
        <div className="flex items-center justify-start">
          <div className="flex items-end">
            {/* <LinkedInIcon className="!w-32 !h-32 mdd:hidden block  " /> */}
            <LinkedInIcon
              className="!w-32 !h-32 mdd:hidden block dark:hidden"
              color={"#fff"}
            />
            <LinkedInIcon
              className="!w-32 !h-32 mdd:hidden dark:block hidden"
              color={"#8F9EF5"}
            />
          </div>
        </div>
        <div className="mt-4 mb-4 text-white ">
          {" "}
          <Link
            href={"https://www.linkedin.com/in/michiasshiferaw/"}
            target={"_blank"}
            className="flex justify-center font-bold"
          >
            <h5 className="underline  xl:text-sm text-lg  flex items-center gap-2 ">
              MichiasShiferaw
            </h5>
          </Link>
        </div>
      </div>
      <div className="mdd:flex hidden Github_container__xhatr">
        {/* <LinkedInIcon className="w-full h-auto mdd:block hidden" /> */}
        <LinkedInIcon
          className="w-full h-auto block dark:hidden"
          color={"#fff"}
        />
        <LinkedInIcon
          className="w-full h-auto dark:block hidden"
          color={"#8F9EF5"}
        />
        <Link
          href={"https://www.youtube.com/@kuubamusic"}
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
    </>
  );
}

export default LinkedinSection