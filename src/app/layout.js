import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Portafolio - Santillan Carlos",
    description: "Portafolio web disenado por Carlos Santillan",
};

export default function RootLayout({children}) {
    return (
        <html lang="es">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
