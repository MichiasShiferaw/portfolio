"use client"
import Link from "next/link";
import React, { useRef, useEffect, useState, lazy, Suspense } from "react";
// import Spline from "@splinetool/react-spline";
const Spline = lazy(() => import("@splinetool/react-spline"));
import {motion} from "framer-motion"

const Blog = () => {
  return (
    // <div ref={splineContainerRef} style={{ width: "100%", height: "auto" }}>
    // <div className="text-9xl mdd:text-6xl text-lightPeriwinkle">

    <div className=" text-lightPeriwinkle dark:text-darkRaisin my-auto w-full text-center">
      <div className="flex items-center justify-end px-4 text-8xl mdd:text-4xl font-semibold">
        <div className="flex items-end">
          <span>Blog</span>
          <motion.div whileHover={{ rotate: 45, scale: 1.4 }}>
            <Link
              className="arrow2 gap-2 mb-4 "
              href={"https://acrudi.vercel.app/"}
              target={"_blank"}
            >
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.5em"
                  height="0.5em"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#BEB8EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18"></path>
                  <path d="M8 6h10v10"></path>
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="mt-2 text-black px-1 mx-4">
        <div className="flex justify-between gap-x-6 py-2">
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-24 w-24 flex-none rounded-lg bg-gray-500"
              src="/alarm_blog.jpg"
              alt=""
            />
            <div className="min-w-0 flex-auto text-start font-semibold">
              <h2 className="text-purple-600 text-3xl">Latest:</h2>
              <h2 className="capitalize font-semibold hover:underline text-xl text-start">
                STM32CubeIDE &ndash; Alarm System
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
