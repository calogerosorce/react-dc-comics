export default function List({ list_one, list_two }) {



    return (
        <>
            <div className="col-0">

                {list_one.map((items) => (
                    <ul key={items.id}>
                        <h3><strong>{items.title}</strong></h3>
                        {items.links.map((link) => (
                            <a href="" key={link.id}><li>{link.text}</li></a>
                        ))}
                    </ul>
                ))}

            </div>

            {list_two.map((items, i) => (
                <ul key={items.id}>
                    <h3><strong>{items.title}</strong></h3>
                    {items.links.map((link) => (
                        <a href="" key={link.id}><li>{link.text}</li></a>
                    ))}
                </ul>
            ))}
        </>

    )
}