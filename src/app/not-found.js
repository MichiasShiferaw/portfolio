import React from 'react'
import { Metadata } from "next";
// import { Redirect } from 'next';
// import { Redirect } from 'next';
import { redirect } from "next/navigation";

export const metadata = {
  title: "404: No one's home",
  description:
    "Not here, not here",
};


function Notfound() {
  redirect("/");
}

export default Notfound;