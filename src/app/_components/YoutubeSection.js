import Link from 'next/link';
import React from 'react';
import { YoutubeIcon } from './Icons1';
import { motion } from 'framer-motion';


const YoutubeSection = () => {
  return (
<>
      <div className="mdd:hidden block">
        <div className="flex items-center justify-start">
          <div className="flex items-end">
            <YoutubeIcon className="!w-32 !h-32 mdd:hidden block" />
          </div>
        </div>
        <div className="mt-4 mb-4 text-white">
          {" "}
          <Link href="#" className="flex justify-center font-bold">
            <h5 className="underline text-2xl 2xl:text-lg xl:text-md  flex items-center gap-2 ">
              Kuuba
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </h5>
          </Link>
        </div>
      </div>
      <div className="mdd:flex hidden Github_container__xhatr">
        <YoutubeIcon className="w-full h-auto mdd:flex hidden" />

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

export default YoutubeSection