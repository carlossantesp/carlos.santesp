"use client";
import Link from "next/link";
import {IconClose, IconMenu} from "./icons";
import {useState} from "react";

export default function Navbar() {
    const navbarLinkItems = [
        {name: "About", path: "#about"},
        {name: "Skills", path: "#skill"},
        {name: "Projects", path: "#project"},
        {name: "Services", path: "#service"},
        {name: "Contact me", path: "#contact"},
    ];
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            {/* Menu */}
            <button
                type="button"
                className="rounded text-sky-400 hover:text-gray-300 md:hidden transition-colors"
                onClick={toggle}
            >
                <IconMenu />
            </button>
            {/* Navbar Mobile */}
            <nav
                className={`${
                    isOpen ? "scale-x-100" : "scale-x-0"
                } absolute w-3/4 md:w-1/4 min-h-screen bg-slate-800 right-0 top-0 shadow origin-right transition-transform`}
            >
                {/* Close */}
                <button
                    type="button"
                    className="ml-auto h-16 w-16 justify-center items-center flex cursor-pointer hover:text-sky-400 transition-colors"
                    onClick={toggle}
                >
                    <IconClose />
                </button>
                {/* Links mobiles */}
                <ul className="flex flex-col gap-2">
                    {navbarLinkItems.map((item, index) => (
                        <li
                            key={index}
                            className="w-full text-center hover:bg-slate-950 hover:border-l-4 hover:border-sky-400 transition-colors cursor-pointer"
                        >
                            <Link className="block py-4" href={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Navbar Desktop */}
            <nav className="hidden md:block">
                {/* Links Desktop */}
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
