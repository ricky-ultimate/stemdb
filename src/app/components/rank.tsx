"use client";



const Ranks = () => {

    return (
        <div className="bg-white/10 col-span-9 rounded-lg p-6">


            {/* Profile */}
            <div id="Rank">
            <div>
    <h1 className="font-bold py-4 uppercase">Top 5</h1>
    <div id="stats" className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        <div className="flex bg-black shadow-lg rounded-lg overflow-hidden relative">
            <img src="/static/user1.jpg" className="object-cover w-32 h-32 rounded-l-lg" alt="Profile Picture" />
            <div className="flex flex-col justify-center ml-4 flex-grow">
                <h2 className="text-xl font-bold text-white">Space Dad</h2>
                <p className="text-gray-500 font-medium">Cyber Security</p>
                <p className="text-gray-500 text-sm">200 Level</p>
            </div>
            <div className="flex items-center space-x-10 absolute inset-x-1/2 transform -translate-x-1/2">
                <div className="text-center">
                    <p className="text-blue-300 text-sm font-medium uppercase leading-4">Total Point</p>
                    <p className="text-white font-bold text-2xl flex items-center space-x-2">
                        <span>+54</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="lightgreen" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                            </svg>
                        </span>
                    </p>
                </div>
                <div className="text-center">
                    <p className="text-blue-300 text-sm font-medium uppercase leading-4">Total Point</p>
                    <p className="text-white font-bold text-2xl flex items-center space-x-2">
                        <span>+54</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="lightgreen" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                            </svg>
                        </span>
                    </p>
                </div>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold">
                1
            </div>
        </div>
    </div>
</div>




        </div>



        </div>
    )
};
export default Ranks;

