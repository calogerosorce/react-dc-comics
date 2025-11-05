export default function List() {

    const list_one = [
        [
            <h3><strong>DC COMICS</strong></h3>,

            <a href=""><li>Characters</li></a>,

            <a href=""><li>Comics</li></a>,

            <a href=""><li>Movies</li></a>,

            <a href=""><li>TV</li></a>,

            <a href=""><li>Games</li></a>,

            <a href=""><li>Videos</li></a>,

            <a href=""><li>News</li></a>
        ],

        [
            <h3><strong>SHOPS</strong></h3>,

            <a href=""><li>Shop DC</li></a>,

            <a href=""><li>Shop DC Collectibles</li></a>
        ]
    ]

    const list_two = [
        [
            <h3><strong>DC</strong></h3>,

            <a href=""><li>Terms Of Use</li></a>,

            <a href=""><li>Privacy policy (New)</li></a>,

            <a href=""><li>Ad Choices</li></a>,

            <a href=""><li>Advertising</li></a>,

            <a href=""><li>Jobs</li></a>,

            <a href=""><li>Subscriptions</li></a>,

            <a href=""><li>Talent Workshops</li></a>,

            <a href=""><li>CPSC Certificates</li></a>,

            <a href=""><li>Ratings</li></a>,

            <a href=""><li>Shop Help</li></a>,

            <a href=""><li>Contact Us</li></a>
        ],
        [
            <h3><strong>DC COMICS</strong></h3>,

            <a href=""><li>DC</li></a>,

            <a href=""><li>MAD Magazine</li></a>,

            <a href=""><li>DC Kids</li></a>,

            <a href=""><li>DC Universe</li></a>,

            <a href=""><li>DC Power VIsa</li></a>
        ]

    ]

    return (
        <>
            <div className="col-0">

                {list_one.map((items, i) => (<ul key={i}>{items}</ul>))}

            </div>

            {list_two.map((items, i) => (<ul key={i}>{items}</ul>))}
        </>

    )
}