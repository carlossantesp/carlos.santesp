import {Lato} from "next/font/google";

const lato = Lato({
    weight: "700",
    subsets: ["latin"],
    display: "swap",
});

export default function Description({title, description}) {
    return (
        <>
            <h2 className={`${lato.className} text-3xl text-center text-sky-400 mb-8`}>{title}</h2>
            <p className="text-center text-gray-400 text-lg">{description}</p>
        </>
    );
}
