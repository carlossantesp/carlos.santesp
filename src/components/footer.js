import Container from "./container";

export default function Footer() {
    return (
        <>
            <hr className="opacity-5 max-w-2xl md:max-w-5xl mx-auto" />
            <footer className="m-6">
                <Container>
                    <p className="text-center text-sm text-gray-400">
                        &copy; Desing and Build by <span className="text-sky-400">Carlos Santillan</span> -{" "}
                        {new Date().getFullYear()}
                    </p>
                </Container>
            </footer>
        </>
    );
}
