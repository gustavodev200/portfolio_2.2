/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import ParticlesComponent from "../../../components/ParticlesBackgroud";
import Image from "next/image";
import imageHeroSection from "../../../public/images/logo.jpeg";
import { Button } from "../../../components/Button";
import { Typewriter } from "react-simple-typewriter";
import SocialMedia from "../../../components/SocialMedia";
import { RevealList, RevealWrapper } from "next-reveal";
import Reveal from "@/components/Reveal";
import CryptonButton from "../../../components/CryptoButton";

export const HeroSection = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-screen mt-28 md:mt-0 md:p-10 lg:p-10 xl:p-0"
        id="home"
      >
        <div className="flex flex-col items-center justify-center md:items-start ">
          <div>
            <Reveal>
              <h2 className="text-center md:text-start text-4xl md:text-5xl lg:text-5xl  xl:text-7xl font-bold">
                Hi,
                <span className="block mt-4">
                  I'm <span className="text-[#9bb3cb] ">Gustavo L.</span>
                </span>
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="text-2xl text-center md:text-start md:text-[2rem] md:text-[3rem] xl:text-[4rem] font-bold mt-4">
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
            </Reveal>
          </div>
          <div className="mt-12 md:mt-16">
            <Reveal>
              <CryptonButton />
            </Reveal>
          </div>
          <div className="mt-24">
            <SocialMedia />
          </div>
        </div>
        <div className="w-[300px] md:w-[300px] lg:w-[470px] mt-6 mb-6 md:mt-0 md:mb-0">
          <Reveal>
            <Image
              src={imageHeroSection}
              alt="hero"
              width={470}
              height={470}
              className=" rounded-full dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]"
            />
          </Reveal>
        </div>
      </div>
    </>
  );
};
