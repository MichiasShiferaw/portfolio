import React, { useState } from 'react'
import Logo from './Logo';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon, YoutubeIcon } from './Icons';


const CustomLink =({href,title, className=""})=>{


  const router  = useRouter()


  
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full translate-[width] ease duration-200
        
      dark:bg-light`}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "",toggle }) => {
  const router = useRouter();


  const handleClick=()=>{
    toggle();
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
        group-hover:w-full translate-[width] ease duration-200
        
      dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

// ${router.pathname === href ? 'w-full':'w-0'}
const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen,setIsOpen] = useState(false);

  const handleClick=()=>{
    setIsOpen(!isOpen)
  }


  return (
    <header className="w-full flex items-center justify-between px-32 py-8 font-medium z-10 dark:text-light lg:px-16 relative z-1 md:px-12 sm:px-8 ">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center">
          <CustomLink
            href="/"
            title="Home"
            className="mr-5 rounded relative group lg:text-light  text-secondaryGreen dark:text-light"
          />
          <CustomLink
            href="/about"
            title="About"
            className="mx-5 rounded relative group lg:text-light text-secondaryGreen dark:text-light"
          />
          <CustomLink
            href="/projects"
            title="Projects"
            className="ml-5 rounded relative group lg:text-light  text-secondaryGreen dark:text-light"
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap lg:mt-2 ">
          <motion.a
            href="https://www.linkedin.com/in/michiasshiferaw/"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon className="w-full h-auto" />
          </motion.a>
          <motion.a
            href="https://github.com/MichiasShiferaw"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon className="w-full h-auto text-orange-500 dark:text-light" />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@kuubamusic"
            target={"_blank"}
            className="w-6 ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <YoutubeIcon className="w-full h-auto" />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <span className="fill-dark">
                <SunIcon />
              </span>
            ) : (
              <span className="fill-dark">
                <MoonIcon />
              </span>
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          className="min-w-[70vw] sm:min-w-[90vw] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-32 bg-dark/90 dark:bg-light/75 rounded-lg z-50 backdrop-blur-md "
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex items-center flex-col justify-center flex-wrap mt-2">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="https://twitter.com"
              target={"_blank"}
              className="w-6 mr-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillTwitterCircle className="w-full h-auto" />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillGithub className="w-full h-auto" />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillLinkedin className="w-full h-auto" />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              className="w-6 ml-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillYoutube className="w-full h-auto" />
            </motion.a>
          </nav>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <span className="fill-dark">Sun</span>
            ) : (
              <span className="fill-dark">Moon</span>
            )}
          </button>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default Navbar