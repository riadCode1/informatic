import React from "react";

import CustomPass from "@/components/CustomPass";
import LoginBtn from "@/components/LoginBtn";
import AuthForm from "@/components/AuthForm";
import Nav from "@/components/Nav";

const SignIn = () => {
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

        {/* Title */}

        {/* Inputs */}
        <AuthForm type="sign-in" />
        

      

       
       
      </div>
    </section>
  );
};

export default SignIn;
