import React from "react";
import Link from "next/link";
const Tiny = () => {
  return (
    <section className="w-full h-8 bg-orange-700 text-white max-md:text-xs max-lg:text-sm whitespace-nowrap">
      <div className="pr-10 w-full h-8 max-sm:pr-1 flex flex-row justify-end items-center ">
        <Link href="#">
          <p>umutsng@gmail.com</p>
        </Link>
        <Link href="#">
          <p className="ml-6">Macedonia/Skopje</p>
        </Link>
        <Link href="#">
          <p className="ml-6 max-sm:hidden">+90 554 988 01 03</p>
        </Link>
      </div>
    </section>
  );
};

export default Tiny;
