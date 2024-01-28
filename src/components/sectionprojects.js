import Button from "./button";
import Container from "./container";
import Description from "./description";
import {IconRight} from "./icons";
import ProjectsLists from "./projectslists";

const itemsProjects = [
    {
        id: "1",
        name: "Block master application",
        description:
            "An application that displays movie information developed with React, showcasing details about films in an engaging way.",
        repo: "https://github.com/carlossantesp/block-master-app",
        link: "https://block-master-app-cse.netlify.app/",
        image: "/images/projects/blockmaster.png",
        tags: ["ReactJS", "StyledComponent", "Hooks", "Redux", "API"],
    },
    {
        id: "2",
        name: "Pexabay application",
        description:
            "An application that displays movie information developed with React, showcasing details about films in an engaging way.",
        repo: "https://github.com/carlossantesp/pexabay-react",
        link: "https://pexabay-react-app.netlify.app/",
        image: "/images/projects/pexabay.png",
        tags: ["ReactJS", "Async/Await", "API", "CSS Modules"],
    },
    {
        id: "3",
        name: "DOLL's Landing Page",
        description:
            "An application that displays movie information developed with React, showcasing details about films in an engaging way.",
        repo: "https://github.com/carlossantesp/landingpage-doll",
        link: "https://ladingpage-doll.netlify.app/",
        image: "/images/projects/doll.png",
        tags: ["ReactJS", "StyledComponent", "Landingpage"],
    },
    {
        id: "4",
        name: "Calel's Landing Page",
        description:
            "An application that displays movie information developed with React, showcasing details about films in an engaging way.",
        repo: "https://github.com/carlossantesp/calel",
        link: "https://carlossantesp.github.io/calel/",
        image: "/images/projects/calel.png",
        tags: ["HTML5", "CSS3", "Flexbox", "Grid", "Javascript"],
    },
];

export default function SectionProjects() {
    return (
        <Container otherClass="my-12 md:my-14" id="project">
            <Description
                title="Some things I've Build"
                description="Check out these captivating and challenging projects I've crafted"
            />
            <ProjectsLists itemsProjects={itemsProjects} />
            <footer className="w-max mx-auto">
                <Button big link="https://github.com/carlossantesp">
                    See more projects
                    <IconRight />
                </Button>
            </footer>
        </Container>
    );
}
