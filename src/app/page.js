"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" text-white min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image src="/ame_logo.png"
            alt="logo"
            width={380} 
            height={380}
            className="mb-6" />
        </motion.div>

        {/* Title Animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-neonBlue"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm Amethestra
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.p
          className="mt-4 text-lg text-gray-400"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Software Developer | Game Designer | Web Developer
        </motion.p>

        {/* Download CV Button */}
        <motion.a
          href="/CV.pdf"
          download
          className="mt-6 px-6 py-3 rounded-md bg-neonPurple text-white font-bold hover:bg-purple-700 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Download CV
        </motion.a>

        {/* CTA Buttons */}
        <motion.div
          className="mt-6 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Link href="/projects">
            <span className="px-6 py-3 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition">
              View Projects
            </span>
          </Link>
          <Link href="/games">
            <span className="px-6 py-3 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition">
              View Games
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
