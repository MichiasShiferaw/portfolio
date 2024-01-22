"use client"
import './globals.css'
import Navbar from './_components/layoutComp/Navbar';
import Footer from './_components/layoutComp/Footer';
import { AnimatePresence } from 'framer-motion';
import Head from "next/head";
import { Poppins } from 'next/font/google';
import { FilterProvider } from './_components/FilterContext';

const poppins = Poppins({ subsets: ['latin'],display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })



export default function RootLayout({ children }) {

  return (
    <>
      <Head>
        <title>Michias Shiferaw | Blogs Center </title>
        <meta name="description" content="any description" />
      </Head>
      <html lang="en">
        <body

          className={`${poppins.className}  bg-lightSnow dark:bg-darkRaisin  w-full min-h-screen h-full `}
        >
          <FilterProvider>

            <AnimatePresence mode="wait">
              <Navbar />
              <div className=" p-24 lg:p-16 mdd:p-12 mdd:mt-24 ">
                {children}
              </div>
            </AnimatePresence>
          </FilterProvider>

        </body>
      </html>
    </>
  );
}
