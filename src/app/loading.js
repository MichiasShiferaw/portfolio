"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  const orbitVariants = {
    orbit: {
      rotate: 360,
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        staggerChildren: 1.5, // Adjust the stagger duration between children
      },
    },
  };

  const boxVariants = {
    start: {
      x: 0,
    },
    animate: {
      x: [0, 100, 0],
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <>
      {/* <motion.div
        style={{
          width: "600px",
          height: "600px",
          backgroundColor: "transparent",
          borderRadius: "50%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        variants={orbitVariants}
        animate="orbit"
      >
        <motion.div
          className="box !w-48 !h-32"
          style={{
            backgroundColor: "blue",
            borderRadius: "50%",
          }}
          variants={boxVariants}
          initial="start"
          animate="animate"
        >
          Hi My name is
        </motion.div>

        <motion.div
          className="box"
          style={{
            backgroundColor: "green",
            borderRadius: "50%",
          }}
          variants={boxVariants}
          initial="start"
          animate="animate"
        >
          LOL
        </motion.div>

        <motion.div
          className="box"
          style={{
            backgroundColor: "green",
            borderRadius: "50%",
          }}
          variants={boxVariants}
          initial="start"
          animate="animate"
        >
          LOL
        </motion.div>

        <motion.div
          className="box"
          style={{
            backgroundColor: "yellow",
            borderRadius: "50%",
          }}
          variants={boxVariants}
          initial="start"
          animate="animate"
        >
          456
        </motion.div>

        <motion.div
          className="box"
          style={{
            backgroundColor: "red",
            borderRadius: "50%",
          }}
          variants={boxVariants}
          initial="start"
          animate="animate"
        >
          123
        </motion.div>
      </motion.div> */}
      LOading
      https://www.youtube.com/watch?v=wAwJj-KGb38&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=17 
    </>
  );
};

export default Loading;
