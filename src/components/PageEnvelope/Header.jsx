import { Link } from "react-router-dom";
import {NavHashLink} from "react-router-hash-link"
import moon from "../../media/moon.svg";
import sun from "../../media/sun.svg";

function Header({ theme, imgIcon }) {
    return (
        <header>
            <div className="siteLinks">
                <Link to="/"><h4>Marius Edel</h4></Link>
                <div className="headerButton">
                    {imgIcon === "dark" ? <img src={sun} onClick={theme} className="headerLogo" alt="theme" />
                        : <img src={moon} onClick={theme} className="headerLogo" alt="theme" />}
                </div>
            </div>
            <section className="siteLinks">
                <NavHashLink to="/#profile">Profile</NavHashLink>
                <NavHashLink to="/#aboutMe">About Me</NavHashLink>
                <NavHashLink to="/#portfolio">Portfolio</NavHashLink>
                <NavHashLink to="/#service">Services</NavHashLink>
                <NavHashLink to="/#findMe">Find Me</NavHashLink>
            </section>
        </header>
    );
}

export default Header;