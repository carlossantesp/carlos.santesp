import {Lato} from "next/font/google";

const lato = Lato({
    weight: "700",
    subsets: ["latin"],
    display: "swap",
});
export default function Service({item}) {
    const {title, description, icon} = item;
    return (
        <div className="space-y-4">
            <div className="bg-slate-950 w-12 h-12 lg:w-16 lg:h-16 rounded-full"></div>
            <h3 className={`${lato.className} text-2xl`}>{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}
