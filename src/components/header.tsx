"use client";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

const Header = () => {
  const activePathname = usePathname();
  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 md:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map(({ name, path }) => (
            <li
              key={name}
              className={clsx(
                ` hover:text-white flex items-center relative transition`,
                {
                  "text-white": activePathname === path,
                  "text-white/50": activePathname !== path,
                }
              )}
            >
              <Link href={path}>{name}</Link>
              {activePathname === path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
