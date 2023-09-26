import { Link } from "react-router-dom";
import {NavHashLink} from "react-router-hash-link"
import moon from "../../media/moon.svg";
import sun from "../../media/sun.svg";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const LANGUAGES = [
    { label: "English", code: "en" },
    { label: "German", code: "gmc" },
];

function Header({ theme, imgIcon }) {
    const { i18n, t } = useTranslation();
    const navRef = useRef();

    const onChangeLang = (e) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <div className="siteLinks">
                <Link to="/"><h4>Marius Edel</h4></Link>

                <div className="headerButton">
                    {imgIcon === "dark" ? <img src={sun} onClick={theme} className="headerLogo" alt="theme" />
                        : <img src={moon} onClick={theme} className="headerLogo" alt="theme" />}
                </div>
                <div className="langChange">
                    <select defaultValue={i18n.language} onChange={onChangeLang}>
                        {
                            LANGUAGES.map(({ code, label }) => (
                                <option key={code} value={code}>
                                    {label}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="topNav">
                <nav ref={navRef} className="nav">
                    <NavHashLink to="/#profile" onClick={showNavBar}>{t("profile")}</NavHashLink>
                    <NavHashLink to="/#aboutMe" onClick={showNavBar}>{t("aboutMe")}</NavHashLink>
                    <NavHashLink to="/#portfolio" onClick={showNavBar}>{t("portfolio")}</NavHashLink>
                    <NavHashLink to="/#service" onClick={showNavBar}>{t("services")}</NavHashLink>
                    <NavHashLink to="/#socials" onClick={showNavBar}>{t("socials")}</NavHashLink>
                    <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavBar}>
                    <FaBars />
                </button>
            </div>
        </header>
    );
}

export default Header;