"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/app/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 sm:mb-40 max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Master Information System</span> in 2017,
        I decided to pursue my passion for programming. I start take a{" "}
        <span className="font-medium">full-stack web development</span> project
        in STMIK IKMI Cirebon. I wanna my codes to become one of{" "}
        <span className="italic">problem solving handler</span> in my campus. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack was PHP but recently i think
        that could not solve the problem anymore. I need asynchronous
        programming! So I decided to change my core stack to{" "}
        <span className="font-medium">MERN Stack</span>. And with TypeScript
        make my codes be better. I am always looking to learn new technologies.
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy farming
        with family, feed the fish and chicken. I'm also like camping and
        hiking. It's make me ready 100% to coding again!
      </p>
    </motion.section>
  );
}
