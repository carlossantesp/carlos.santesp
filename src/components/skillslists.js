import Skill from "./skill";

export default function SkillsLists({itemSkills}) {
    return (
        <ul className="mt-8 flex flex-wrap gap-4 md:gap-8 justify-center mb-8">
            {itemSkills.map((item) => (
                <Skill item={item} key={item.id} />
            ))}
        </ul>
    );
}
