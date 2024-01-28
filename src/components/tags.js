import Tag from "./tag";

export default function Tags({items}) {
    return (
        <ul className="flex flex-wrap gap-2">
            {items.map((item, index) => (
                <Tag name={item} key={index} />
            ))}
        </ul>
    );
}
