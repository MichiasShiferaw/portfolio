"use client"
import React, { useEffect,useState } from "react";
import Image from 'next/image'
import Main from './main/main';
import TransitionEffect from './_components/TransitionEffect';
import Head from "next/head";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  console.log(darkMode)
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className={darkMode ? "darkie" : ""}>
      <Head>
        <title>Michias Shiferaw</title>
        <meta
          name="description"
          content="A brief description of the page content."
        />
      </Head>
      {/* <TransitionEffect /> */}
      <Main />
    </div>
  );
}
