"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { NavLinks } from "../constants";
import Link from "next/link";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState(path); // Initialize with current path

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
      setPrevPath(path); // Update prevPath when path changes
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div
      style={{ left: "20%" }}
      className="absolute z-[50] -bottom-20 md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7"
    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="mb-16 pl-4 min-w-[20%]">
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.link ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
