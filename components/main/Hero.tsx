import React from "react";
import HeroContent from "../sub/HeroContent";
import StarBackground from "../sub/StarBackground";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";

import Contact from "./Contact";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-400px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
      <StarBackground/>
      <Navbar/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      

    </div>
  );
};

export default Hero;