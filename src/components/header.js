import Button from "./button";
import Container from "./container";
import Logo from "./logo";
import Navbar from "./navbar";

export default function Header() {
    return (
        <header className="relative bg-slate-800 shadow">
            <Container otherClass="flex justify-between h-16 items-center" id="header">
                <Logo />
                <Navbar />
                <div className="hidden lg:block">
                    <Button link="https://drive.google.com/file/d/1JyK_uNwL0wHpCvs0gwSvo3lesq9FJeSm/view">
                        Curriculum Vitae
                    </Button>
                </div>
            </Container>
        </header>
    );
}
