"use client";
import Link from "next/link";
import { FaGithub, FaItchIo } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-glass mt-16 py-6 text-center text-white">
      <div className="container mx-auto flex flex-col items-center gap-4">

        <div className="flex gap-6">
          {/* GitHub Link */}
          <Link
            href="https://github.com/Amethestra"
            target="_blank"
            className="footer-icon group"
          >
            <FaGithub size={30} />
          </Link>

          {/* Itch.io Link */}
          <Link
            href="https://amethestra.itch.io/"
            target="_blank"
            className="footer-icon group"
          >
            <FaItchIo size={30} />
          </Link>
        </div>

        <p className="text-sm text-gray-400 mt-2">
          © {new Date().getFullYear()} Amethestra. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
