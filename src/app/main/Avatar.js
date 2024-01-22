
"use client"
import Image from "next/image";
import React, { useRef, useEffect, useState, lazy, Suspense } from "react";


const Avatar = () => {



  return (
    <div style={{ height: "auto" }}>
      <Image
        src={"/fillRule.png"}
        className="block dark:hidden"
        alt="Hero"
        // layout="responsive"
        width={"550"}
        height={"550"}
      />
      <Image
        src={"/HeroDark.png"}
        className="hidden dark:block"
        // layout="responsive"
        alt="Hero"
        width={"550"}
        height={"550"}
      />
    </div>
  );
}

export default Avatar;