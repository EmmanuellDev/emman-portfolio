"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Smart Contract Development',
    description: 'Driven by a passion for blockchain technology, I actively contribute to the Solidity community through educational content, open-source projects, and participation in blockchain events. My commitment to continuous learning ensures I stay at the forefront of industry advancements.',
    href: ""
  },
  {
    num: '02',
    title: 'Web2 Development',
    description: 'With a comprehensive skill set spanning front-end and back-end development, I specialize in crafting robust, responsive web applications that seamlessly integrate user-friendly interfaces with powerful server-side functionalities.',
    href: ""
  },
  {
    num: '03',
    title: 'UI/UX Design',
    description: 'I combine aesthetic flair with functional design principles to deliver visually compelling UI designs. By leveraging color theory and typography effectively, I create interfaces that enhance usability and captivate users.',
    href: ""
  },
  {
    num: '04',
    title: 'Logo Design',
    description: 'I collaborate closely with clients to understand their vision and goals. By integrating client feedback throughout the design process, I deliver logos that align with brand identity and resonate with target audiences.',
    href: ""
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0}} animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
        }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
            return ( <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-hover transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services