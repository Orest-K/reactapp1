export default function SiglePost ({item, chose}) {
        return (
            <span>
                {item.id}-{item.title}-
                <button onClick={() => chose(item.id)}>chose</button>
            </span>
        );
}
