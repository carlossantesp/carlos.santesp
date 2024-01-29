import Image from "next/image";
import Button from "./button";
import Tags from "./tags";
import {lato} from "./fonts";
import {IconCode, IconLink} from "./icons";

export default function Project({item}) {
    const {name, description, image, tags, repo, link} = item;
    return (
        <article className="bg-slate-800 rounded-lg shadow p-4 flex flex-col gap-4">
            <header className="rounded-lg overflow-hidden h-56 md:h-72 lg:h-96">
                <Image
                    className="w-full h-full object-cover object-top"
                    src={image}
                    width={600}
                    height={600}
                    alt={name}
                />
            </header>
            <section className="space-y-4 flex-1">
                <Tags items={tags} />
                <h3 className={`${lato.className} text-3xl`}>{name}</h3>
                <p className="hidden md:block text-gray-400">{description}</p>
            </section>
            <footer className="flex flex-col justify-center mx-12 sm:mx-0 gap-4 sm:flex-row md:justify-end">
                <Button secondary link={link}>
                    <IconLink />
                    View Project
                </Button>
                <Button link={repo}>
                    <IconCode />
                    View Code
                </Button>
            </footer>
        </article>
    );
}
