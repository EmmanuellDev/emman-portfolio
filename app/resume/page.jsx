"use client";

import { Description } from "@radix-ui/react-dialog";
import {FaHtml5, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs, SiSolidity} from "react-icons/si";

const about = {
  title: 'About me',
  description: "I'm a Smart Contract Developer with over 2 years of experience. Experienced with all stages of the development cycle for decentralized web projects.",
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
  description: "Hello! It's me Emman, I'm Always up for challenges, I have worked for lean start-ups and a member of the one the India's top start-up ESPOIR.",
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
      position: "Digital Productivity & AI Fluencer",
      duration: "Winter - 2023",
    },
  ],
};

const education = {
  icon: '/assests/resume/cap.svg',
  title: "My education",
  description: "I'm currently an 2nd Year Engineering student going on with my BE degree in JEC",
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
  description: "Having an in-depth knowledge including advanced Solidity, HTML5, Tailwind css, Javascript, React.js, Next.js, Node.js, Figma.",
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
      name: "Node.js",
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
                      return ( <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent-hover">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-hover"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return ( <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent-hover">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex place-items-baseline gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-hover"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent-hover transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex justify-center sm:text-start items-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume