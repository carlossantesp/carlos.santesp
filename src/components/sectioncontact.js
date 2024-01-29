import Container from "./container";
import Description from "./description";
import FormContact from "./form-contact";

export default function SectionContact() {
    return (
        <Container id="contact" otherClass="my-12 md:my-14">
            <Description
                title="Get in Touch"
                description="Unlock the potential of your web projects – let's build something extraordinary together! Send me a message to kick-start your vision."
            />
            <FormContact value="carlos.santesp@gmail.com" />
        </Container>
    );
}
