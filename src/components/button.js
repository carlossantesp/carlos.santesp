import Link from "next/link";
import {fira} from "./fonts";

export default function Button({link = "#", target = true, secondary = false, big = false, children, otherClass}) {
    return (
        <Link
            className={`${fira.className} ${
                secondary ? "bg-slate-800 border border-gray-300 hover:bg-slate-700" : "bg-sky-400 hover:bg-sky-500"
            } ${
                big ? "px-7 py-4 text-xl" : "px-4 py-2 text-sm"
            }  rounded-full text-gray-100 transition-colors flex items-center gap-2 justify-center ${otherClass}`}
            href={link}
            target={target ? "_blank" : ""}
        >
            {children}
        </Link>
    );
}
