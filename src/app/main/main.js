"use client";
import React, {Suspense, useRef, useState} from "react";
import Container from "../_components/Container";
import { GithubIcon, LinkedInIcon, YoutubeIcon } from "../_components/Icons1";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import Hand from "../_components/mainPage/Hand";
import AnimatedText from "../_components/AnimatedNumber";
import AnimatedNumber from "../_components/AnimatedNumber";
import Blog from "../_components/mainPage/blog";

import Link from "next/link";
import Toggle from "../_components/ToggleComp/Toggle";
import Hero from "../_components/Hero";
import Spotify from "../_components/Miscell/Spotify";
import MyStack from "../_components/MyStack";
import Details from "../_components/Details";
import Project from "../_components/Project";
import imgUrl from "../../../public/CareSync.jpg"
import {ProjectCard,ProjectCard2} from "../_components/Project";



const Typing=({ word })=>{
    word = word.split(" ")
    return (
      <>
        {word.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}
            <span> </span>
          </motion.span>
        ))}
      </>
    );
}

const Main = () => {

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


    // filter
    const [tag,setTag] = useState("All");
    const ref = useRef(null);
    
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
      setTag(newTag);
    };

    //  const filteredProjects = projectsData.filter((project) =>
    //    project.tag.includes(tag)
    //  );

    //  const cardVariants = {
    //    initial: { y: 50, opacity: 0 },
    //    animate: { y: 0, opacity: 1 },
    //  };

  return (
    // <div className="max-w-screen-xl m-auto flex justify-between">
    // <div className="max-w-screen-xl m-auto">
    <Container>
      <Suspense fallback={<p>Loading feed...</p>}>
        {/* <div className="grid auto-rows-[192px] grid-cols-1 smm:grid-cols-2 md:grid-cols-3 gap-2 transition-all duration-300 ease-in-out"> */}
        <div className="grid smm:grid-cols-2 gap-2 mdd:grid-cols-3 grid-cols-6 ">
          {/* <div className="grid  grid-cols-1 gap-2 mdd:grid-cols-3 "> */}
          <div
            className={` GridBasis pushin row-span-1 rounded-xl border-2 bg-[#c3dacb] border-slate-400/10  p-4 transition-transform duration-300 transform hover:scale-105 text-black`}
          >
            <div className="stack-top">Feature to come.</div>
            {/* <Spotify /> */}
          </div>
          <div
            id="myStack"
            className={`GridBasis pushin texture row-span-1 col-span-2 mdd:col-span-1 rounded-xl border-2 bg-[#58c0e6] border-slate-400/10  p-4 transition-transform duration-300 transform hover:scale-105 text-black`}
          >
            {/* <Resume /> */}
            <MyStack />
          </div>
          <div
            className={` GridBasis pushin row-span-1 col-span-2 mdd:col-span-1 rounded-xl border-2 !bg-transparent transition-transform duration-300 transform hover:scale-105 text-black   `}
          >
            <Blog />
          </div>
          <div
            className={` GridBasis pushin texture row-span-1 col-span-1 mdd:col-span-1 smm:col-span-1  rounded-xl border-2 border-slate-400/10 bg-[#37F76D] p-4 transition-transform duration-300 transform hover:scale-105 text-black   `}
          >
            <div className="Github_container__xhatr">
              <GithubIcon className="w-full h-auto" />
              <Link
                href={"https://github.com/MichiasShiferaw/"}
                target={"_blank"}
              >
                <div className="arrow">
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
                </div>
              </Link>
            </div>
          </div>
          <div
            className={` groupG1 GridBasis pushin texture row-span-1 col-span-1 mdd:col-span-1 smm:col-span-1 rounded-xl border-2 border-slate-400/10 bg-gray-300 p-4 transition-transform duration-300 transform hover:scale-105 text-black `}
          >
            <Toggle />
          </div>
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateY,
              rotateX,
              transformStyle: "preserve-3d",
            }}
            className={` GridBasis pushin row-span-3 col-span-4 mdd:col-span-3 mdd:row-span-3 smm:col-span-2 rounded-xl border-2 border-slate-400/10 bg-orange-200  p-2 transition-transform duration-300 transform hover:scale-105 text-black mdd:order-first`}
          >
            <Hero />
          </motion.div>
          <div
            className={` groupG GridBasis pushin texture row-span-3 col-span-1 mdd:row-span-1 mdd:col-span-3 smm:col-span-2 rounded-xl border-2 border-slate-400/10 bg-gray-300 p-2 transition-transform duration-300 transform hover:scale-105 text-black `}
          >
            <Details />
          </div>

          <motion.div
            className={` GridBasis pushin texture row-span-1 col-span-1 mdd:col-span-1 rounded-xl border-2 border-slate-400/10 bg-[#0A66C2] p-4 transition-transform duration-300 transform hover:scale-105 text-black `}
          >
            <div className="Github_container__xhatr">
              <LinkedInIcon className="w-full h-auto" />
              <Link
                href={"https://www.youtube.com/@kuubamusic"}
                target={"_blank"}
              >
                <div className="arrow">
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
                </div>
              </Link>
            </div>
          </motion.div>

          <div
            className={` GridBasis pushin texture row-span-1 col-span-1 mdd:col-span-1 rounded-xl border-2 border-slate-400/10 bg-[#e37575] p-4 transition-transform duration-300 transform hover:scale-105 text-black `}
          >
            <div className="Github_container__xhatr">
              <YoutubeIcon className="w-full h-auto" />
              <Link
                href={"https://www.youtube.com/@kuubamusic"}
                target={"_blank"}
              >
                <div className="arrow">
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
                </div>
              </Link>
            </div>
          </div>
          <div
            // drag
            // dragDirectionLock
            // dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            // dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            // dragElastic={0.5}
            // whileTap={{ cursor: "grabbing" }}
            className={` GridBasis pushin texture row-span-1 col-span-2 mdd:col-span-1 smm:col-span-2 rounded-xl border-2 border-slate-400/10 bg-gray-300 p-4 transition-transform duration-300 transform hover:scale-105 text-black text-3xl`}
          >
            <div className="contact">
              <h1 className="text-6xl font-black">Say hi!</h1>
              {/* <div className="text-center">Contact Me</div> */}
              {/* <Link
                href={"malito:michiasshif@gmail.com"}
                target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base bg-red-300 rounded-xl"
              >
                Contact Me
              </Link> */}

              <Link
                href={"malito:michiasshif@gmail.com"}
                target={"_blank"}
                className="px-1 inline-block py-1 w-50 sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#7891d8] hover:bg-[#4163c2] rounded-full px-5 py-2">
                  Contact Me
                </span>
              </Link>
            </div>
          </div>
          <ProjectCard2
            imgUrl={"./scrabblePort.png"}
            title={"Scrabble Portfolio Template"}
            description={"Template"}
            // gitUrl={"https://www.youtube.com"}
            previewUrl={"https://www.youtube.com"}
          />

          <ProjectCard
            imgUrl={"./CareSync.jpg"}
            title={"Care Sync"}
            description={" Hospital Management"}
            // gitUrl={"https://www.youtube.com"}
            previewUrl={"https://www.youtube.com"}
          />
        </div>

        {/* <MyStack/> */}
        {/* <Project /> */}
      </Suspense>
    </Container>
    // </div>
  );
};

export default Main;
