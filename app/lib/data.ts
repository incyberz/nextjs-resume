import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import academicsystemImg from "@/public/academicsystem.png";
import qwarsonlineImg from "@/public/qwarsonline.png";
import admissionsystemImg from "@/public/admissionsystem.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "IT Teacher",
    location: "Cimahi, West Java, ID",
    description:
      "After graduated in 2009 I become IT Teacher for 6 years",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
  {
    title: "IT Support",
    location: "Lembang, Bandung City, ID",
    description:
      "I worked as a IT Support at West Java Social Department",
    icon: React.createElement(CgWorkAlt),
    date: "2015 - 2017",
  },
  {
    title: "IT Lecturer",
    location: "STMIK IKMI Cirebon",
    description:
      "While coding, I teach on campus once a week",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "STMIK IKMI Cirebon",
    description:
      "at 2020 I started take some web project development with PHP Stacks as freelancer",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "React Developer",
    location: "Freelance | Remote",
    description:
      "I'm still a freelancer full-stack developer but I change my stack to MERN. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Academic Systems of STMIK IKMI Cirebon",
    description:
      "I worked as a full-stack developer on this campus for 3 years. The users are all academic stafs, all-students, all-lecturer, also companies that employ campus students",
    tags: ["React", "React Native", "MongoDB", "Bootstrap", "PHP", "MySQL", "RESTfull API"],
    imageUrl: academicsystemImg,
  },
  {
    title: "Gamified Fun Learning Question Wars",
    description:
      "Teaching must be fun, accurate, objective, and computerized offcourse! I create this app to teach more than 500 students online without any problems",
    tags: ["Gamification","PHP", "MySQL", "JQuery", "MySQL", "REST"],
    imageUrl: qwarsonlineImg,
  },
  {
    title: "Infographics Admission System",
    description:
      "The chancellor can see the registration progress with realtime infographic from his cell phone",
    tags: ["ChartJS","PHP", "MySQL", "REST"],
    imageUrl: admissionsystemImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "PHP",
  "MySQL",
  "HTML",
  "CSS",
  "JavaScript",
  "ChartJS",
  "Gamification",
] as const;
