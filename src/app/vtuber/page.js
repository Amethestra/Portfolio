"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import VTuberNavbar from "@/components/VTuberNavbar";
import Link from "next/link";

export default function VTuberHome() {
    return (
        <div className="vtuber-home text-white min-h-screen">
            <VTuberNavbar />

            <div className="container mx-auto py-16 pt-24 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Image 
                        src ="/vtuber/Banner.png"
                        alt="VTuber Banner"
                        width={800}
                        height={300}
                        className="mx-auto rounded-lg shadow-lg"
                    />
                </motion.div>

                <motion.h1
                    className="text-5xl font-bold text-neon-purple glow-text mt-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    VTuber Mode
                </motion.h1>

                <div className="mt-4 flex justify-center gap-6">
                    <Link href="vtuber/about" className="vtuber-btn">About</Link>
                    <Link href="vtuber/model" className="vtuber-btn">Model</Link>
                    <Link href="vtuber/streaming" className="vtuber-btn">Streaming</Link>
                </div>
            </div>
        </div>
    );
}
