import Hero from "@/components/hero";
import SectionContact from "@/components/sectioncontact";
import SectionProjects from "@/components/sectionprojects";
import SectionService from "@/components/sectionservices";
import SectionSkills from "@/components/sectionskills";

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <hr className="opacity-5 max-w-2xl md:max-w-5xl mx-auto" />
                <SectionSkills />
                <hr className="opacity-5 max-w-2xl md:max-w-5xl mx-auto" />
                <SectionProjects />
                <hr className="opacity-5 max-w-2xl md:max-w-5xl mx-auto" />
                <SectionService />
                <hr className="opacity-5 max-w-2xl md:max-w-5xl mx-auto" />
                <SectionContact />
            </main>
        </>
    );
}
