"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function VTuberNavbar() {
    const router = useRouter();

    const switchToWebDevMode = (e) => {
        e.preventDefault();
        router.push("/");
        setTimeout(() => window.location.reload(), 100);
    };

    return (
        <nav className="vtuber-navbar fixed top-0 w-full px-6 z-50 flex justify-between items-center">
          {/* Navigation Links */}
            <div className="flex space-x-6 items-center">
                <Link href="/vtuber" className="text-neon-purple font-bold">VTuber Universe</Link>
                <Link href="/vtuber/about" className="text-black hover:text-neon-violet">About</Link>
                <Link href="/vtuber/model" className="text-black hover:text-neon-violet">Model</Link>
                <Link href="/vtuber/streaming" className="text-black hover:text-neon-violet">Streaming</Link>
            </div>

            <button onClick={switchToWebDevMode} className="toggle-switch">
                Web Dev Mode
            </button>

        </nav>
    );
}