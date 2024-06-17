import Link from 'next/link';
import Head from 'next/head';

export default function User() {
    return (
        <>
            
            <div className="bg-gray-200 h-screen flex items-center justify-center">

                <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-4 ">
                    <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
                        <h1 className="text-4xl font-bold mb-4 text-black">
                            I Just Wanna FvCK <span className="text-purple-600">SUMNN</span> riggggght now <span className="text-purple-600"> Demo User Page</span>
                        </h1>
                    </div>
                    <div className="flex flex-col mx-10 justify-center items-center w-full md:w-1/2 p-8 bg-white rounded-md">
                        <h2 className="text-3xl mb-4 text-black">Welcome Back!</h2>
                        <form className="w-full flex flex-col gap-4">
                            <input
                                type="number"
                                placeholder="Matric No..."
                                className="p-3 text-gray-700 rounded-md border-2"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="p-3 text-gray-700 rounded-md border-2"
                            />
                            <a href="#" className="text-purple-600 text-sm">Forgot your password?</a>
                            
                            <Link href="/dashboard"type="submit" className="p-3 bg-purple-600 rounded-md text-white text-center">
                                Log In
                            </Link>
                            

                        </form>
                    </div>
                </div>
            </div>

        



        </>
    );
}