import { Link } from "react-router-dom";
import moon from "../../media/moon.svg";
import sun from "../../media/sun.svg";

function Header({ theme, imgIcon }) {
    return (
        <header>
            <div className="siteLinks">
                <h4>Marius Edel</h4>
                <div className="headerButton">
                    {imgIcon === "dark" ? <img src={sun} onClick={theme} className="headerLogo" alt="theme" />
                        : <img src={moon} onClick={theme} className="headerLogo" alt="theme" />}
                </div>
            </div>
            <section className="siteLinks">
                <a href="#profile">Profile</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#service">Services</a>
                <a href="#findMe">Find Me</a>
            </section>
        </header>
    );
}

export default Header;