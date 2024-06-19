import Image from "next/image";
import Navbar from "./components/navbar";
import React from "react";
import Landing from "./landing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Welcome | Stem DB',
}
export default function Home() {
  return (
    <>
      <Landing />
      {/* <SignIn/> */}
      {/* <Navbar /> */}
    </>

  );
}


