export default function SiglePost ({item, chose}) {
        return (
            <div>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <button onClick={() => chose(item.id)}>Read post comments</button>
            </div>
        );
}
