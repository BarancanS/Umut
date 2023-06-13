"use client";
import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPage = usePathname();
  const [hamburgerMenu, setHamburgerMenu] = React.useState(false);
  const style1 =
    currentPage === "/about"
      ? "hover:text-white text-orange-700 transition duration-500 ease-in-out"
      : "hover:text-indigo-300 transition duration-500 ease-in-out";
  const style2 =
    currentPage === "/projects"
      ? "hover:text-white text-orange-700 transition duration-500 ease-in-out"
      : "hover:text-indigo-300 transition duration-500 ease-in-out";
  const style3 =
    currentPage === "/contact"
      ? "hover:text-white text-orange-700 transition duration-500 ease-in-out"
      : "hover:text-indigo-300 transition duration-500 ease-in-out";
  return (
    <section className="w-full h-20 bg-white text-orange-700 flex flex-row ">
      <div className="w-9/12 mx-auto flex flex-row items-center justify-between ">
        <Link href="/">
          <h1 className="text-4xl max-sm:text-2xl font-semibold text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700">
            Umut Can
          </h1>
        </Link>
        {hamburgerMenu && (
          <div className="flex items-center justify-between p-4  absolute top-0 left-0 w-full min-h-[calc(17vh+0vh)]  bg-black text-white z-10 md:hidden whitespace-nowrap">
            <div className="max-sm:text-sm text-xl">
              <Link href="/" onClick={() => setHamburgerMenu(!hamburgerMenu)}>
                Umut
              </Link>
            </div>
            <div className="flex flex-row gap-3 items-center justify-center max-sm:text-sm text-xl">
              <div>
                <Link
                  href="/about"
                  className={style1}
                  onClick={() => setHamburgerMenu(!hamburgerMenu)}
                >
                  About
                </Link>
              </div>
              <Link
                href="/works"
                className={style2}
                onClick={() => setHamburgerMenu(!hamburgerMenu)}
              >
                Works
              </Link>
              <Link
                href="/contact"
                className={style3}
                onClick={() => setHamburgerMenu(!hamburgerMenu)}
              >
                Contact
              </Link>
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
          <Link href="about">
            <li className="text-2xl font-semibold">About</li>
          </Link>
          <Link href="works">
            <li className="text-2xl font-semibold ml-5">Works</li>
          </Link>
          <Link href="contact">
            <li className="text-2xl font-semibold ml-5">Contact</li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
