"use client"
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center rounded-full w-28 h-24 text-white dark:border-2 dark:border-solid dark:border-light text-2xl font-bold bg-gray-500 "
        whileHover={{
          scale: 1.25,
          background:
            "linear-gradient(120deg,#ff2506 0%,#ff705f 60%,#ff705f 60%,#ffcb66 60%,#ffae11)",
        }}
      >
        Michias
      </MotionLink>
    </div>
  );
};

export default Logo;
