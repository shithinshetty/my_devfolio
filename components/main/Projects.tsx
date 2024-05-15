import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center "
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row justify-evenly gap-10 px-10">
        <Link href="https://findahome.vercel.app/">
        <ProjectCard
          src="/FindAHome.png"
          title="Modern RealEstate Site"
          description="Find A Home invites you to a world of unparalleled real estate experiences. With a commitment to innovation and integrity, we redefine the journey of finding your dream home. Explore our diverse portfolio, where each property tells a unique story, and let us guide you in making the perfect choice for a lifetime of comfort and luxury."
        /></Link>
        <Link href="https://hewrites.onrender.com/">

        <ProjectCard
          src="/HeWrites.png"
          title="Personal Blog"
          description="Exploring the dynamic realm of technology, my blog delves into the latest innovations, trends, and breakthroughs. Algorithms,Garbage Collect, I unravel the intricacies of programming topics, offering insights and analyses. Join me on a journey through the digital landscape, where every post is a gateway to technological enlightenment. Stay informed"
        />
        </Link>
        <ProjectCard
          src="/Portfolio.png"
          title="Space Themed Portfolio"
          description="Full Stack Web Portfolio"
        />
      </div>
    </div>
  );
};

export default Projects;