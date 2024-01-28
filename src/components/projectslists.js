import Project from "./project";

export default function ProjectsLists({itemsProjects}) {
    return (
        <div className="my-8 grid md:grid-cols-2 gap-4">
            {itemsProjects.map((item) => (
                <Project item={item} key={item.id} />
            ))}
        </div>
    );
}
