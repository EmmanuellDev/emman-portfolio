"use client";

import { Description } from "@radix-ui/react-dialog";
import {FaHtml5, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs, SiSolidity} from "react-icons/si";

const about = {
  title: 'About me',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, numquam corrupti.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Emmanuel Ramamoorthy",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9994873204",
    },
    {
      fieldName: "Skype",
      fieldValue: "emmanuelsk04",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "emmanuelsk04@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Tamil, Telugu, Hindi",
    },
  ]
};

const experience = {
  icon: '/assests/resume/badge.svg',
  title: "My experience",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, numquam corrupti.",
  items: [
    {
      company: "Great Learning Academy",
      position: "Blockchain Basic - Intern",
      duration: "2024",
    },
    {
    company: "UiPath Academic Alliance",
    position: "UiPath Automation Explorer",
    duration: "Summer - 2024",
    },
    {
      company: "TechnoHacks",
      position: "Front-End Developer Intern",
      duration: "2023 - 2024",
    },
    {
      company: "Naan Mudhalvan",
      position: "Digital Productivity & AI Fluency Programmer",
      duration: "Winter - 2023",
    },
  ],
};

const education = {
  icon: '/assests/resume/cap.svg',
  title: "My education",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, numquam corrupti.",
  items: [
    {
    institution: "Jaya Engineering College",
    degree: "B.E",
    duration: "2022 - present",
    },
    {
      institution: "Periyar Matric Hr Sec School",
      degree: "HSC",
      duration: "2021 - 2022",
    },
    {
      institution: "Periyar Matric Hr Sec School",
      degree: "SSLC",
      duration: "2019 - 2020",
    },
  ],
};


const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, numquam corrupti.",
  skillList: [
    {
      icon: <SiSolidity />,
      name: "Solidity",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Nodejs",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0}} animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
    }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent-hover">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-hover">
                              <p className="text-white/60">{item.company}</p>
                            </span>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">education</TabsContent>
            <TabsContent value="skills" className="w-full">skills</TabsContent>
            <TabsContent value="about" className="w-full">about</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume