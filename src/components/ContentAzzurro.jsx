import digital from "../img/buy-comics-digital-comics.png"
import merchandise from "../img/buy-comics-merchandise.png"
import locator from "../img/buy-comics-shop-locator.png"
import subscriptions from "../img/buy-comics-subscriptions.png"
import power from "../img/buy-dc-power-visa.svg"

export default function ContentAzzurro() {

    return (
        <div className="content_azzurro">
            <a href=""><img src={digital} alt="" /> DIGITAL COMICS</a>
            <a href=""><img src={merchandise} alt="" /> DC MERCHANDAISE</a>
            <a href=""><img src={subscriptions} alt="" /> SUBSCRIPTIONS</a>
            <a href=""><img className="locator" src={locator} alt="" /> COMIC SHOP LOCATOR</a>
            <a href=""><img src={power} alt="" /> DC POWER VISA</a>
        </div>
    )
}