"use client"
import { useState } from 'react';
import Image from 'next/image';
import React from 'react'
import Hand from '../mainPage/Hand';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useFilter } from '../FilterContext';



const NavLink = ({ text, selected, setSelected, tag, handleTagChange }) => {
  const handleFilterChange = (newFilter) => {
    // console.log(newFilter);
    setSelected(newFilter);
    handleTagChange(tag);
  };
  return (
    <button
      onClick={() => handleFilterChange(text)}
      className={`group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95 ${
        selected
          ? "text-black "
          : "text-lightyinBlue dark:text-lightSnow  hover:text-slate-200 "
      } transition-colors px-2.5 py-0.5 rounded-md relative`}
      // href="#"
    >
      <span className="relative z-10  transition-colors group-hover:text-black hover:border-b-4 hover:border-lightyinBlue dark:hover:border-darkicebBlue">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100 duration-300 ease-out"></span>
      {selected && (
        <motion.span
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gray-300 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

const tabs = ["Home", "About", "Projects", "Media", "Contact"];
const Navbar = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const { tag, handleTagChange } = useFilter();
  return (
    <nav
      className="mdd:flex-col mdd:justify-center mdd:h-[180px] w-full h-[136px] flex items-center justify-between px-[3.5vw] py-0"
      style={{ opacity: "1" }}
    >
      <div className="logo sm:mb-[14px] sm:mt-[150px]">
        <div>
          <div className="box-border block max-w-full;">
            {/* Background */}
            {/* Michias */}
            {/* <div className="logo"> */}
            <Image
              src={"/lightMe.png"}
              className="block dark:hidden transition-all duration-[1.5s] ease-[ease];"
              alt="My image"
              // layout="responsive"
              width={100}
              height={136}
            />
            <Image
              src={"/nightMe.png"}
              className="hidden dark:block transition-all duration-[3.5s] ease-[ease];"
              alt="My image"
              // layout="responsive"
              width={100}
              height={136}
            />
          </div>
        </div>
      </div>
      <div className="NavItemsContainer text-[19px] text-lightyinBlue gap-16 mdd:gap-4 smm:gap-3 px-16 mdd:px-4 smm:px-3 py-[6px]  border-2 border-lightFrenchGrey">
        {tabs.map((tab) => (
          <NavLink
          
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
            tag={tab}
            handleTagChange={handleTagChange}
            
          />
        ))}

      </div>

      <Hand />
    </nav>
  );
}

export default Navbar;