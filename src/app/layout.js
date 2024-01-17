"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './_components/layoutComp/Navbar';
import Footer from './_components/layoutComp/Footer';
import { AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

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
          className={`${inter.className}  bg-light dark:bg-dark w-full min-h-screen h-full `}
        >
          <Navbar />
          <AnimatePresence mode="wait">
            <div className=" p-24 lg:p-16 mdd:p-12 mdd:mt-24">
              {/* <Component key={router.asPath} {...pageProps} /> */}
              {children}
            </div>
          </AnimatePresence>
          {/* <Footer /> */}
        </body>
      </html>
    </>
  );
}
