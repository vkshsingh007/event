import Link from "next/link";
import React from "react";
import Logo from "./logo";

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
  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 md:px-9">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routes.map(({ name, path }) => (
            <li key={name} className="text-white/50 hover:text-white transition">
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
