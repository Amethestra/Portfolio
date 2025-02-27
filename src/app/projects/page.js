"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const websites = [
  { 
    title: "My Portfolio",
    description: "", 
    link: "https://portfolio-pi-three-78.vercel.app/", 
    image:"/projects/Portfolio_screenshot.png"
  },
];

export default function Projects() {
  return (
    <div className="projects-page animated-bg min-h-screen text-white">
      <Navbar />

      <div className="container mx-auto py-16">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-neonBlue text-center glow-text mt-6"
          initial={{ opacity: 0, y: -20}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 1 }}
        >
          Previous Websites
        </motion.h1>
        <p className="mt-4 text-lg text-gray-400">
          Here are some of the websites that I have created.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {websites.map((site, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-lg flex flex-col items-center text-center" 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2}}
            >
              <Image
                src ={site.image}
                alt={site.title}
                width={300}
                height={200}
                className="rounded-md object-cover mb-4"
              />
              <h2 className="text-2xl font-bold text-electric-cyan">{site.title}</h2>
              <p className="text-gray-400 mt-2">{site.description}</p>
              <Link
                href={site.link}
                target="_blank"
                className="mt-4 px-6 py-2 bg-neonPurple text-white font-bold rounded-md hover:bg-purple-700 transition"
              >
                Visit site
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


