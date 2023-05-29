import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { BsFillMoonStarsFill, BsBoxArrowUpRight } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useState } from 'react';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import HireMe from '@/components/HireMe';
import TransitionEffect from '@/components/TransitionEffect';
import profile from '../../public/assets/profile.png'






const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Michias Shiferaw :)</title>
      </Head>


      <TransitionEffect/>
      {/* <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    > */}
      {/* <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 ">














      </main> */}
      <main
        className="flex items-center text-dark w-full min-h-screen dark:text-light
      "
      >
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
               <Image src={profile} alt="Profile Image" className='w-full h-auto lg:hidden md:inline-block md:w-full' priority 
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" /> 
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text="Welcome to My Website! Great to meet you!" className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">A fourth year engineering student, dedicated in turneing ideas into innovative applications.</p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Michias_Shiferaw.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-dark border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <span className="w-6 ml-1">{BsBoxArrowUpRight}</span>
                </Link>
                <Link
                  href={"malito:michiasshif@gmail.com"}
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </main>
    </div>
  );
}
