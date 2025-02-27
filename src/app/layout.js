import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/globals.css";
import "@/styles/webdev.css";
import WebDevNavbar from "@/components/WebDevNavbar";
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
  description: "Showcasing my web development work.",
  icons: {
    icon: "/ame_logo.png",
    shortcut: "/ame_logo.png",
    apple: "/ame_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="webdev-theme">
        <WebDevNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
