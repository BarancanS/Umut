"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const pathname = usePathname();
  console.log(pathname);

  return (
    <section className="w-full h-20 bg-white text-orange-700 flex flex-row ">
      <div className="w-9/12 mx-auto flex flex-row items-center justify-between ">
        <Link
          href="/"
          className={`text-4xl font-semibold ml-5 transition-all duration-700 ease-out ${
            pathname === "/"
              ? "text-transparent bg-gradient-to-r bg-clip-text from-[#475892] to-red-900 hover:text-stone-600"
              : "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700 hover:text-stone-400"
          }`}
        >
          Umut Can
        </Link>
        {hamburgerMenu && (
          <div className="flex items-center justify-between p-4  fixed top-0 left-0 w-full h-[18vh]  bg-black text-white z-10 md:hidden whitespace-nowrap">
            <div className="max-sm:text-sm text-xl">
              <Link href="/" onClick={() => setHamburgerMenu(!hamburgerMenu)}>
                <h1 className="text-4xl max-md:text-2xl max-sm:text-base font-semibold text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700">
                  Umut Can
                </h1>
              </Link>
            </div>
            <div className="flex flex-row max-sm:flex-row gap-3 items-center justify-center max-sm:text-sm text-xl">
              <div className="flex max-sm:flex-col gap-3">
                <Link
                  href="/about"
                  className=""
                  onClick={() => setHamburgerMenu(!hamburgerMenu)}
                >
                  About
                </Link>
                <Link
                  href="/works"
                  className=""
                  onClick={() => setHamburgerMenu(!hamburgerMenu)}
                >
                  Works
                </Link>
              </div>
              <div className="flex max-sm:flex-col gap-3">
                <Link
                  href="/projects"
                  className=""
                  onClick={() => setHamburgerMenu(!hamburgerMenu)}
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className=""
                  onClick={() => setHamburgerMenu(!hamburgerMenu)}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="">
              <CgClose
                onClick={() => setHamburgerMenu(!hamburgerMenu)}
                className="text-2xl max-sm:text-sm"
              />
            </div>
          </div>
        )}
        <GiHamburgerMenu
          className="hidden max-md:block text-2xl"
          onClick={() => setHamburgerMenu(!hamburgerMenu)}
        />
        <ul className="flex  flex-row max-md:hidden">
          <Link
            href="/about"
            className={`text-2xl font-semibold ml-5 transition-all duration-700 ease-out ${
              pathname === "/about"
                ? "text-transparent bg-gradient-to-r bg-clip-text from-[#475892] to-red-900 hover:text-stone-600"
                : "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700 hover:text-stone-400"
            }`}
          >
            About
          </Link>
          <Link
            href="/works"
            className={`text-2xl font-semibold ml-5 transition-all duration-700 ease-out ${
              pathname === "/works"
                ? "text-transparent bg-gradient-to-r bg-clip-text from-[#475892] to-red-900 hover:text-stone-600"
                : "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700 hover:text-stone-400"
            }`}
          >
            Works
          </Link>
          <Link
            href="/projects"
            className={`text-2xl font-semibold ml-5 transition-all duration-700 ease-out ${
              pathname === "/projects"
                ? "text-transparent bg-gradient-to-r bg-clip-text from-[#475892] to-red-900 hover:text-stone-600"
                : "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700 hover:text-stone-400"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`text-2xl font-semibold ml-5 transition-all duration-700 ease-out ${
              pathname === "/contact"
                ? "text-transparent bg-gradient-to-r bg-clip-text from-[#475892] to-red-900 hover:text-stone-600"
                : "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700 hover:text-stone-400"
            }`}
          >
            Contact
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
