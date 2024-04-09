import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/firstapp.png";
import rmtdevImg from "@/public/nbaapp.png";
import wordanalyticsImg from "@/public/style.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Antwerp",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Antwerp, Belgium",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Site",
    description:
      "I worked as a full-stack developer student on this startup project 1 year ago. Users can access my information.",
    tags: ["HTML", "CSS", "JAVA"],
    imageUrl: corpcommentImg,
  },
  {
    title: "NBA App",
    description:
      "I created a comprehensive NBA website containing information about the NBA. You can access the matches, teams and all players' information in the application.",
    tags: ["React", "JAVA", "CSS", "Tailwind","HTML","SQL"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "I made a style page about places to visit and see in Turkey. My page provides an opportunity for travel lovers to get to know Turkey better.",
    tags: ["JAVA", "CSS", "SQL", "Tailwind", "HTML"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Java",
  "Spring",
  "Linux",
  "Cypress",
  "SqlLite",
] as const;