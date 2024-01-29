import Container from "./container";
import Description from "./description";
import {WebCode, Maintenance, Design} from "./icons";
import ServicesLists from "./serviceslists";

const itemsServices = [
    {
        id: "1",
        icon: <WebCode />,
        title: "Web Development",
        description:
            "Transforming ideas into dynamic websites using cutting-edge technologies for exceptional user experiences.",
    },
    {
        id: "2",
        icon: <Design />,
        title: "UI/UX Design",
        description:
            "Captivating audiences with visually stunning interfaces and intuitive design for a perfect blend of aesthetics and functionality.",
    },
    {
        id: "3",
        icon: <Maintenance />,
        title: "Website Maintenance",
        description:
            "Ensuring seamless performance through proactive maintenance services, keeping your online presence optimized for ongoing success.",
    },
];

export default function SectionService() {
    return (
        <Container id="service" otherClass="my-12 md:my-14">
            <Description
                title="Frontend Development Services"
                description="Client-Centric Solutions: Elevating Experiences Through the Services I Offer."
            />
            <ServicesLists itemsServices={itemsServices} />
        </Container>
    );
}
