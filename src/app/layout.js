import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import {openSans} from "@/components/fonts";

export const metadata = {
    title: "Carlos Santillan - Front-End Developer",
    description:
        "Passionate frontend web developer merging code and design to craft captivating interfaces that bridge aesthetics and functionality. In every line of code, I aim to evoke emotions and drive innovation in the expansive digital realm.",
    openGraph: {
        title: "Carlos Santillan - Front-End Developer",
        description:
            "Passionate frontend web developer merging code and design to craft captivating interfaces that bridge aesthetics and functionality. In every line of code, I aim to evoke emotions and drive innovation in the expansive digital realm.",
        url: "https://dev-carlos-santillan.netlify.app",
        author: ["Carlos"],
        siteName: "Carlos Santillan - Front-End Developer",
        images: [
            {
                url: "https://dev-carlos-santillan.netlify.app/images/page.png",
                width: 800,
                height: 600,
            },
            {
                url: "https://dev-carlos-santillan.netlify.app/images/page-alt.png",
                width: 1800,
                height: 1600,
                alt: "Screen portfolio web",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={`${openSans.className} bg-slate-900 text-gray-300`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
