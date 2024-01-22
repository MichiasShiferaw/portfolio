"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Avatar from "./mainPage/Avatar";


const Hero = () => {
      const x = useMotionValue(0);
      const y = useMotionValue(0);

      const mouseXSpring = useSpring(x);
      const mouseYSpring = useSpring(y);

      const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["17.5deg", "-17.5deg"]
      );
      const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-17.5deg", "17.5deg"]
      );

      const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
      };

      const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
      };

  return (

    <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateY,
              rotateX,
              transformStyle: "preserve-3d",
            }} className="grid grid-cols-12 sm:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center mt-4 lg:mt-0 xs:hidden block"
      >
        <Avatar />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 xs:col-span-12 pt-4 text-center mt-6 xs:place-self-center"
      >
        <h1 className="text-black mb-8 text-5xl xl:text-2xl smm:text-lg xs:text-xl lg:leading-normal font-extrabold title dark:text-lightSnow">
          <span className="text-7xl xl:text-3xl smm:text-2xl xs:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-darkVista to-[#D3DDFB] dark:text-darkRaisin mb-4 ">
            Hello, I&apos;m{" "}
          </span>
          <br></br>

          <TypeAnimation
            sequence={[
              "Michias",
              1000,
              "A Web Developer",
              1000,
              "A Student",
              1000,
              "A Software Dev",
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

        <div className="text-end absolute mdd:relative bottom-0 right-0 mb-4 mr-4">
          <Link
            className="px-0.25 inline-block py-0.25 sm:p-1 w-50 sm:w-fit text-2xl smm:text-lg border-lightPeriwinkle hover:bg-lightPeriwinkle  dark:bg-darkRaisin dark:hover:bg-transparent dark:hover:border-darkRaisin dark:border-transparent dark:hover:text-darkRaisin border-4 rounded-full to-secondary-500 hover:border-transparent text-black dark:text-lightSnow mt-3 hover:scale-105 smm:text-center"
            href="/MichiasShiferaw_Resume.pdf"
            target={"_blank"}
            download={true}
          >
            <span className="block rounded-full px-5 py-2 sm:p-1">
              Download CV
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
    // </div>
  );
};

export default Hero;
