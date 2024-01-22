import React from "react";
// import styles from "./work.module.css";
import Link from "next/link";
import {motion} from "framer-motion";

export const LinkArrow = ({link, addText}) => {
  return (

    <Link href={link} target={"_blank"} className="group  mdd:block hidden">
      <motion.div
                  whileHover={{ rotate: 45, scale: 1.4 }} className="arrow  transition-all duration-300 transform group-hover:opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0.5em"
          height="0.5em"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18"></path>
          <path d="M8 6h10v10"></path>
        </svg>
      </motion.div>

      {/* <span className="transition-all duration-300 transform group-hover:opacity-100">
        {addText}
      </span> */}
    </Link>

  );
};


export const LinkArrow2 = ({ link, addText }) => {
  return (
    <Link
      className="arrow2 gap-2 mb-4"
      href={link}
      target={"_blank"}
    >
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0.5em"
          height="0.5em"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18"></path>
          <path d="M8 6h10v10"></path>
        </svg>
      </div>
    </Link>
  );
};
