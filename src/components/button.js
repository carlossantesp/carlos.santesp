export default function Button({children, link = "#", target = true, secondary = false}) {
    return (
        <a
            className={`${
                secondary ? "bg-slate-800 border border-gray-300" : "bg-sky-400"
            }  rounded-full px-4 py-2 text-white text-sm `}
            href={link}
            target={target ? "_blank" : ""}
        >
            {children}
        </a>
    );
}
