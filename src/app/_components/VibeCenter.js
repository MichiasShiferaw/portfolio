import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

const VibeCenter = () => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px]  cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 mx-16 lgg:mx-6`}
    >
      {/* <div className=""> */}
        {/* <Image src={"/music.svg"} width={50} height={50} /> */}
        <h3 className="mx-auto text-center text-3xl font-semibold">
          Vibe Center
        </h3>
        {/* <Image src={"/music.svg"} width={50} height={50} /> */}
      {/* </div> */}
      <p className="mx-auto text-center text-xl font-semibold text-gray-400">
        A 2D lounge of music that I love and want to share with the world
      </p>

      <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-blue-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
        <span className="block text-center font-semibold text-red-50">
          <p className="text-6xl">Coming Soon!!!</p>
        </span>
      </div>
    </motion.div>
  );
}

export default VibeCenter