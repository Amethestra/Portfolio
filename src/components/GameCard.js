"use client";
import { motion } from "framer-motion";
import GameCard from "@/components/GameCard";
import Navbar from "@/components/WebDevNavbar";

export default function Games() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto py-16">
        <motion.h2
          className="text-3xl font-bold text-neonPurple text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Game Development Work 🎮
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <GameCard title="Game 1" description="A 2D platformer I made" link="#" />
          <GameCard title="Game 2" description="A top-down shooter" link="#" />
        </div>
      </div>
    </div>
  );
}
