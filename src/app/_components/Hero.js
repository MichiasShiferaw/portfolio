"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Avatar from "./mainPage/Avatar";


const Hero = () => {
  return (
    <div className="grid grid-cols-12 sm:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 pt-4 mdd:text-center text-left justify-self-start"
      >
        <h1 className="text-black mb-8 text-5xl smm:text-3xl xs:text-xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Hello, I&apos;m{" "}
          </span>
          <br></br>

          <TypeAnimation
            sequence={[
              "Michias",
              1000,
              "Web Developer",
              1000,
              "Student",
              1000,
              "Software Dev",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I'm a fourth year student, currently looking for a 4/8month
          internships
        </p> */}

        <div>
          <Link
            className="px-1 inline-block py-1 w-50 sm:w-fit border-amber-950 border rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3"
            href="/MichiasShiferaw_Resume.pdf"
            target={"_blank"}
            download={true}
          >
            <span className="block bg-orange-400 hover:bg-orange-300 rounded-full px-5 py-2 border-amber-950">
              Download CV
            </span>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center mt-4 lg:mt-0"
      >
        <Avatar/>
      </motion.div>
    </div>
  );
};

export default Hero;
