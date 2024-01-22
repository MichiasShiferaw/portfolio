"use client"
// import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './_components/layoutComp/Navbar';
import Footer from './_components/layoutComp/Footer';
import { AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
import Head from "next/head";
import { Poppins } from 'next/font/google';
import { FilterProvider } from './_components/FilterContext';

const poppins = Poppins({ subsets: ['latin'],display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

// export const metadata = {
//   title: 'Michias Shiferaw',
//   description: 'My Portfolio',
// }

export default function RootLayout({ children }) {
    // const router =useRouter();
    // const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Head>
        <title>Michias Shiferaw | Blogs Center </title>
        <meta name="description" content="any description" />
      </Head>
      <html lang="en">
        <body
          // ${inter.className}
          className={`${poppins.className}  bg-lightSnow dark:bg-darkRaisin  w-full min-h-screen h-full `}
        >
          <FilterProvider>
            <Navbar />
            <AnimatePresence mode="wait">
              <div className=" p-24 lg:p-16 mdd:p-12 mdd:mt-24 ">
                {/* <Component key={router.asPath} {...pageProps} /> */}
                {children}
              </div>
            </AnimatePresence>
          </FilterProvider>
          {/* <Footer /> */}
        </body>
      </html>
    </>
  );
}
