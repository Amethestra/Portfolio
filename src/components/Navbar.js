"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="glass navbar-overlay fixed top-0 w-full p-4 z-50">
      <Link href="/" className = "flex items-center gap-2">
        <Image src="/ame_logo.png" alt = "logo" width={50} height={50} className="logo"/>
      </Link>


      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-electric-cyan text-2xl font-bold glow-text">Portfolio</h1>
        <div className="space-x-6">
          <Link href="/" className="text-white hover:text-neon-violet">Home</Link>
          <Link href="/projects" className="text-white hover:text-neon-violet">Projects</Link>
          <Link href="/games" className="text-white hover:text-neon-violet">Games</Link>
          <Link href="/contact" className="text-white hover:text-neon-violet">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
