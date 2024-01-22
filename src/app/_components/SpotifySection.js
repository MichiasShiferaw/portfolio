import React from 'react';
import Marquee from 'react-fast-marquee';
import { SpotifyIcon } from './Icons1';
import { LinkArrow } from './Miscell/LinkArrow';


const SpotifySection = () => {
  return (
<>
      <div className="container mx-auto mdd:hidden block">
        <div className="grid grid-cols-2">
          <div className="col-span-2 flex items-center justify-start p-4">
            <div className="flex items-end">
              <SpotifyIcon
                className="!w-24 !h-24 mdd:hidden block dark:hidden"
                color={"#fff"}
              />
              <SpotifyIcon
                className="!w-24 !h-24 mdd:hidden dark:block hidden"
                color={"#9FF5F2"}
              />
            </div>
          </div>
          <div className="col-span-2 h-[48px] relative flex items-center justify-center ">
            <div className="music-moving bg-lightSnow dark:bg-darkicebBlue"></div>
            <div className="music-moving bg-lightSnow dark:bg-darkicebBlue"></div>
            <div className="music-moving bg-lightSnow dark:bg-darkicebBlue"></div>
            <div className="music-moving bg-lightSnow dark:bg-darkicebBlue"></div>
          </div>
          {/* Third Column (Bottom) */}
          <div className="mt-3 mb-2 mdd:mb-0 pt-2 col-span-2 dark:text-lightSnow">
            <Marquee className="text-xl" speed={15}>
              Recently Played:&nbsp;Song,&nbsp;Artist&nbsp;
            </Marquee>
          </div>
        </div>
      </div>
      <div className="mdd:flex hidden Github_container__xhatr">
        {/* <SpotifyIcon className="!w-1/6 h-auto mdd:flex hidden" /> */}
        <SpotifyIcon
          className="w-full h-auto block dark:hidden"
          color={"#fff"}
        />
        <SpotifyIcon
          className="w-full h-auto dark:block hidden"
          color={"#9FF5F2"}
        />
        {/* */}
      </div>
      <LinkArrow
        addText={"Kuuba"}
        link={"https://www.youtube.com/@kuubamusic"}
      />
</>
  );
}

export default SpotifySection