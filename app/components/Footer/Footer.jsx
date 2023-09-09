"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();
  return (
    <section className="w-full h-20 bg-white whitespace-nowrap ">
      <div className="w-9/12 h-full mx-auto flex flex-row justify-between items-center max-md:w-full max-md:items-center max-md:px-3">
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
        <div className="max-sm:hidden text-xl max-md:text-sm max-lg:text-base  font-bold">
          <Link
            href="/about"
            className={`ml-5 transition-all duration-700 ease-out ${
              pathname === "/about"
                ? "text-transparent bg-gradient-to-r bg-clip-text from-stone-400 to-stone-500 hover:scale-110"
                : "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700 hover:text-stone-400"
            }`}
          >
            About
          </Link>
          <Link
            href="/works"
            className={`ml-5 transition-all duration-700 ease-out ${
              pathname === "/works"
                ? "text-transparent bg-gradient-to-r bg-clip-text from-stone-400 to-stone-500 hover:scale-110"
                : "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700 hover:text-stone-400"
            }`}
          >
            Works
          </Link>
          <Link
            href="/projects"
            className={`ml-5 transition-all duration-700 ease-out ${
              pathname === "/projects"
                ? "text-transparent bg-gradient-to-r bg-clip-text from-stone-400 to-stone-500 hover:scale-110"
                : "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700 hover:text-stone-400"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`ml-5 transition-all duration-700 ease-out ${
              pathname === "/contact"
                ? "text-transparent bg-gradient-to-r bg-clip-text from-stone-400 to-stone-500 hover:scale-110"
                : "text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700 hover:text-stone-400"
            }`}
          >
            Contact
          </Link>
        </div>
        <div className="flex max-sm:gap-1 gap-3 flex-row">
          <Link target="_blank" href="https://www.instagram.com/umutsnc/">
            <Image
              src="/instagram.png"
              alt=""
              width={20}
              height={20}
              className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-6 max-sm:h-6 w-8 h-8"
            />
          </Link>
          <Link target="_blank" href="https://www.facebook.com">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-6 max-sm:h-6 w-8 h-8"
            />
          </Link>
          <Link target="_blank" href="https://www.twitter.com">
            <Image
              src="/twitter.png"
              alt=""
              width={20}
              height={20}
              className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-6 max-sm:h-6 w-8 h-8"
            />
          </Link>
          <Link target="_blank" href="https://www.youtube.com">
            <Image
              src="/youtube.png"
              alt=""
              width={20}
              height={20}
              className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-6 max-sm:h-6 w-8 h-8"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/umut-can-sunnetcioglu/"
          >
            <Image
              src="/linkedin.png"
              alt=""
              width={20}
              height={20}
              className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-6 max-sm:h-6 w-8 h-8"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;

// text-transparent bg-gradient-to-r bg-clip-text from-zinc-100 to-zinc-700
