"use client";

import { Download } from "lucide-react";
import React from "react";
import Reveal from "../Reveal";

export const Button = () => {
  return (
    <Reveal>
      <button className="flex items-center justify-between font-bold dark:text-[#09090b] bg-[#9bb3cb] border-none py-5 px-8  rounded-md w-[13rem] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)] dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)]">
        Download CV
        <span>
          <Download />
        </span>
      </button>
    </Reveal>
  );
};
