import Link from 'next/link';
import Head from 'next/head';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Sign In',
}


export default function SignIn() {
    return (
        <>
            
            <div className="bg-gray-200 h-screen flex items-center justify-center">

                <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-4 ">
                    <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
                        <h1 className="text-4xl font-bold mb-4 text-black">
                            Beyond the <span className="text-purple-600">ROOTs</span> is the <span className="text-purple-600">STEM</span>
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
                            
                            <Link href="/AdminDashboard/main"type="submit" className="p-3 bg-purple-600 rounded-md text-white text-center">
                                Log In
                            </Link>
                            

                        </form>
                    </div>
                </div>
            </div>

        



            {/* <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2 p-5 flex items-center justify-center">
          <img src="./static/background.jpg" alt="Login Illustration" />
        </div>
        <div className="md:w-1/2 p-5">
          <h2 className="text-2xl font-semibold mb-5">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </button>
          </form>
          <div className="mt-6 text-center">
            <div className="text-gray-500">Or Continue With</div>
            <div className="flex justify-center mt-4">
              <button className="bg-red-500 text-white py-2 px-4 rounded-md mx-1">Google</button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mx-1">Facebook</button>
              <button className="bg-gray-800 text-white py-2 px-4 rounded-md mx-1">Apple</button>
            </div>
          </div>
          <div className="mt-6 text-center">
            Don't have an account? <a href="#" className="text-indigo-600 hover:text-indigo-500">Sign Up here</a>
          </div>
        </div>
      </div>
    </div> */}






            {/* <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{backgroundImage: "url('./static/bg.png')"}}>
      <div className="bg-blue p-8 rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center text-green-600">SIGN IN</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="matric" className="block text-lg font-medium text-white">Matric No.</label>
            <input type="number" id="matric" placeholder="Matric No..."className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-lg font-medium text-white">Password</label>
            <input type="password" id="password" placeholder="Password..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Sign In</button>
        </form>
      </div>
    </div> */}
        </>
    );
}