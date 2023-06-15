import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-full h-20 bg-white text-orange-700 whitespace-nowrap ">
      <div className="w-9/12 h-full mx-auto flex flex-row justify-between items-center max-md:w-full max-md:items-center max-md:px-3">
        <h3 className="text-xl max-md:text-sm max-lg:text-base font-semibold text-transparent bg-gradient-to-r bg-clip-text from-orange-400 to-red-700">
          Umut Can
        </h3>
        <div className="max-sm:flex max-sm:flex-col text-xl max-md:text-sm max-lg:text-base max-md:font-medium font-semibold">
          <Link href="/about" className="ml-4 max-md:ml-1">
            About
          </Link>
          <Link href="/works" className="ml-4 max-md:ml-1 ">
            Works
          </Link>
          <Link href="/contact" className="ml-4 max-md:ml-1">
            Contact
          </Link>
          <Link href="/projects" className="ml-4 max-md:ml-1">
            Projects
          </Link>
        </div>
        <div className="flex max-sm:gap-1 gap-3 flex-row">
          <Link target="_blank" href="https://www.instagram.com/umutsnc/">
            <Image
              src="/instagram.png"
              alt=""
              width={20}
              height={20}
              className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-4 max-sm:h-4 w-8 h-8"
            />
          </Link>
          <Link target="_blank" href="https://www.facebook.com">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-4 max-sm:h-4 w-8 h-8"
            />
          </Link>
          <Link target="_blank" href="https://www.twitter.com">
            <Image
              src="/twitter.png"
              alt=""
              width={20}
              height={20}
              className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-4 max-sm:h-4 w-8 h-8"
            />
          </Link>
          <Link target="_blank" href="https://www.youtube.com">
            <Image
              src="/youtube.png"
              alt=""
              width={20}
              height={20}
              className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-4 max-sm:h-4 w-8 h-8"
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
              className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-4 max-sm:h-4 w-8 h-8"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;

// text-transparent bg-gradient-to-r bg-clip-text from-zinc-100 to-zinc-700
