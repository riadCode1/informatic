'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, signUp } from '@/lib/actions/user.action';

const AuthForm = ({ type }: { type: string }) => {

  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    username:'',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (type === 'sign-up') {
        const newUser = await signUp(formData);
        setUser(newUser);
        if (newUser) router.push('/');
      }

      if (type === 'sign-in') {
        const response = await signIn({
          email: formData.email,
          password: formData.password,
        });

        if (response) router.push('/');
      }
     
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const toggleType = () => {
    if (type === 'sign-in') {
      router.push('/signUp');
    } else if (type === 'sign-up') {
      router.push('/signIn');
    }
  }


  
  return (
    <section className="auth-form">
        


       
      {/* Title */}
      {type === 'sign-in' ? (
        <h1 className="mb-6 text-2xl font-bold">LOGIN</h1>
      ) : (
        <h1 className="mb-6 text-2xl font-bold">CREATE ACCOUNT</h1>
      )}
        
        {/* Input */}

<form onSubmit={onSubmit} className="flex flex-col gap-4 mt-6">


 {type === 'sign-up' && (
            <>
              <input             className="input  items-center px-4 py-2   overflow-hidden bg-black"
 name="username" placeholder="username" onChange={handleChange}  />
            </>
          )}
        
         <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="input  items-center px-4 py-2   overflow-hidden bg-black"
            required
          />
          

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="input  items-center px-4 py-2   overflow-hidden bg-black"
            required
          />

          <button
            type="submit"
            disabled={isLoading}
            className="bg-black text-white py-2 rounded"
          >
            {isLoading ? (
              <>
               
                Loading...
              </>
            ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
          </button>
        
        
        </form>

          {/* Forgot password */}
          {type === 'sign-in' && (  
        <button className="mt-6 flex w-full items-center justify-end gap-2">
          <span className="text-sm font-bold uppercase text-[#DBFF80]">
            FORGOT PASSWORD?
          </span>
          <img className="h-3 w-3" src="/arrow-right.svg" alt="" />
        </button>)}

         <div className="my-8 h-px w-full bg-gray-600" />

        {/* Sign up */}
        {type === 'sign-in'? (
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          <span className="text-gray-400">
            New to TechEssentials? Sign up |
          </span>

          <button onClick={toggleType} className=" cursor-pointer flex items-center gap-2">
            <span className="text-sm font-bold uppercase text-[#DBFF80]">
              SIGN UP
            </span>
            <img className="h-3 w-3" src="/arrow-right.svg" alt="" />
          </button>
        </div>) : 
        
        (
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          <span className="text-gray-400">
           Allready have an account? Sign in |
          </span>

          <button onClick={toggleType} className=" cursor-pointer flex items-center gap-2">
            <span className="text-sm font-bold uppercase text-[#DBFF80]">
              SIGN IN
            </span>
            <img className="h-3 w-3" src="/arrow-right.svg" alt="" />
          </button>
        </div>
        )}
       
      
    
      </section>
  )
}

export default AuthForm