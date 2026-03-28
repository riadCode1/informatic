import React from "react";
<<<<<<< HEAD

import CustomPass from "@/components/CustomPass";
import LoginBtn from "@/components/LoginBtn";
import AuthForm from "@/components/AuthForm";

const SignUp = () => {
=======
import CustomEmail from "@/components/CustomEmail";
import CustomPass from "@/components/CustomPass";
import LoginBtn from "@/components/LoginBtn";

const Nav = () => {
>>>>>>> dd10eae9ad18829bcc2ffecbe9e0c18de634238e
  return (
    <section className="relative flex min-h-screen flex-col items-center px-4 py-6">

      {/* Logo */}
      <img
        className="mb-10 h-16 w-full object-contain bg-[#252525] py-2"
        src="/techEss.png"
        alt="TechEssentials"
      />

      {/* Top decorative borders */}
      <div className="absolute top-2 left-0 w-full border-t-4 border-[#383838]" />
      <div className="absolute top-2 left-0 h-32 border-l-4 border-[#383838]" />
      <div className="absolute top-2 right-0 h-32 border-r-4 border-[#383838]" />

      {/* Login Card */}
      <div className="relative w-full mt-30 max-w-md md:max-w-xl bg-[#232323] px-6 py-10 text-center sm:px-10">

        {/* Corners */}
        <span className="absolute -top-2 -left-2 h-20 w-20 border-t-4 border-l-4 border-[#383838] md:h-40 md:w-40" />
        <span className="absolute -top-2 -right-2 h-20 w-20 border-t-4 border-r-4 border-[#383838] md:h-40 md:w-40" />
        <span className="absolute -bottom-2 -left-2 h-20 w-20 border-b-4 border-l-4 border-[#383838] md:h-40 md:w-40" />
        <span className="absolute -bottom-2 -right-2 h-20 w-20 border-b-4 border-r-4 border-[#383838] md:h-40 md:w-40" />

<<<<<<< HEAD
        

        {/* Inputs */}
        <AuthForm type="sign-up" />
        

      

       
       
=======
        {/* Title */}
        <h1 className="mb-6 text-2xl font-bold">LOGIN</h1>

        {/* Inputs */}
        <CustomEmail />
        <CustomPass />
        <LoginBtn />

        {/* Forgot password */}
        <button className="mt-6 flex w-full items-center justify-end gap-2">
          <span className="text-sm font-bold uppercase text-[#DBFF80]">
            FORGOT PASSWORD?
          </span>
          <img className="h-3 w-3" src="/arrow-right.svg" alt="" />
        </button>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gray-600" />

        {/* Sign up */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          <span className="text-gray-400">
            New to TechEssentials? Sign up |
          </span>

          <button className="flex items-center gap-2">
            <span className="text-sm font-bold uppercase text-[#DBFF80]">
              SIGN UP
            </span>
            <img className="h-3 w-3" src="/arrow-right.svg" alt="" />
          </button>
        </div>
>>>>>>> dd10eae9ad18829bcc2ffecbe9e0c18de634238e
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default SignUp;
=======
export default Nav;
>>>>>>> dd10eae9ad18829bcc2ffecbe9e0c18de634238e
