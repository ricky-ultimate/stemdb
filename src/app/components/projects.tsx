"use client";



const Projects = () => {

    return (
        <div className="bg-white/10 col-span-9 rounded-lg p-6">


            {/* Profile */}
            <div id="Rank">
                <div>
                    <h1 className="font-bold py-4 uppercase">Projects</h1>
                    <div id="stats" className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 overflow-y-auto">
                        <div className="flex bg-black shadow-lg rounded-lg overflow-hidden relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="w-24 h-24 bi bi-boxes" viewBox="0 0 16 16">
                                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                            </svg>
                            <div className="flex flex-col justify-center ml-4 flex-grow">
                                <h2 className="text-xl font-bold text-white">Hostel Allocation</h2>
                                <p className="text-gray-500 font-medium">Software Engineeri</p>
                                <p className="text-gray-500 text-sm">Space Dad</p>
                            </div>
                            <div className="m-3">
                                <div className="flex items-center space-x-16 absolute inset-x-1/2 transform -translate-x-1/2">
                                    <div className="text-start">
                                        <p className="text-blue-300 text-md font-medium uppercase leading-4">Date Given</p>
                                        <p className="text-white font-bold text-2xl flex items-center space-x-2">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="lightgreen" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                                </svg>
                                            </span>
                                            <span>3/06/24</span>
                                            
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-blue-300 text-sm font-medium uppercase leading-4">Due Date</p>
                                        <p className="text-white font-bold text-2xl flex items-center space-x-2">
                                            <span className="items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="lightgreen" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                                </svg>
                                            </span>
                                            <span>28/06/24</span>
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute text-9xl right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold">
                                1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Projects;
