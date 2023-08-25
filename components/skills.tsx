"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/app/lib/hooks";
import { skillsData } from "@/app/lib/data";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <motion.section
      ref={ref}
      className="mb-28 sm:mb-40 max-w-[53rem] text-center  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18 }}
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex gap-2 flex-wrap justify-center text-gray-800 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            key={index}
            className="px-5 py-3 rounded-xl bg-white border border-black/10"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
