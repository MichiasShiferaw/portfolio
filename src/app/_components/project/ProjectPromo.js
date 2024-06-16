import React from "react";


import '../../globals.css';
// import '../../'
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectPromo = () => {
  return (
    <div className=" w-full h-full rounded-lg bg-no-repeat bg-center bg-contain bg-[url('/projectPromo.png')]">
      {/* Project Gallery */}
      <motion.div className="absolute bottom-1 right-1">
        <Link
          className="arrow2 gap-2 mb-4 "
          href={"#project"}
        >
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#BEB8EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18"></path>
              <path d="M8 6h10v10"></path>
            </svg>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectPromo