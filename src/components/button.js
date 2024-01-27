export default function Button({children, link = "#", target = true}) {
    return (
        <a className="bg-sky-400 rounded-full px-4 py-2 text-white text-sm" href={link} target={target ? "_blank" : ""}>
            {children}
        </a>
    );
}
