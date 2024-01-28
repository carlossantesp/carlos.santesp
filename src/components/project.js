import Image from "next/image";
import Button from "./button";
import Tags from "./tags";
import imgDefault from "../app/images/projects/pexabay.jpg";
import {lato} from "./fonts";
import {IconCode, IconLink} from "./icons";

export default function Project({item}) {
    const {name, description, image, tags, repo, link} = item;
    return (
        <article className="bg-slate-800 rounded-lg shadow p-4 space-y-4">
            <header className="rounded-lg overflow-hidden h-64 md:h-72 lg:h-96">
                <Image className="w-full" src={imgDefault} alt={name} />
            </header>
            <section className="space-y-4">
                <Tags items={tags} />
                <h3 className={`${lato.className} text-3xl`}>{name}</h3>
                <p className="hidden md:block text-gray-400">{description}</p>
            </section>
            <footer className="flex flex-col text-center space-y-4 md:flex-row md:space-y-0 md:justify-end md:space-x-4">
                <Button secondary link={link}>
                    <IconCode />
                    View Code
                </Button>
                <Button link={repo}>
                    <IconLink />
                    View Project
                </Button>
            </footer>
        </article>
    );
}
