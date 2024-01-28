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
            "A cutting-edge application built with ReactJS and Redux, seamlessly connecting users to a movie API for detailed film information. Its intuitive interface ensures a user-friendly experience, making exploring the cinematic world effortless.",
        repo: "https://github.com/carlossantesp/block-master-app",
        link: "https://block-master-app-cse.netlify.app/",
        image: "/images/projects/blockmaster.png",
        tags: ["ReactJS", "StyledComponent", "Hooks", "Redux", "API"],
    },
    {
        id: "2",
        name: "Pexabay application",
        description:
            "A ReactJS app, connects to an API for easy access to a wide array of royalty-free images. Explore and download high-quality photos effortlessly with its user-friendly search.",
        repo: "https://github.com/carlossantesp/pexabay-react",
        link: "https://pexabay-react-app.netlify.app/",
        image: "/images/projects/pexabay.png",
        tags: ["ReactJS", "Async/Await", "API", "CSS Modules"],
    },
    {
        id: "3",
        name: "DOLL's Landing Page",
        description:
            "React-based landing page with styled-components, presenting sections like About Us, Services, and a subscription option. Tailored for a virtual bank, it provides a sleek and inviting overview for users to explore and subscribe.",
        repo: "https://github.com/carlossantesp/landingpage-doll",
        link: "https://ladingpage-doll.netlify.app/",
        image: "/images/projects/doll.png",
        tags: ["ReactJS", "StyledComponent", "Landingpage"],
    },
    {
        id: "4",
        name: "Calel's Landing Page",
        description:
            "Streamline your meeting scheduling professionally. This HTML5 landing page, featuring CSS3 grid and flexbox, eliminates email hassles, allowing you to dedicate more time to your work.",
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
                <Button big link="https://github.com/carlossantesp?tab=repositories">
                    See more projects
                    <IconRight />
                </Button>
            </footer>
        </Container>
    );
}
