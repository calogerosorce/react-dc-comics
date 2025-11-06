import logo from "../img/dc-logo-bg.png"
import facebook from "../img/footer-facebook.png"
import periscope from "../img/footer-periscope.png"
import pinterest from "../img/footer-pinterest.png"
import twitter from "../img/footer-twitter.png"
import youtube from "../img/footer-youtube.png"
import List from "./List"

export default function Footer({ list_one, list_two }) {





    return (
        <footer>
            <div className="all">
                <div className="up">
                    <List list_one={list_one} list_two={list_two} />

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