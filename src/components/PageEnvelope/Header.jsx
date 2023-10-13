import moon from "../../media/moon.svg";
import sun from "../../media/sun.svg";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import {motion as m} from "framer-motion";

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
        <m.header
        initial="hidden"
        >
            <div className="siteLinks">
                <h4>Marius Edel</h4>

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
                    <a href="/#profile" onClick={showNavBar}>{t("profile")}</a>
                    <a href="/#portfolio" onClick={showNavBar}>{t("portfolio")}</a>
                    <a href="/#service" onClick={showNavBar}>{t("services")}</a>
                    <a href="/#socials" onClick={showNavBar}>{t("socials")}</a>
                    <a href="/about" onClick={showNavBar}>{t("aboutMe")}</a>
                    <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavBar}>
                    <FaBars />
                </button>
            </div>
        </m.header>
    );
}

export default Header;