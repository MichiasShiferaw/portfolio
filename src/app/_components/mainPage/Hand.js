"use client";
import React, { lazy, Suspense } from "react";
// import Spline from "@splinetool/react-spline";
const Spline = lazy(() => import("@splinetool/react-spline"));

// import img from "public/me.png";

const Hand = () => {

  return (
    // <div style={{ height: "300px", maxWidth: "287px", maxHeight: "300px" }}>
    <div style={{ maxHeight: "130px" }}>
      {/* <Image width={300} height={300} src={"/me.png"} /> */}
      {/* Hand Waving */}
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          // style={{ maxHeight: "300px" }}
          scene="https://prod.spline.design/OEek7DHBEkSnQmH0/scene.splinecode"
        />
        {/* https://prod.spline.design/nvg0vCC6XeDMH2PZ/scene.splinecode */}
      </Suspense>
    </div>
  );
};

export default Hand;
