"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WebDevNavbar() {
  const router = useRouter();

  const switchToVTuberMode = (e) => {
    e.preventDefault();
    router.push("/vtuber");
    setTimeout(() => window.location.reload(), 100);
  };
  return (
    <nav className="webdev-navbar fixed top-0 w-full px-6 z-50 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image 
          src="/ame_logo.png"
          alt="Logo"
          width={50} 
          height={50}
          className="logo"
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-6 items-center">
        <Link href="/" className="text-white hover:text-neon-violet">Home</Link>
        <Link href="/projects" className="text-white hover:text-neon-violet">Projects</Link>
        <Link href="/games" className="text-white hover:text-neon-violet">Games</Link>
        <Link href="/contact" className="text-white hover:text-neon-violet">Contact</Link>
      </div>

      <button onClick={switchToVTuberMode} className="toggle-switch">
        VTuber Mode
      </button>

    </nav>
  );
}
