import "@/styles/globals.css"
import "@/styles/vtuber.css"
import VTuberNavbar from "@/components/VTuberNavbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Amethestra | VTuber",
};

export default function VTuberLayout({ children}) {
    return (
        <html lang="en">
            <body className="vtuber-theme">
                <VTuberNavbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}