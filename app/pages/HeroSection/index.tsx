/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ParticlesComponent from "../../../components/ParticlesBackgroud";
import Image from "next/image";
import imageHeroSection from "../../../public/images/logo.jpeg";
import { Button } from "../../../components/Button";
import { Github, Linkedin, Mail } from "lucide-react";
import TypeWriterComponent from "@/components/TypewriterComponent";

export const HeroSection = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-screen">
      {/* <ParticlesComponent id="tsparticles" /> */}
      <div className="flex flex-col items-start ">
        <div>
          <h2 className="text-7xl font-bold">
            Hi,{" "}
            <span className="block">
              I'm <span className="text-[#b9e1ff] ">Gustavo L.</span>
            </span>
          </h2>
          {/* <TypeWriterComponent
            typeWriters={["React Developer", "Frontend Developer", "Anime Fan"]}
          /> */}
        </div>
        <div>
          <Button />
        </div>
        <div className="flex flex-row gap-4 mt-24">
          <Github />
          <Linkedin />
          <Mail />
        </div>
      </div>
      <div>
        <Image
          src={imageHeroSection}
          alt="hero"
          width={500}
          height={500}
          className="rounded-full dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]"
        />
      </div>
    </div>
  );
};

{
}
