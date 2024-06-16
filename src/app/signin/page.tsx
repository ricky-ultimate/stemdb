import Link from 'next/link';
import Head from 'next/head';

export default function SignIn() {
    return (
        <>



    <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{backgroundImage: "url('./static/bg.png')"}}>
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
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-indigo-700">Sign In</button>
        </form>
      </div>
    </div>
    </>
    );
}