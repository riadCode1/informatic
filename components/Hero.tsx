import React from "react";
import { Spotlight } from "./ui/SpotLight";
import { BackgroundRippleEffect } from "./ui/GridBg";
import { TextGenerateEffect } from "./ui/TextGen";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <div className=" pb-20 pt-36">
      <Spotlight
        className=" top-40 left-10 md:left-32 md:top-20 h-screen"
        fill="white"
      />

      <Spotlight
        className=" top-10 left-full  h-[80vh]
           w-[50vw] "
        fill="purple"
      />

      <Spotlight className=" top-28 left-80 h-[80vh] w- " fill="blue" />
      <BackgroundRippleEffect />

      <div className=" items-center justify-center flex-col relative flex my-20 z-10">
        <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
          <h2 className=" max-w-80 text-blue-100 uppercase tracking-widest text-sm text-center font-[400] ">
            Dynamic web Magic
          </h2>
        </div>
        <TextGenerateEffect
          className=" font-bold text-[40px] md:text-5xl lg:text-6xl  text-center"
          words="Hi, I’m Riad Building Smooth & Powerful Web & App Experiences"
        />

        <p className=" md:tracking-widest mb-4 md:text-lg lg:text-2xl text-center  text-gray-300">
         Crafting Modern Apps with Clean Code
        </p>
        <a href="#about">
          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow />}
            position={"right"}
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
