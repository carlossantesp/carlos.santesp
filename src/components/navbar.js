import Link from "next/link";
import {IconClose, IconMenu} from "./icons";

export default function Navbar() {
    const navbarLinkItems = [
        {name: "About", path: "#about"},
        {name: "Projects", path: "#project"},
        {name: "Skills", path: "#skill"},
        {name: "Services", path: "#service"},
        {name: "Contact me", path: "#contact"},
    ];
    return (
        <>
            <div className="rounded text-sky-400 hover:text-gray-300 hover:bg-sky-400 md:hidden">
                <IconMenu />
            </div>
            {/* Navbar Mobile */}
            <nav className="hidden absolute w-3/4 md:w-1/4 min-h-screen bg-slate-800 right-0 top-0">
                <div className="h-16 flex items-center justify-end pr-7">
                    <IconClose />
                </div>
                <ul className="flex flex-col space-y-4">
                    {navbarLinkItems.map((item, index) => (
                        <li
                            key={index}
                            className="py-2 w-full text-center hover:bg-slate-950 hover:border-l-4 hover:border-sky-400 transition-colors"
                        >
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Navbar Desktop */}
            <nav className="hidden md:block">
                <ul className="flex space-x-4 lg:space-x-8">
                    {navbarLinkItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                className="hover:text-sky-400 transition-colors hover:border-b-2 hover:border-sky-400"
                                href={item.path}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
