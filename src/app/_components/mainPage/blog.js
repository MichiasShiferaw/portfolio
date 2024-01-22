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

    <div className=" text-lightPeriwinkle dark:text-darkRaisin">
      <div className="flex items-center justify-start px-4 text-8xl mdd:text-4xl">
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
        {/* <p className="text-sm font-medium">M</p> */}
      </div>
      <div className="mt-6 text-black px-1">
        {" "}
        <Link
          href="#"
          target="_blank"
          className="flex justify-start ml-8 font-medium "
        >
          {/* <a
            target="_blank"
            className="relative"
            href="https://devdreaming.com/blogs/react-form-validation-custom-hook"
          > */}
          <h2 className="capitalize text-xl font-semibold hover:underline  mdd:text-lg xs:text-base">
            Latest: Ken Kutaragi &ndash; Sony&apos;s Disruptive Leader
          </h2>
          {/* </a> */}
          {/* <h5 className="underline text-xl flex items-center gap-2 break-normal  ">
            Latest: Ken Kutaragi
          </h5> */}
        </Link>
      </div>
    </div>

  );
};

export default Blog;
