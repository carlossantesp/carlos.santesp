import Container from "./container";
import Description from "./description";
import ServicesLists from "./serviceslists";

const itemsServices = [
    {
        id: "1",
        icon: "icon",
        title: "Web Development",
        description:
            "Transforming ideas into dynamic websites using cutting-edge technologies for exceptional user experiences.",
    },
    {
        id: "2",
        icon: "icon",
        title: "UI/UX Design",
        description:
            "Captivating audiences with visually stunning interfaces and intuitive design for a perfect blend of aesthetics and functionality.",
    },
    {
        id: "3",
        icon: "icon",
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
                description="Cliente-Centric Solutions: Elevating Experiences Through the Services I Offer."
            />
            <ServicesLists itemsServices={itemsServices} />
        </Container>
    );
}
