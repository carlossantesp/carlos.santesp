import Link from "next/link";

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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </div>
            {/* Navbar Mobile */}
            <nav className="hidden absolute w-3/4 md:w-1/4 min-h-screen bg-slate-800 right-0 top-0">
                <div className="h-16 flex items-center justify-end pr-7">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
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
