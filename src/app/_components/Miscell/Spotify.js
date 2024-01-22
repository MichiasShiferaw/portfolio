// pages/index.js
"use client"
import { useEffect, useState } from "react";
// import { getRecentTracks } from "../utils/spotify";

const Spotify = () => {


  return (
    <div>
      <h1>Recently Played</h1>
      <div className="h-[25px] mr-[4px] relative flex items-center">
        <div className="music-moving dark:bg-light2"></div>
        <div className="music-moving"></div>
        <div className="music-moving"></div>
        <div className="music-moving"></div>
      </div>
    </div>
  );
};

export default Spotify;
