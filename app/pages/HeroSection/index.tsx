/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import ParticlesComponent from "../../../components/ParticlesBackgroud";
import Image from "next/image";
import imageHeroSection from "../../../public/images/logo.jpeg";
import { Button } from "../../../components/Button";
import { Typewriter } from "react-simple-typewriter";
import SocialMedia from "../../../components/SocialMedia";
import { RevealWrapper } from "next-reveal";

export const HeroSection = () => {
  return (
    <>
      {/* <ParticlesComponent id="tsparticles" /> */}

      <div className="flex flex-col md:flex-row justify-between items-center w-full h-screen">
        <div className="flex flex-col items-start ">
          <div>
            <h2 className="text-7xl font-bold">
              Hi,
              <span className="block mt-4">
                I'm <span className="text-[#9bb3cb] ">Gustavo L.</span>
              </span>
            </h2>
            <h2 className="text-[4rem] font-bold mt-4">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Developer",
                  "Anime Fan",
                  "Football Fan",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </h2>
          </div>

          <div>
            <Button />
          </div>

          <SocialMedia />
        </div>
        <div>
          <Image
            src={imageHeroSection}
            alt="hero"
            width={470}
            height={470}
            className=" rounded-full dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]"
          />
        </div>
      </div>
    </>
  );
};
