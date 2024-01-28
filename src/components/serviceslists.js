import Service from "./service";

export default function ServicesLists({itemsServices}) {
    return (
        <article className="bg-slate-800 shadow rounded-lg p-8 mt-8 space-y-8 md:grid md:grid-cols-2 md:space-y-0 md:gap-8 lg:grid-cols-3">
            {itemsServices.map((item) => (
                <Service key={item.id} item={item} />
            ))}
        </article>
    );
}
