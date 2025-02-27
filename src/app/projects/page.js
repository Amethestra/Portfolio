"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/WebDevNavbar";
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
    <div className="projects-page min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto py-16 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-neonBlue glow-text pt-24"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Previous Websites
        </motion.h1>
        <p className="mt-4 text-lg text-gray-400">
          A collection of websites I’ve designed and developed.
        </p>

        {/* Website Cards */}
        <div className="websites-grid">
          {websites.map((site, index) => (
            <motion.div
              key={index}
              className="website-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image
                src={site.image}
                alt={site.title}
                width={300}
                height={200}
                className="website-image"
              />
              <h2 className="text-2xl font-bold text-electric-cyan">{site.title}</h2>
              <p className="text-gray-400 mt-2">{site.description}</p>
              <Link
                href={site.link}
                target="_blank"
                className="mt-4 px-6 py-2 bg-neonPurple text-white font-bold rounded-md hover:bg-purple-700 transition"
              >
                Visit Website
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


