import { Link } from "react-router-dom";
import {NavHashLink} from "react-router-hash-link"
import moon from "../../media/moon.svg";
import sun from "../../media/sun.svg";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
    { label: "English", code: "en" },
    { label: "German", code: "gmc" },
];
const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

function Header({ theme, imgIcon }) {
    const { i18n, t } = useTranslation();

    const onChangeLang = (e) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
        <header>
            <div className="siteLinks">
                <Link to="/"><h4>Marius Edel</h4></Link>
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
                <div className="headerButton">
                    {imgIcon === "dark" ? <img src={sun} onClick={theme} className="headerLogo" alt="theme" />
                        : <img src={moon} onClick={theme} className="headerLogo" alt="theme" />}
                </div>
            </div>
            
            <nav className="topNav">
                <NavHashLink to="/#profile">{t("profile")}</NavHashLink>
                <NavHashLink to="/#aboutMe">{t("aboutMe")}</NavHashLink>
                <NavHashLink to="/#portfolio">{t("portfolio")}</NavHashLink>
                <NavHashLink to="/#service">{t("services")}</NavHashLink>
                <NavHashLink to="/#findMe">{t("findMe")}</NavHashLink>
            </nav>
        </header>
    );
}

export default Header;