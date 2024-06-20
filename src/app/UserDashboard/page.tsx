import React, { Component } from 'react'
import Navbar from '../components/navbar'
import Head from 'next/head';
import Menu from '../components/UserMenu';
import Statistics from '../components/Statistics';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dasboard',
  }
  
export default function UserDashboard() {

    return (
      <div>
   
        
        <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
      
      <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
        <Menu />
        <Statistics />
        
      </div>
    </div>


      </div>
    )
  }

