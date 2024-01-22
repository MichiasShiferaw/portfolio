

import React from "react";
import Image from 'next/image'
import Main from './main/main';
import TransitionEffect from './_components/TransitionEffect';
import Head from "next/head";
import { Metadata } from "next";


export const metadata = {
  title: "Michias Shiferaw | Portfolio",
  description: "Michias'compilation of academic, and work experience",
};


export default function Home() {


  return (
    <>
      <Head>
        <title>Michias Shiferaw</title>
        <meta
          name="description"
          content="A brief description of the page content."
        />
      </Head>
      
      {/* <TransitionEffect /> */}
      <Main />
    </>
  );
}
