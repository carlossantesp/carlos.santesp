export default function Container({children, otherClass = ""}) {
    return <div className={`${otherClass} max-w-7xl mx-auto`}>{children}</div>;
}
