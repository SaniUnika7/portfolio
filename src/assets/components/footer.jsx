import { faDiscord, faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "./Navbar"

const Footer = () =>
    <div className="h-16 text-white text-center">
        <div className="nyname">&copy;Unika Dhungana || 2025</div>
        <div className="icons flex gap-3 justify-center">
        <a href="https://www.facebook.com/unika.dhungana.73" target="_blank">
        <FontAwesomeIcon icon={faFacebook}/>
        </a>
        <a href="https://www.instagram.com/accounts/onetap/?next=%2F" target="_blank">
            <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <a href="x.com" target="_blank">
            <FontAwesomeIcon icon={faXTwitter}/>
        </a>
        <a href="discord.com" target="_blank">
            <FontAwesomeIcon icon={faDiscord}/>
        </a>
        </div>
    </div>


export default Footer