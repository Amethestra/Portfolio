import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";

// Load custom fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update metadata for SEO
export const metadata = {
  title: "Amethestra",
  description: "Showcasing my software development and game development work.",
  icons: {
    icon: "/ame_logo.png",
    shortcut: "/ame_logo.png",
    apple: "/ame_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer /> {/* Added Footer Here */}
      </body>
    </html>
  );
}
