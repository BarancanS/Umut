"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mmghwek",
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
          className="transition duration-500 hover:scale-105 mt-10 bg-orange-700 text-white  rounded-3xl text-xl py-3 px-5 max-sm:py-1 max-sm:px-3"
          value="Send Your Message"
        />
      </form>
    </div>
  );
};

export default Form;
