"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";
import { sendEmail } from "@/actions/sendEmails";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  // const sendEmail = async (formData: FormData) => {
  //   "use server";

  //   console.log(formData.get("senderEmail"));
  //   console.log(formData.get("message"));
  // };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 ">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col "
        action={async (formData) => {
          console.log("Running on client");
          console.log(formData.get("senderEmail"));
          console.log(formData.get("message"));

          // ;

          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all "
          name="senderEmail"
          type="email"
          required
          maxLength={100}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4  transition-all "
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button>Submit</button>
      </form>
    </motion.section>
  );
}
