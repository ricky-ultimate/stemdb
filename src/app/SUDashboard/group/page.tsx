import Link from 'next/link';
import Head from 'next/head';
import { Metadata } from 'next';
import Grouping from '../../components/grouping';
import Menu from '@/app/components/UserMenu';
import MenuSU from '@/app/components/SUMenu';


export const metadata: Metadata = {
    title: 'Group SuperUser',
  }
  
export default function Groups() {
    return (
        <>
            
            <div>
        {/* <Navbar/> */}
        
        <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
  
      <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
        <MenuSU/>
        <Grouping/>
        
      </div>
    </div>


      </div>

        



        </>
    );
}