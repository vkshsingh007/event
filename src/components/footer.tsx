import Link from "next/link";
import React from "react";

const routes = [
  {
    path: "/terms-consitions",
    name: "Terms Conditions",
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
  },
];
export const Footer = () => {
  return (
    <footer
      className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25
  "
    >
      <small className="text-xs cursor-pointer hover:text-white transition">
        &copy; 2050 Vikash.All rights reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8 ">
        {routes.map((route) => {
          return (
            <li key={route.path} className=" hover:text-white transition">
              <Link href={route.path}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
