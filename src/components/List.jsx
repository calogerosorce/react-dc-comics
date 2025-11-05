export default function List() {

    const list_one = [
        {
            id: 1,
            title: 'DC COMICS',
            links: [
                {
                    id: 2,
                    text: 'Characters'
                },
                {
                    id: 3,
                    text: 'Comics'
                },
                {
                    id: 4,
                    text: 'Movies'

                },
                {
                    id: 5,
                    text: 'TV'

                },
                {
                    id: 6,
                    text: 'Games'

                },
                {
                    id: 7,
                    text: 'Videos'

                },

                {
                    id: 8,
                    text: 'News'

                }
            ]
        },


        {
            id: 9,
            title: 'SHOP',
            links: [

                {
                    id: 10,
                    title: '',
                    text: 'Shop DC'

                },

                {
                    id: 11,
                    title: '',
                    text: 'Shop DC Collectibles'
                }
            ]

        }

    ]

    const list_two = [
        {
            id: 1,
            title: 'DC',
            links: [
                {
                    id: 2,
                    text: 'Terms Of Use'
                },
                {
                    id: 3,
                    text: 'Privacy policy (New)'
                },
                {
                    id: 4,
                    text: 'Ad Choices'
                },
                {
                    id: 5,
                    text: 'Advertising'
                },
                {
                    id: 6,
                    text: 'Jobs'
                },
                {
                    id: 7,
                    text: 'Subscriptions'
                },
                {
                    id: 8,
                    text: 'Talent Workshops'
                },
                {
                    id: 9,
                    text: 'CPSC Certificates'
                },
                {
                    id: 10,
                    text: 'Ratings'
                },
                {
                    id: 11,
                    text: 'Shop Help'
                },
                {
                    id: 12,
                    text: 'Contact Us'
                }
            ]
        },
        {
            id: 13,
            title: 'DC COMICS',
            links: [
                {
                    id: 14,
                    text: 'DC'
                },
                {
                    id: 15,
                    text: 'MAD Magazine'
                },
                {
                    id: 16,
                    text: 'DC Kids'
                },
                {
                    id: 17,
                    text: 'DC Universe'
                },
                {
                    id: 18,
                    text: 'DC Power Visa'
                }
            ]
        }

    ]

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