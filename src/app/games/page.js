"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const games = [
  { title: "Cyber Racer", image: "/games/cyber-racer.png" },
  { title: "Neon Fighter", image: "/games/neon-fighter.png" },
  { title: "Arcade Quest", image: "/games/arcade-quest.png" },
  { title: "Mecha Clash", image: "/games/mecha-clash.png" }
];

export default function Games() {
  return (
    <div className="games-page animated-bg min-h-screen text-white">
      <Navbar />

      <div className="container mx-auto py-16">
        <motion.h2
          className="text-3xl font-bold text-neonPurple text-center glow-text mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Games
        </motion.h2>

        {/* Timeline Container */}
        <div className="timeline-container relative py-16">
          <div className="timeline-line"></div>

          {games.map((game, index) => (
            <motion.div
              key={index}
              className={`arcade-container`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="arcade-machine">
                <div className="arcade-screen">
                  <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mt-4">{game.title}</h3>
                <div className="arcade-controls"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
