"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_v0lzh5m",
        "template_0dtw8u6",
        form.current,
        "ORMfpcyEwiZ1F6dH8"
      )
      .then(
        () => {
          alert("Your Message Sended");
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main className="min-h-[calc(100vh-12rem)] w-11/12">
      <h1 className="text-7xl mb-10 max-md:text-4xl text-center text-orange-700">
        Contact Me
      </h1>
      <div className="flex  max-sm:flex-col">
        <div className="w-7/12 max-sm:w-11/12 ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-center"
          >
            <input
              type="text"
              placeholder="Enter Your Name"
              className="transition duration-500 hover:scale-105 bg-transparent w-6/12 max-sm:w-9/12 h-10 border-2 border-orange-700 pl-3 rounded-md"
              name="name"
              required
              minLength="3"
              maxLength="20"
            />
            <input
              type="text"
              placeholder="Enter Your Surname"
              className="transition duration-500 hover:scale-105 bg-transparent w-6/12 max-sm:w-9/12 h-10 border-2 border-orange-700 pl-3 mt-3 rounded-md"
              name="surname"
              required
              minLength="2"
              maxLength="20"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="transition duration-500 ease-in-out hover:scale-105 bg-transparent w-6/12 max-sm:w-9/12 h-10 border-2 border-orange-700 pl-3 mt-3 rounded-md"
              name="email"
              required
              minLength="8"
              maxLength="20"
            />
            <textarea
              id=""
              cols="30"
              rows="10"
              className="transition duration-500 hover:scale-105 bg-transparent w-6/12 max-sm:w-9/12 border-2 border-orange-700 pl-3 mt-3 rounded-md"
              name="message"
              placeholder="Enter Your Message"
              required
              minLength="10"
              maxLength="20"
            ></textarea>
            <input
              type="submit"
              className="transition duration-500 hover:scale-105 mt-10 bg-orange-700 text-white  rounded-3xl text-xl py-3 px-5 max-sm:py-1 max-sm:px-3 rounded-3xl text-sm"
              value="Send Your Message"
            />
          </form>
        </div>
        <div className="w-4/12 max-sm:w-11/12 max-sm:mt-8 ">
          <div className="flex flex-col items-center">
            <div className="w-full max-sm:w-9/12 h-28  pt-2 border-2 border-orange-700 rounded-md">
              <div className="flex flex-row ml-3 mt-2">
                <AiOutlinePhone className="text-4xl my-auto" />
                <div className="flex flex-col gap-2 pl-4">
                  <h3 className="text-2xl">Phone</h3>
                  <h4 className=" max-lg:text-sm text-lg">+90 554 988 01 03</h4>
                </div>
              </div>
            </div>
            <div className="w-full max-sm:w-9/12 h-28  border-2 border-orange-700 mt-8 rounded-md">
              <div className="flex flex-row ml-3 mt-2">
                <AiOutlineMail className="text-4xl my-auto" />
                <div className="flex flex-col max-sm:gap-2 max-sm:pl-4 max-md:gap-0 max-md:pl-2 gap-2 pl-4">
                  <h3 className="text-2xl">Email</h3>
                  <h4 className=" max-lg:text-sm text-lg">umutsng@gmail.com</h4>
                </div>
              </div>
            </div>
            <div className="w-full max-sm:w-9/12 h-28 pt-2 border-2 border-orange-700 mt-8 rounded-md ">
              <div className="flex flex-row ml-3 mt-2">
                <GiWorld className="text-4xl my-auto" />
                <div className="flex flex-col  gap-2 pl-4">
                  <h3 className="text-2xl">Address</h3>
                  <h4 className=" max-lg:text-sm text-lg">Macedonia/Skopje</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
// <button
//   type="submit"
//   className="mt-10 bg-lime-800  rounded-3xl text-xl py-3 px-5 max-sm:py-1 max-sm:px-3 rounded-3xl text-sm"
// >
//   Send Your Message
// </button>;
