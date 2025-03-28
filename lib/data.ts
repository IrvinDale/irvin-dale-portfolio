import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdWeb } from "react-icons/md";

import meritMarketplaceImg from "@/public/MeritMarketplace.png";
import meritMarketplaceMobileImg from "@/public/MeritMarketplaceMobile.jpg";
import mdcWebImg from "@/public/MDCWeb.png";
import mdcMobileImg from "@/public/MDCMobile.png";
import aiChatBotImg from "@/public/ai-chatbot.png";
import memoryGameImg from "@/public/memory-game.png";

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
    title: "Web Developer",
    location: "Merit Immigration - Vaughan, ON",
    description:
      "I worked as a Web Developer for 8 months focusing on WordPress Development and React Native Webview Wrapping development.",
    icon: React.createElement(MdWeb),
    date: "2023",
  },
  {
    title: "Software Developer",
    location: "Telemed MD - Mississauga, ON",
    description:
      "I worked as a Software Developer for 10 months on a contract focusing on React.js Front-End Development and React with Node.js on backend development.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Software Developer",
    location: "MD Connected - Scarborough, On",
    description:
      "I worked as a Software Developer for 11 months focusing on React.js Front-End Development and React Native on backend development.",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Graduated Software Engineering",
    location: "Centennial College - Scarborough, ON",
    description:
      "I graduated after 3 years of studying Software Engineering Technology with advanced diploma from Centennial College.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Memory Game",
    link: "memory-card-game-mu-self.vercel.app",
    description:
      "A fun and engaging web application built with React and Vite. This game challenges players to flip cards and find matching pairs with adorable anime images.",
    tags: ["React", "Vite", "JavaScript", "HTML", "SCSS"],
    imageUrl: memoryGameImg,
  },
  {
    title: "AI Chatbot",
    description:
      "A React-based AI chatbot application that uses the Hugging Face API with the DialoGPT model to provide conversational capabilities. The app also supports speech recognition and text-to-speech functionality.",
    link: "ai-chatbot-coral-tau.vercel.app",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    imageUrl: aiChatBotImg,
  },
  {
    title: "Merit Immigration Marketplace",
    link: "",
    description:
      "Users can purchase and send messages to service providers, register and list services as services provider.",
    tags: ["WordPress", "HTML", "CSS"],
    imageUrl: meritMarketplaceImg,
  },
  {
    title: "Merit Immigration Marketplace Webview Mobile App",
    link: "",
    description:
      " Users can download the mobile app of the Merit Immigration Marketplace access all site functionalites and more.",
    tags: ["React Native", "JavaScript", "CSS"],
    imageUrl: meritMarketplaceMobileImg,
  },
  {
    title: "MD Connected Web Chatting Tool",
    link: "",
    description:
      "A chatting tool that allows users to register/login, send direct messages, create public and private channels.",
    tags: ["React", "HTML", "CSS", "JavaScript", "Node.js", "TypeScript"],
    imageUrl: mdcWebImg,
  },
  {
    title: "MD Connected Mobile Chatting App",
    link: "",
    description: "A React Native version of the MD Connected Web Chating Tool.",
    tags: ["React Native", "CSS", "JavaScript", "Node.js", "TypeScript"],
    imageUrl: mdcMobileImg,
  },
] as const;

export const skillsData = [
  "React",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "BootStrap",
  "Tailwind",
  "React Native",
  "Expo",
  "Node.js",
  "REST API",
  "SQL",
  "Java",
  "C#",
  "Git",
  "AWS",
  "Heroku",
  "WordPress",
  "Agile",
  "Scrum",
  "Unit Testing",
] as const;
