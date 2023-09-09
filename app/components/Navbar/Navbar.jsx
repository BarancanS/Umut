"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const pathname = usePathname();
  return (
    <section className="w-full h-20 bg-white text-orange-700 flex flex-row ">
      <div className="w-9/12 mx-auto flex flex-row items-center justify-between ">
        <Link
          href="/"
          className={`text-4xl max-sm:text-2xl font-semibold transition-all duration-700 ease-out ${
            pathname === "/"
              ? "text-transparent bg-gradient-to-r bg-clip-text from-stone-400 to-stone-500 hover:scale-110"
              : "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700 hover:text-stone-400"
          }`}
        >
          Umut Can
        </Link>
        {
          <div
            className={`flex items-center justify-between p-4  w-full h-[14vh] text-white md:hidden whitespace-nowrap fixed inset-0 bg-black  z-30 top-[68px] left-0  ${
              hamburgerMenu ? "translate-y-[-60%]" : "translate-y-[-170%]"
            } transition-transform duration-500 ease-in-out`}
          >
            <div className="text-xl">
              <Link
                href="/"
                className={`text-4xl max-md:text-2xl font-semibold ${
                  pathname === "/"
                    ? "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700"
                    : "text-transparent bg-gradient-to-r bg-clip-text from-white to-stone-300"
                }`}
                onClick={() => setHamburgerMenu(!hamburgerMenu)}
              >
                Umut Can
              </Link>
            </div>
            <div className="flex flex-row max-sm:flex-row gap-3 items-center justify-center max-sm:text-sm text-xl">
              <div className="flex max-sm:flex-col gap-3">
                <Link
                  href="/about"
                  className={`text-3xl max-md:text-2xl max-sm:text-base font-semibold ${
                    pathname === "/about"
                      ? "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700"
                      : "text-transparent bg-gradient-to-r bg-clip-text from-white to-stone-300"
                  }`}
                  onClick={() => setHamburgerMenu(!hamburgerMenu)}
                >
                  About
                </Link>
                <Link
                  href="/works"
                  className={`text-3xl max-md:text-2xl max-sm:text-base font-semibold ${
                    pathname === "/works"
                      ? "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700"
                      : "text-transparent bg-gradient-to-r bg-clip-text from-white to-stone-300"
                  }`}
                  onClick={() => setHamburgerMenu(!hamburgerMenu)}
                >
                  Works
                </Link>
              </div>
              <div className="flex max-sm:flex-col gap-3">
                <Link
                  href="/projects"
                  className={`text-3xl max-md:text-2xl max-sm:text-base font-semibold ${
                    pathname === "/projects"
                      ? "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700"
                      : "text-transparent bg-gradient-to-r bg-clip-text from-white to-stone-300"
                  }`}
                  onClick={() => setHamburgerMenu(!hamburgerMenu)}
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className={`text-3xl max-md:text-2xl max-sm:text-base font-semibold ${
                    pathname === "/contact"
                      ? "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700"
                      : "text-transparent bg-gradient-to-r bg-clip-text from-white to-stone-300"
                  }`}
                  onClick={() => setHamburgerMenu(!hamburgerMenu)}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="">
              <CgClose
                onClick={() => setHamburgerMenu(!hamburgerMenu)}
                className="text-2xl"
              />
            </div>
          </div>
        }
        <GiHamburgerMenu
          className="hidden max-md:block text-2xl"
          onClick={() => setHamburgerMenu(!hamburgerMenu)}
        />
        <ul className="flex  flex-row max-md:hidden">
          <Link
            href="/about"
            className={`text-2xl font-bold ml-5 transition-all duration-700 ease-out ${
              pathname === "/about"
                ? "text-transparent bg-gradient-to-r bg-clip-text from-stone-400 to-stone-500 hover:scale-110"
                : "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700 hover:text-stone-400"
            }`}
          >
            About
          </Link>
          <Link
            href="/works"
            className={`text-2xl font-bold ml-5 transition-all duration-700 ease-out ${
              pathname === "/works"
                ? "text-transparent bg-gradient-to-r bg-clip-text from-stone-400 to-stone-500 hover:scale-110"
                : "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700 hover:text-stone-400"
            }`}
          >
            Works
          </Link>
          <Link
            href="/projects"
            className={`text-2xl font-bold ml-5 transition-all duration-700 ease-out ${
              pathname === "/projects"
                ? "text-transparent bg-gradient-to-r bg-clip-text from-stone-400 to-stone-500 hover:scale-110"
                : "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700 hover:text-stone-400"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`text-2xl font-bold ml-5 transition-all duration-700 ease-out ${
              pathname === "/contact"
                ? "text-transparent bg-gradient-to-r bg-clip-text from-stone-400 to-stone-500 hover:scale-110"
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
