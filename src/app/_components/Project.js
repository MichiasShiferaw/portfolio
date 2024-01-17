"use client"
import React from "react";
import Link from "next/link";


// TODO: use Scroll on Framer Motion

export const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {

  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl}) `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
        // Add this property for responsiveness
      }}
      className={` GridBasis h-48 mdd:h-24 pushin texture row-span-1 col-span-1 mdd:col-span-1 rounded-xl border-4 border-slate-400/10  p-4 transition-transform duration-300 transform hover:scale-105 text-black group `}
    >
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#d4d2d2] bg-opacity-25 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 text-center opac">
        <Link
          href={previewUrl}
          className=" border-2 relative rounded-full font-bold"
        >
          <h5 className=" text-[#010202] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
            {title}
          </h5>
        </Link>
      </div>

    </div>
  );
};

export const ProjectCard2 = ({ imgUrl, title,description, previewUrl }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl}) `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
        // Add this property for responsiveness
      }}
      className={` GridBasis h-48 mdd:h-24 pushin texture row-span-1 col-span-3  rounded-xl border-4 border-slate-400/10  p-4 transition-transform duration-300 transform hover:scale-105 text-black group `}
    >
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#d4d2d2] bg-opacity-25 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 text-center opac">
        <Link
          href={previewUrl}
          className=" border-2 relative rounded-full font-bold"
        >
          <h5 className=" text-[#010202] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
            {title}
          </h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </Link>
      </div>
    </div>
  );
};

// export default ProjectCard;