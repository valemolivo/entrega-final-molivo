import './Footer.css'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
    <div className="iconosRedes">
            <Link to={"https://facebook.com/"}> <img src="../img/fb.png" alt="Facebook" width={30} height={35} /></Link>
            <Link to={"https://instagram.com/"}> <img src="../img/instagram.png" alt="Instagram" width={35} height={35} /></Link>
            <Link to={"https://twitter.com/"}> <img src="../img/tw.png" alt="Twitter" width={35} height={35} /></Link>
    </div>
    )
}

export default Footer