"use client"
import Link from "next/link";
import React, { useRef, useEffect, useState, lazy, Suspense } from "react";
// import Spline from "@splinetool/react-spline";
const Spline = lazy(() => import("@splinetool/react-spline"));

const Blog = () => {
  return (
    // <div ref={splineContainerRef} style={{ width: "100%", height: "auto" }}>
    <div className="text-9xl mdd:text-6xl">
      {/* {isMobile ? ( */}
      <Link href={"https://acrudi.vercel.app/"}>
        <span className="blog">Blog</span>
        {/* ) : (
        <div

          style={{ maxHeight: "287px", width: "auto" }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Spline scene="https://prod.spline.design/PTWmHgIWgLTu0BYe/scene.splinecode" />
          </Suspense>
        </div>
      )} */}
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
  );
};

export default Blog;
