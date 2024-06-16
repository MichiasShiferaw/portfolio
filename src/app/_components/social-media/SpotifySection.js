
import React from 'react';
import Marquee from 'react-fast-marquee';
import { SpotifyIcon } from '../Icons';
import { LinkArrow } from '../miscell/LinkArrow';
import Image from 'next/image';



const SpotifySection = () => {

  return (
    <>
      <div className="container mx-auto mdd:hidden block">
        <div className="grid grid-cols-2">
          <div className="col-span-2 flex items-center justify-start p-4">
            <div className="flex items-end">
              <SpotifyIcon
                className="hover:motion-safe:animate-ping !w-32 !h-32 xl:!w-24 xl:!h-24 mdd:hidden block dark:hidden"
                color={"#fff"}
              />
              <SpotifyIcon
                className="hover:motion-safe:animate-ping !w-32 !h-32 mdd:hidden dark:block hidden"
                color={"#9FF5F2"}
              />
            </div>
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
            borderradius="sm"
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