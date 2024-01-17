"use client"
import React, { useEffect } from "react";
import Image from 'next/image'
import Main from './main/main';
import TransitionEffect from './_components/TransitionEffect';
import Head from "next/head";

export default function Home() {
  // useEffect(() => {
  //   // Scroll to the top when the component mounts
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <>
      {/* <TransitionEffect/> */}
      <Head>
        <title>Michias Shiferaw</title>
        <meta
          name="description"
          content="A brief description of the page content."
        />
      </Head>
      <Main />
    </>
  );
}
