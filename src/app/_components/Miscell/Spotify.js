// pages/index.js
"use client"
import { useEffect, useState } from "react";
// import { getRecentTracks } from "../utils/spotify";

const Home = () => {
  // const [recentTracks, setRecentTracks] = useState([]);

  // useEffect(() => {
  //   const accessToken = "YOUR_ACCESS_TOKEN";

  //   // Fetch recent tracks
  //   getRecentTracks(accessToken)
  //     .then((tracks) => setRecentTracks(tracks))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <div>
      <h1>Recently Played</h1>
      <div className="h-[25px] mr-[4px] relative flex items-center">
        <div className="music-moving"></div>
        <div className="music-moving"></div>
        <div className="music-moving"></div>
        <div className="music-moving"></div>
      </div>
    </div>
  );
};

export default Home;
