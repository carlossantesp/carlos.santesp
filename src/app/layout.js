import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import {Open_Sans} from "next/font/google";

export const metadata = {
    title: "Carlos Santillan - Frontend Developer",
    description:
        "Passionate frontend web developer merging code and design to craft captivating interfaces that bridge aesthetics and functionality. In every line of code, I aim to evoke emotions and drive innovation in the expansive digital realm.",
};

const opensans = Open_Sans({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({children}) {
    return (
        <html lang="es">
            <body className={`${opensans.className} dark:bg-slate-900 dark:text-gray-300`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
