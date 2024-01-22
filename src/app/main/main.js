"use client";
import React, {Suspense, useRef, useState} from "react";
import Container from "../_components/Container";
import { GithubIcon, LinkedInIcon, SpotifyIcon, YoutubeIcon } from "../_components/Icons1";
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
import { LinkArrow } from "../_components/Miscell/LinkArrow";
import Marquee from "react-fast-marquee";
import { useFilter } from "../_components/FilterContext";
import Contact from "../_components/Contact";
import GithubSection from "../_components/GithubSection";
import LinkedinSection from "../_components/LinkedinSection";
import YoutubeSection from "../_components/YoutubeSection";
import SpotifySection from "../_components/SpotifySection";




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
    // const [tag,setTag] = useState("All");
    const ref = useRef(null);
    
    const isInView = useInView(ref, { once: true });

    // const handleTagChange = (newTag) => {
    //   setTag(newTag);
    // };



    //  const cardVariants = {
    //    initial: { y: 50, opacity: 0 },
    //    animate: { y: 0, opacity: 1 },
    //  };

    const { tag, handleTagChange } = useFilter();


    console.log("Hi"+tag)
   const gridData = [
     {
       gridName: "Spotify",
       tags: ["Home", "About", "Media"],
       className:
         "GridBasis spotify mdd:flex mdd:justify-center text-start !block pushin row-span-1 mdd:col-span-2 mdd:row-span-2 smm:col-span-1 smm:row-span-3 xs:col-span-3 rounded-xl border-4 bg-lightVertigress dark:bg-transparent dark:border-darkicebBlue hover:shadow-2xl border-slate-400/10 smm:p-4  transition-transform duration-300 transform hover:scale-95 text-black smm:order-last mdd:order-2",
       content: <SpotifySection />,
     },
     {
       gridName: "Youtube",
       tags: ["Home", "About", "Media"],
       className:
         " GridBasis youtube mdd:flex mdd:justify-center text-start !block pushin texture row-span-1 col-span-1 mdd:col-span-1  smm:col-span-2 smm:row-span-4 xs:col-span-3 rounded-xl border-4 border-slate-400/10 bg-lightNaples dark:bg-transparent dark:border-darkVanilla  p-2 smm:p-4  transition-transform duration-300 transform hover:scale-95 text-black smm:order-last mdd:order-4",
       content: <YoutubeSection />,
     },

     {
       gridName: "LinkedInIcon",
       tags: ["Home", "About", "Media"],
       content: <LinkedinSection />,
       className:
         "GridBasis mdd:flex mdd:justify-center text-start !block pushin texture row-span-1 col-span-1 mdd:col-span-1 smm:col-span-2 smm:row-span-2 xs:col-span-3 rounded-xl border-4  border-slate-400/10 bg-lightyinBlue dark:bg-transparent dark:border-darkVista p-2 smm:p-4 transition-transform duration-300 transform hover:scale-95 text-black smm:order-3 sm:order-3 mdd:order-8 ",
     },
     {
       gridName: "Github",
       tags: ["Home", "About", "Media"],
       className:
         " GridBasis mdd:flex mdd:justify-center text-start !block pushin texture row-span-1 col-span-1 mdd:col-span-1 mdd:row-span-1 smm:col-span-1 smm:row-span-1 xs:col-span-3 rounded-xl border-4 border-slate-400/10 bg-lightVertigress dark:border-darkicebBlue dark:bg-transparent py-4 mdd:p-4 transition-transform duration-300 transform hover:scale-95 text-black  smm:order-4 mdd:order-6 ",
       content: <GithubSection />,
     },

     {
       gridName: "Blog",
       tags: ["Home",],
       className:
         " GridBasis text-start !block pushin row-span-1 col-span-2 mdd:col-span-1 mdd:row-span-2 smm:col-span-3 smm:row-span-2 xs:col-span-3 rounded-xl border-4 bg-transparent dark:bg-lightPeriwinkle dark:border-transparent border-lightPeriwinkle transition-transform duration-300 transform hover:scale-95 text-black smm:order-6 mdd:order-10 ",
       content: <Blog />,
     },
     {
       gridName: "Toggle",
       tags: ["Home", "About", "Projects", "Media"],
       className:
         " groupG1 GridBasis pushin texture row-span-1 col-span-1 mdd:col-span-1 smm:col-span-1 smm:row-span-1 xs:col-span-3 rounded-xl border-2 border-slate-400/10 bg-gray-300 dark:border-gray-300 dark:bg-transparent p-4 transition-transform duration-300 transform hover:scale-95 text-black smm:order-2 mdd:order-3 ",
       content: <Toggle />,
     },

     {
       gridName: "Hero",
       tags: ["Home", "About","Projects","Media","Contact"],
       className:
         " GridBasis pushin row-span-3 col-span-4 mdd:col-span-3 mdd:row-span-3 smm:col-span-3 xs:col-span-3 rounded-xl border-8 dark:border-0 border-slate-600/10 dark:border-transparent dark:bg-gradient-to-r from-darkVista to-[#D3DDFB] p-2 transition-transform duration-300 transform hover:scale-95 text-black mdd:order-1",
       content: <Hero />,
     },
     {
       gridName: "Stack",
       tags: ["Home"],
       className:
         "GridBasis pushin texture row-span-3 col-span-1 mdd:col-span-1 mdd:row-span-2 smm:col-span-3 xs:col-span-3 rounded-xl border-2 bg-gray-300 dark:bg-transparent border-slate-400/10 transition-transform duration-300 transform hover:scale-95 text-black smm:hidden mdd:order-7",
       content: <MyStack />,
     },
     {
       gridName: "Details",
       tags: ["Home", "About"],
       className:
         "GridBasis pushin texture row-span-3 col-span-1 mdd:col-span-1 mdd:row-span-2 smm:col-span-3 xs:col-span-3 rounded-xl border-4 border-slate-400/10 bg-lightPeriwinkle dark:bg-transparent dark:border-lightPeriwinkle py-1 pr-2 transition-transform duration-300 transform hover:scale-95 text-black smm:order-5 sm:order-4 mdd:order-5 ",
       content: <Details />,
     },

     {
       gridName: "Contact",
       tags: ["Home", "About","Media","Contact"],
       className:
         " GridBasis pushin texture row-span-1 col-span-2 mdd:col-span-2 mdd:row-span-2 smm:col-span-3 xs:col-span-3 rounded-xl border-4 border-slate-400/10 bg-lightNaples dark:bg-transparent dark:border-darkVanilla p-1 transition-transform duration-300 transform hover:scale-95 text-black dark:text-lightSnow text-3xl smm:order-5 mdd:order-9 xl:text-center",
       content: <Contact />,
     },
    //  {
    //    gridName: "Care Sync",
    //    tags: ["Home", "Projects"],
    //    className:
    //      " bg-lightVertigress projector GridBasis mdd:flex mdd:justify-center text-start !block pushin texture row-span-1 col-span-1 mdd:col-span-1 smm:col-span-3 rounded-xl border-4 border-slate-400/10  p-4 transition-transform duration-300 transform hover:scale-95 text-black group smm:order-last mdd:order-last dark:bg-transparent dark:border-darkicebBlue",
    //    content: (
    //      <ProjectCard
    //        title={"Care Sync"}
    //        description={" Hospital Management"}
    //        previewUrl={"https://www.youtube.com"}
    //        backgroundColor1={"#489f9C"}
    //      />
    //    ),
    //  },

    //  {
    //    gridName: "Scrabble Template",
    //    tags: ["Home", "Projects"],
    //    className:
    //      " dark:border-darkVista GridBasis h-48 mdd:h-24 pushin texture row-span-2 col-span-2 mdd:col-span-3  rounded-xl border-4 dark:bg-transparent border-slate-400/10  p-4 transition-transform duration-300 transform hover:scale-95 text-black group smm:order-last mdd:order-last",
    //    content: (
    //      <ProjectCard2
    //        title={"Scrabble Portfolio Template"}
    //        description={"Template"}
    //        previewUrl={"https://www.youtube.com"}
    //        backgroundColor1="#464D77"
    //      />
    //    ),
    //  },
   
     // Add more grid entries as needed
   ];


    const filteredComponents = gridData.filter((component) =>
      component.tags.includes(tag)
    );

    // Unfiltered components
    const unfilteredComponents = gridData.filter(
      (component) => !component.tags.includes(tag)
    );



  return (
    <Container>
      <Suspense fallback={<p>Loading feed...</p>}>
        {/* <div className="grid auto-rows-[192px] grid-cols-1 smm:grid-cols-2 md:grid-cols-3 gap-2 transition-all duration-300 ease-in-out"> */}

        {/* Display unfiltered components with gray overcast */}

        <div className="grid smm:grid-cols-2 gap-4 mdd:grid-cols-3 grid-cols-6 ">
          {tag === "Home" ? (
            <>
              {filteredComponents.map((Component, index) => (
                <motion.div
                  // initial={{ y: -(index * 150) }}
                  // animate={{ y: 0 }}
                  // exit={{ y: -(index * 150) }}
                  // transition={{ duration: 1, delay: 0 }}
                  key={index}
                  className={` ${Component.className} `}
                >
                  {Component.content}
                </motion.div>
              ))}

              {/* Display unfiltered components with gray overcast */}
              {unfilteredComponents.map((Component, index) => (
                <motion.div
                  // initial={{ y: index * 150 }}
                  // animate={{ y: 0 }}
                  // transition={{ duration: 2, delay: 0 }}
                  // exit={{ y: index * 150 }}
                  key={index}
                  className={`${Component.className} opacity-25`}
                >
                  {Component.content}
                </motion.div>
              ))}
            </>
          ) : (
            <>
              {" "}
              {filteredComponents.map((Component, index) => (
                <motion.div
                  // initial={{ y: -(index * 150) }}
                  // animate={{ y: 0 }}
                  // exit={{ y: -(index * 150) }}
                  // transition={{ duration: 1, delay: 0 }}
                  key={index}
                  className={` ${Component.className} mdd:order-first`}
                >
                  {Component.content}
                </motion.div>
              ))}
              {/* Display unfiltered components with gray overcast */}
              {unfilteredComponents.map((Component, index) => (
                <motion.div
                  // initial={{ y: index * 150 }}
                  // animate={{ y: 0 }}
                  // transition={{ duration: 2, delay: 0 }}
                  // exit={{ y: index * 150 }}
                  key={index}
                  className={`${Component.className} opacity-25 mdd:order-last`}
                >
                  {Component.content}
                </motion.div>
              ))}
            </>
          )}
        </div>
      </Suspense>
    </Container>
    // </div>
  );
};

export default Main;
