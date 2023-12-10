"use client";

import React from "react";
import Link from "next/link";
import NavBarLogo from "./components/NavBarLogo";
import NavBarTheme from "./components/NavBarTheme";
import { Menu, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import useScrollToAnchor from "@/hooks/useScrollToAnchor";

const linksForNavBar = [
  {
    name: "Home",
    path: "#home",
    icon: "",
  },
  {
    name: "Sobre",
    path: "#about",
    icon: "",
  },

  {
    name: "Tecnologias",
    path: "#technologies",
    icon: "",
  },
  {
    name: "Projetos",
    path: "#projects",
    icon: "",
  },
  {
    name: "Contatos",
    path: "#contact",
    icon: "",
  },
];

export const NavBar = () => {
  const [state, setState] = React.useState(false);

  const scrollToAnchor = useScrollToAnchor();
  return (
    <nav className=" w-full  md:border-0 fixed top-0 left-0 dark:bg-[#09090b] bg-white z-30 shadow-sm">
      <div className="items-center px-2 lg:px-0 max-w-screen-xl mx-auto md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="#home">
            <NavBarLogo />
          </Link>
          <div className="md:hidden">
            <button
              className=" outline-none p-2 rounded-md  focus:border"
              onClick={() => setState(!state)}
            >
              {state ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="flex flex-col gap-4  md:flex-row ">
                  {linksForNavBar.map((link) => (
                    // <Link legacyBehavior passHref key={link.name} href={""}>
                    <NavigationMenuLink
                      key={link.name}
                      style={{
                        cursor: "pointer",
                      }}
                      className={navigationMenuTriggerStyle()}
                      onClick={() => {
                        scrollToAnchor(link.path);
                      }}
                    >
                      {link.name}
                    </NavigationMenuLink>
                    // </Link>
                  ))}
                  <NavBarTheme />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ul>
        </div>
      </div>
    </nav>
  );
};
