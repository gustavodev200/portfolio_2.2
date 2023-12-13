import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import Reveal from "./Reveal";

const SocialMedia = () => {
  const socialMediaLinks = [
    {
      name: "github",
      link: "https://github.com/gustavodev200",
      icon: <Github />,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/gustavo-lage",
      icon: <Linkedin />,
    },
    {
      name: "email",
      link: "https://portfolio_2.2.vercel.app/",
      icon: <Mail />,
    },
  ];
  return (
    <Reveal>
      <div className="flex flex-row gap-4">
        {socialMediaLinks.map(({ name, link, icon }) => (
          <Link
            key={name}
            href={link}
            target="_blank"
            className="bg-[#9bb3cb] transition-all hover:bg-[#7fc7ff]  p-2 rounded-lg dark:text-[#09090b] dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]"
          >
            {icon}
          </Link>
        ))}
      </div>
    </Reveal>
  );
};

export default SocialMedia;
