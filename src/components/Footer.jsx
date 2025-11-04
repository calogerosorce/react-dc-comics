import logo from "../img/dc-logo-bg.png"
import facebook from "../img/footer-facebook.png"
import periscope from "../img/footer-periscope.png"
import pinterest from "../img/footer-pinterest.png"
import twitter from "../img/footer-twitter.png"
import youtube from "../img/footer-youtube.png"

export default function Footer() {


    return (
        <footer>
            <div className="all">
                <div className="up">
                    <div className="col-0">
                        <ul>
                            <h3><strong>DC COMICS</strong></h3>
                            <a href=""><li>Characters</li></a>
                            <a href=""><li>Comics</li></a>
                            <a href=""><li>Movies</li></a>
                            <a href=""><li>TV</li></a>
                            <a href=""><li>Games</li></a>
                            <a href=""><li>Videos</li></a>
                            <a href=""><li>News</li></a>
                        </ul>
                        <ul>
                            <h3><strong>SHOPS</strong></h3>
                            <a href=""><li>Shop DC</li></a>
                            <a href=""><li>Shop DC Collectibles</li></a>
                        </ul>
                    </div>
                    <ul>
                        <h3><strong>DC</strong></h3>
                        <a href=""><li>Terms Of Use</li></a>
                        <a href=""><li>Privacy policy (New)</li></a>
                        <a href=""><li>Ad Choices</li></a>
                        <a href=""><li>Advertising</li></a>
                        <a href=""><li>Jobs</li></a>
                        <a href=""><li>Subscriptions</li></a>
                        <a href=""><li>Talent Workshops</li></a>
                        <a href=""><li>CPSC Certificates</li></a>
                        <a href=""><li>Ratings</li></a>
                        <a href=""><li>Shop Help</li></a>
                        <a href=""><li>Contact Us</li></a>
                    </ul>
                    <ul>
                        <h3><strong>DC COMICS</strong></h3>
                        <a href=""><li>DC</li></a>
                        <a href=""><li>MAD Magazine</li></a>
                        <a href=""><li>DC Kids</li></a>
                        <a href=""><li>DC Universe</li></a>
                        <a href=""><li>DC Power VIsa</li></a>
                    </ul>
                </div>
                <div>
                    <img width={480} src={logo} alt="" />
                </div>
            </div>
            <div className="low">
                <button>SING-UP NOW!</button>
                <div className="social">
                    <a href="" className="follow"><strong>FOLLOW US</strong></a>
                    <a href=""><img src={facebook} alt="" /></a>
                    <a href=""><img src={twitter} alt="" /></a>
                    <a href=""><img src={youtube} alt="" /></a>
                    <a href=""><img src={pinterest} alt="" /></a>
                    <a href=""><img src={periscope} alt="" /></a>
                </div>
            </div>

        </footer >
    )
}