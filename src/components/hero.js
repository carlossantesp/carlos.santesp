"use client";

import {TypeAnimation} from "react-type-animation";
import Button from "./button";
import Container from "./container";
import Image from "next/image";
import {inter, lato} from "./fonts";
import {IconDonwload, IconGitHub, IconLinkedin, IconMail} from "./icons";

export default function Hero() {
    return (
        <Container id="about" otherClass="py-14 grid grid-cols-1 md:grid-cols-2 md:items-center">
            <article className="space-y-4 text-center md:text-left order-2 md:order-1">
                <h4 className={`${inter.className} md:text-sm mt-4 md:mt-0`}>Hello Everyone!</h4>

                <h1 className={`${lato.className} text-4xl md:text-5xl`}>
                    I&apos;m <small className="text-4xl md:text-5xl text-sky-400">Carlos Santillan</small>
                </h1>
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={["Front-End Developer", 1000, "Web Developer", 500]}
                    wrapper="h2"
                    speed={20}
                    cursor={true}
                    repeat={Infinity}
                    className={`${lato.className} text-3xl md:text-4xl`}
                />
                <p className="text-balance text-gray-400 max-w-xl md:text-lg">
                    Passionate frontend web developer merging code and design to craft captivating interfaces that
                    bridge aesthetics and functionality. In every line of code, I aim to evoke emotions and drive
                    innovation in the expansive digital realm.
                </p>
                <footer className="flex flex-wrap gap-4 justify-center md:justify-start md:ml-0">
                    <Button secondary link="https://www.linkedin.com/in/dev-santillan-carlos/">
                        <IconLinkedin />
                        LinkedIn
                    </Button>
                    <Button secondary link="https://github.com/carlossantesp">
                        <IconGitHub />
                        GitHub
                    </Button>
                    <Button secondary link="mailto:carlos.santesp@gmail.com" alt={false}>
                        <IconMail />
                        carlos.santesp@gmail.com
                    </Button>
                    <Button
                        link="https://drive.google.com/file/d/1JyK_uNwL0wHpCvs0gwSvo3lesq9FJeSm/view"
                        otherClass="lg:hidden"
                    >
                        <IconDonwload />
                        Curriculum Vitae
                    </Button>
                </footer>
            </article>
            <article className="w-1/2 md:w-auto mx-auto md:mr-0 md:order-2">
                <Image src="/images/me/photo_meBig.png" alt="Carlos Santillan's photo" width={400} height={400} />
            </article>
        </Container>
    );
}
