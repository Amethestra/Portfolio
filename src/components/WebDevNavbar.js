"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WebDevSidebar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const switchToVTuberMode = (e) => {
    e.preventDefault();
    router.push("/vtuber");
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <>
      <div className="burger" onClick={() => setOpen(!open)}>&#9776;</div>
      <nav className={`sidebar ${open ? "open" : ""}`}>
        <div className="mb-6">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/ame_logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="logo"
            />
          </Link>
        </div>
        <ul className="menu">
          <li className="menu-item">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li className="menu-item">
            <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <ul className="submenu">
              <li className="submenu-item">Featured</li>
              <li className="submenu-item">Archived</li>
            </ul>
          </li>
          <li className="menu-item">
            <Link href="/games" onClick={() => setOpen(false)}>Games</Link>
            <ul className="submenu">
              <li className="submenu-item">Browser Games</li>
              <li className="submenu-item">Downloads</li>
            </ul>
          </li>
          <li className="menu-item">
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </li>
          <li className="menu-item">
            <button onClick={switchToVTuberMode} className="toggle-switch">
              <span className="toggle-text">VTuber Mode</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
