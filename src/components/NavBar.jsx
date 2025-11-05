export default function NavBar() {

    const menu = [
        {
            id: 1,
            link: '#',
            text: 'CHARACTERS',
            is_active: false
        },
        {
            id: 2,
            link: '#',
            text: 'COMICS',
            is_active: true
        },
        {
            id: 3,
            link: '#',
            text: 'MOVIES',
            is_active: false
        },
        {
            id: 4,
            link: '#',
            text: 'TV',
            is_active: false
        },
        {
            id: 5,
            link: '#',
            text: 'GAMES',
            is_active: false
        },
        {
            id: 6,
            link: '#',
            text: 'COLLECTIBLES',
            is_active: false
        },
        {
            id: 7,
            link: '#',
            text: 'VIDEOS',
            is_active: false
        },
        {
            id: 8,
            link: '#',
            text: 'FANS',
            is_active: false
        },
        {
            id: 9,
            link: '#',
            text: 'NEWS',
            is_active: false
        },
        {
            id: 10,
            link: '#',
            text: 'SHOPS',
            is_active: false
        }
    ]

    return (

        <nav className="nav justify-content-center  ">
            {menu.map(item => (
                <a key={item.id} className={`nav-link ${item.is_active ? 'current' : ''}`} href={item.link}><strong>{item.text}</strong></a>
            ))}
        </nav>
    )
}