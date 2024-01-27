export default function Container({children, otherClass = "", id = ""}) {
    return (
        <section id={id} className={`${otherClass} max-w-7xl mx-auto px-6 lg:px-0`}>
            {children}
        </section>
    );
}
