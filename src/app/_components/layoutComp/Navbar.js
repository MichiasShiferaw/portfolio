import Image from 'next/image';
import React from 'react'
import Hand from '../mainPage/Hand';
import Link from 'next/link';
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};



const Navbar = () => {
  return (
    <nav
      className="mdd:flex-col mdd:justify-center mdd:h-[180px] w-full h-[136px] flex items-center justify-between px-[3.5vw] py-0"
      style={{ opacity: "1" }}
    >
      <div className="logo sm:mb-[24px] sm:mt-[36px]">
        <div>
          <div className="box-border block max-w-full;">
            {/* Background */}
            {/* Michias */}
            {/* <div className="logo"> */}
            <Image
              src={"/favicon.png"}
              alt="My image"
              // layout="responsive"
              width={200}
              height={136}
            />
          </div>

        </div>
      </div>
      <div className="NavItemsContainer text-[19px]  gap-2 px-[12px] py-[6px]">
        <a
          href="#"
          className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
            Home
          </span>
          <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
        </a>
        <a
          href="#"
          className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
            About
          </span>
          <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
        </a>
        <a
          href="#"
          className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
            Projects
          </span>
          <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
        </a>
      </div>

      <Hand />

    </nav>
  );
}

export default Navbar;