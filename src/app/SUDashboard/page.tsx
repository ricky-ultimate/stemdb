import { Metadata } from 'next';
import MenuSU from '../components/SUMenu';
import SUStatistics from '../components/SUStatistics';


export const metadata: Metadata = {
    title: 'Dashboard SuperUser',
  }
  
export default function Users() {
    return (
        <>
            
            <div>
                
        <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
 
      <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
        <MenuSU/>
        <SUStatistics/>
        
      </div>
    </div>


      </div>

        



        </>
    );
}