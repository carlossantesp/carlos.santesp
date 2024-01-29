import {inter} from "./fonts";

export default function Skill({item}) {
    const {icon, title} = item;
    return (
        <li className="flex flex-col gap-2 items-center text-gray-300">
            {icon}
            <p className={`${inter.className} text-xs text-gray-400`}>{title}</p>
        </li>
    );
}
