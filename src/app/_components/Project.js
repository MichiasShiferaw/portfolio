"use client"
import React from "react";
import Link from "next/link";
import { LinkedInIcon } from "./Icons";
import Image from "next/image";




// TODO: use Scroll on Framer Motion

export const ProjectCard = ({ title, description, gitUrl, previewUrl,backgroundColor1 }) => {

  const customDarkMode=`bg-[${backgroundColor1}]`;

  return (
<>
      <div className="flex items-center justify-between">
        <div className="flex items-end p-1 rounded-full border-2 border-transparent ">
          <Image
            src="/Icon.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "3.5rem", height: "auto" }}
            alt="Error"
          />
        </div>
        <p className="text-sm font-medium">P</p>
      </div>
      <div className="mt-6 xl:mt-0 text-center xl:text-lg 2xl:text-2xl dark:text-lightSnow">{title}</div>
    
    </>
  );
};

export const ProjectCard2 = ({ title,description, previewUrl,backgroundColor1 }) => {
  return (
<>
      <button
        className="!absolute top-4 right-4 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-sm font-medium uppercase text-blue-500 transition-all hover:bg-blue-500/10 active:bg-blue-500/30"
        type="button"
        data-ripple-dark="true"
      >
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
          P
        </span>
      </button>

      <h5 className=" text-[#010202] transform  cursor-pointer group-hover/link:text-white">
        {title}
      </h5>
      {/* <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#d4d2d2] bg-opacity-25 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 text-center opac">
        <Link
          href={previewUrl}
          className=" border-2 relative rounded-full font-bold"
        >
          <h5 className=" text-[#010202] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
            {title}
          </h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </Link>
      </div> */}
    </>
  );
};

export const ProjectCard3 = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl}) `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
        // Add this property for responsiveness
      }}
      className={` GridBasis h-48 mdd:h-24 pushin texture row-span-1 col-span-3  rounded-xl border-4 border-slate-400/10  p-4 transition-transform duration-300 transform hover:scale-95 text-black group smm:order-last mdd:order-last`}
    >
      {/* <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#d4d2d2] bg-opacity-25 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 text-center opac">
        <Link
          href={previewUrl}
          className=" border-2 relative rounded-full font-bold"
        >
          <h5 className=" text-[#010202] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
            {title}
          </h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </Link>
      </div> */}
    </div>
  );
};

// export default ProjectCard;