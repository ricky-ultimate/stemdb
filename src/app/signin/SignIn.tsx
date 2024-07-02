"use client";
import Link from 'next/link';
import Head from 'next/head';
import { Metadata } from 'next';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function SignIn() {

  const [matricno, setMatricno] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      matricno,
      password,
    });

    if (result?.error) {
      console.error('Error during sign-in: ', result.error);
      alert(result.error);
    } else {
      // Fetch the current session data
      const response = await fetch('/api/auth/session');
      const data = await response.json();
      const userRole = data?.user?.role;

      console.log('User Role: ', userRole); //log user role for debugging

      // Route the user based on their role
      if (userRole === 'ADMIN') {
        router.push('/AdminDashboard/main');
      } else if (userRole === 'SUPERADMIN'){
        router.push('/SUDashboard')
      } else {
        router.push('/UserDashboard');
      }
    }
  };

  return (
    <>

      <div className="bg-black/95  h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-4">
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-200">
              Beyond the <span className="text-purple-600">ROOTs</span> is the <span className="text-purple-600">STEM</span>
            </h1>
          </div>
          <div className="flex flex-col mx-10 justify-center items-center w-full md:w-1/2 p-8 bg-black/30 rounded-md">
            <h2 className="text-3xl mb-4 text-gray-200">Welcome Back!</h2>
            <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Matric No..."
                value={matricno}
                onChange={(e) => setMatricno(e.target.value)}
                className="p-3 text-gray-700 rounded-md border-2"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 text-gray-700 rounded-md border-2"
              />
              <a href="#" className="text-purple-600 text-sm">Forgot your password?</a>
              <button type="submit" className="p-3 bg-purple-600 rounded-md text-white text-center">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}