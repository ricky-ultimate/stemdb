import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {

  
  return (
    <>
    
    <div className="bg-gray-800 text-white">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src="static/logo.jpg" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-lg font-bold">Your Logo</h1>
        </div>
        <div>
         
            <Link href="/signout" className="text-sm border-rounded font-medium hover:underline">Sign Out</Link>
          
        </div>
      </nav>
    </div>

    </>

  );
}


