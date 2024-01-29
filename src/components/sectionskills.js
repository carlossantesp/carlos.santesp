import Container from "./container";
import Description from "./description";
import {
    IconAstro,
    IconCss,
    IconFigma,
    IconGit,
    IconHTML,
    IconJavascript,
    IconNextjs,
    IconReact,
    IconTailwindcss,
    IconTypeScript,
} from "./icons";
import SkillsLists from "./skillslists";

const itemSkills = [
    {id: "1", icon: <IconHTML />, title: "HTML5"},
    {id: "2", icon: <IconCss />, title: "CSS3"},
    {id: "3", icon: <IconJavascript />, title: "Javascript"},
    {id: "4", icon: <IconTypeScript />, title: "TypeScript"},
    {id: "5", icon: <IconReact />, title: "Reactjs"},
    {id: "6", icon: <IconNextjs />, title: "Nextjs"},
    {id: "7", icon: <IconAstro />, title: "Astro"},
    {id: "8", icon: <IconTailwindcss />, title: "TailwindCSS"},
    {id: "9", icon: <IconGit />, title: "Git"},
    {id: "10", icon: <IconFigma />, title: "Figma"},
];

export default function SectionSkills() {
    return (
        <Container id="skill" otherClass="my-4 md:my-10">
            <Description
                title="Programming Expertise"
                description="Proficient in programming languages and technologies with strong technical expertise."
            />
            <SkillsLists itemSkills={itemSkills} />
        </Container>
    );
}
