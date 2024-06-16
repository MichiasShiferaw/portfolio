"use client";
import React, {Suspense} from "react";
import Container from "../_components/layoutComp/Container";
import { motion} from "framer-motion";
import { useFilter } from "../_components/function/FilterContext";
import { gridData } from "./bentoGrid";
import ProjectGallery from "../_components/project/ProjectGallery";
import { projectsData } from "../_components/data/general";
import { fadeIn } from "../mymotion";

import { ParallaxContent } from "./ParallaxContent";
import AnimatedText from "../_components/styling/AnimatedText";
import VibeCenter from "../_components/VibeCenter";


const Main = () => {



    const { tag, handleTagChange } = useFilter();

    const filteredComponents = gridData.filter((component) =>
      component.tags.includes(tag)
    );

    // Unfiltered components
    const unfilteredComponents = gridData.filter(
      (component) => !component.tags.includes(tag)
    );



  return (
    <div>
      {/* MAIN */}
      <ParallaxContent
        imgUrl="/stjohn.jpg"
        heading={
          <AnimatedText
            className="text-center  sm:text-4xl md:text-6xl text-7xl font-bold mt-24 mdd:mt-12 sm:mt-4"
            text="Welcome to My Portfolio!"
          />
        }
        size={"h-[150vh]"}
      ></ParallaxContent>
      <div className="absolute xs:bottom-10 bottom-2 w-11/12 flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-700 flex justify-center items-start">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-600"
            />
          </div>
        </a>
      </div>
      <Container>
        <Suspense fallback={<p>Loading ...</p>}>
          <h1
            id="about"
            className="text-gray-500 text-7xl mb-12  mt-48 font-semibold dark:text-lightTeal"
          >
            About Me
          </h1>
          <motion.div
            variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
            className="grid smm:grid-cols-2 gap-4 mdd:grid-cols-3 lgg:grid-cols-4 grid-cols-6 mdd:mt-6 mdd:mb-8 mb-36"
          >
            {tag === "Home" ? (
              <>
                {filteredComponents.map((Component, index) => (
                  <motion.div
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
                    className={` ${Component.className} lg:order-first`}
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
                    className={`${Component.className} opacity-25 lg:order-last`}
                  >
                    {Component.content}
                  </motion.div>
                ))}
              </>
            )}
          </motion.div>

          {/* PROJECTs */}
          <ParallaxContent
            subheading={
              <h1 className="text-gray-500 dark:text-darkicebBlue text-4xl mb-2">
                <span className="text-black dark:text-darkVanilla">
                  The Latest.
                </span>{" "}
                Take a look at what is new right now
              </h1>
            }
            size={"h-[40vh]"}
            heading={
              <h1
                id="project"
                className="text-gray-500 text-7xl font-semibold dark:text-lightTeal"
              >
                Projects
              </h1>
            }
          >
            <ProjectGallery projects={projectsData} />

            <VibeCenter/>
          </ParallaxContent>

          {/* <div>
            <h1>The Latest. Take a look at what's new right now</h1>
            Make Social Links 3D Project Gallery AI Projects Vibe Room (with
            Three.js)
            https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/components/Skills.js
            Projects
          </div>

          <div className="bg-purple-600 py-12">
            CLICKED FOR MORE VIBE CENTRAL Play a playlist of music in a website
          </div> */}

          {/* <div>
            AI
          </div>
          <div>RUBIK CUBE</div> */}
        </Suspense>
      </Container>
    </div>
    // </div>
  );
};

export default Main;
