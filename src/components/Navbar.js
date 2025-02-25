"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="glass navbar-overlay fixed top-0 w-full p-4 z-50 flex justify-between items-center h-20">

      <Link href="/" className = "flex items-center">
        <div className="h-[calc(100%-4px)] flex items-center justify-center py-[2px]">
          <Image 
            src="/ame_logo.png" 
            alt = "logo" 
            width={84} 
            height={84} 
            className="h-full object-contain"/>
        </div>
      </Link>


      <div className="flex space-x-6 items-center">
          <Link href="/" className="text-white hover:text-neon-violet">Home</Link>
          <Link href="/projects" className="text-white hover:text-neon-violet">Projects</Link>
          <Link href="/games" className="text-white hover:text-neon-violet">Games</Link>
          <Link href="/contact" className="text-white hover:text-neon-violet">Contact</Link>
      </div>
    </nav>
  );
}
