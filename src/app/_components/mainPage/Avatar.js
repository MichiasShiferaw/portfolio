
"use client"
import Image from "next/image";
import React, { useRef, useEffect, useState, lazy, Suspense } from "react";
// import Spline from "@splinetool/react-spline";
const Spline = lazy(() => import("@splinetool/react-spline"));


const Avatar = () => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
       <Suspense fallback={<div>Loading...</div>}>
         <Spline scene="https://prod.spline.design/2QTCxOyL0QMSNlk6/scene.splinecode" />
       </Suspense>
    </div>

    // {/* // <>
    // // <Image src={"/Hero.png"} width={"250"} height={"250"}/>
    // // </>

    // // <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
    //   // <img */}
    //   {/* //   src={"/Hero.png"}
    //   //   alt="hero image"
    //   //   className=" transform "
    //   //   width={450}
    //   //   height={300}
    //   // /> */}
    // // </div>
  );
}

export default Avatar;