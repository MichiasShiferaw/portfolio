
import React from 'react';
import Marquee from 'react-fast-marquee';
import { SpotifyIcon } from './Icons';
import { LinkArrow } from './Miscell/LinkArrow';
import Image from 'next/image';



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
          <div className="mt-3 mb-2 mdd:mb-0 pt-2 col-span-2 dark:text-lightSnow">
            <Marquee className="text-xl" speed={15}>
              &nbsp; Recently Played:&nbsp;<i>Look What You&#39;ve Done</i>
              ,&nbsp;Drake&nbsp;
            </Marquee>
          </div>
        </div>
      </div>
      <div className="mdd:flex hidden Github_container__xhatr">
        <div className="flex items-center space-x-2 md:hidden ">
          <Image
            src={"/takeCare.jpg"}
            alt={`Look What You've Done`}
            width={96}
            height={96}
            borderRadius="sm"
          />
          <div className="min-w-0 flex-auto space-y-0.5">
            <div className="dark:text-darkicebBlue text-white text-base sm:text-xl lg:text-base xl:text-xl font-bold truncate">
              <SpotifyIcon
                className="w-full h-auto block dark:hidden"
                color={"#fff"}
              />
              <SpotifyIcon
                className="w-full h-auto dark:block hidden"
                color={"#9FF5F2"}
              />
            </div>
            <h2 className="dark:text-darkicebBlue text-white text-base sm:text-xl lg:text-base xl:text-xl font-semibold truncate">
              Look What You&#39;ve Done
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg lg:text-base xl:text-lg font-medium">
              Drake
            </p>
          </div>
        </div>

        <div className="w-full h-auto hidden md:flex ">
          <SpotifyIcon
            className="w-full h-auto block dark:hidden"
            color={"#fff"}
          />
          <SpotifyIcon
            className="w-full h-auto dark:block hidden"
            color={"#9FF5F2"}
          />
        </div>
      </div>
      <LinkArrow
        addText={"Kuuba"}
        link={"https://www.youtube.com/@kuubamusic"}
      />
    </>
  );
}

export default SpotifySection