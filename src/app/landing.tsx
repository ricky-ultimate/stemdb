import { Metadata } from 'next'
import React from "react";
import Link from "next/link";
import Head from 'next/head';
import Image from 'next/image';

export default function Landing() {
  return (
    <div>



    <div className="bg-white flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <Link href="/signin">
        <img src="./static/logo.jpg" alt="Logo" className="h-30 w-30 mb-4" />
        </Link>
        
        
      </div>
     
    </div>

    </div>


  );
}

