import AnimatedText from '@/components/AnimatedText'
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Layout from '@/components/Layout'
import Skills from '@/components/Skills';
import TransitionEffect from '@/components/TransitionEffect';
import { spring, useInView, useMotionValue, useSpring } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profileImg from "../../public/assets/profile_2.jpg"

// import profile iamge 



const AnimatedNumber = ({value}) =>{

    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{duration:3000});
    const isInView = useInView(ref, {once:true});


    useEffect(()=>{
        if(isInView){
            motionValue.set(value);

        }
    },[isInView, value, motionValue])


    useEffect(()=>{
        springValue.on("change", (latest)=>{
            if (ref.current && latest.toFixed(0)<=value){
                ref.current.textContent = latest.toFixed(0);
            }
            
        })
    },[springValue,value])

    return( 
        <span ref={ref}>

        </span>
    )
}

const about = () => {
  return (
    <>
      <Head>
        <title>Michias | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="PassionFruit"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                {" "}
                Hi, I'm Michias, a web developer and UI/UX designer with a Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p className="my-4 font-medium">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>

              <p className="font-medium">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light  md:order-1 md:col-span-8" />
              <Image
                src={profileImg}
                alt="ME"
                className="w-full h-auto rounded-2xl md:rotate-80"
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row  xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={50} /> +
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satified Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={50} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={4} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default about