import logo from "../img/dc-logo.png"
import NavBar from "./NavBar"

export default function Header() {



    return (
        <header>
            <img width={70} src={logo} alt="Logo" />
            <NavBar />
        </header>
    )
} 