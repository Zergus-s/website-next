"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Say Hello";

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form?.current?.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  const adjustTextareaHeight = () => {
    const textarea = document.getElementById("textarea");
    if (!textarea) return;

    textarea.style.height = textarea.scrollHeight + "px";
  };

  return (
    <motion.div
      className="h-full page-wrapper items-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* TEXT CONTAINER */}
      <div className="p-10 md:pb-20  flex items-center justify-center text-3xl md:text-5xl lg:text-6xl">
        <div>
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ))}
          &nbsp;😊
        </div>
      </div>
      {/* FORM CONTAINER */}
      <form
        onSubmit={sendEmail}
        ref={form}
        className="h-fit min-h-[600px] lg:h-full w-full bg-red-50 rounded-xl text-xl flex flex-col justify-center p-8 md:p-24 max-w-3xl"
      >
        <span className="mb-4">Dear Anton Gaidashevskyi,</span>
        <textarea
          id="textarea"
          onInput={adjustTextareaHeight}
          rows={6}
          className="bg-transparent border-b-2 border-b-black outline-none resize-none mb-8 min-h-[50px]"
          name="message"
        />
        <span className="mb-4">My mail address is:</span>
        <input
          name="from_name"
          type="email"
          className="bg-transparent border-b-2 border-b-black outline-none mb-8"
        />
        <span className="mb-8">Regards</span>
        <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
          Send
        </button>
        {success && (
          <span className="text-green-600 font-semibold">
            Your message has been sent successfully!
          </span>
        )}
        {error && (
          <span className="text-red-600 font-semibold">
            Something went wrong!
          </span>
        )}
      </form>
    </motion.div>
  );
};

export default ContactPage;
