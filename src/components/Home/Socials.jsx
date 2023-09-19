import { useTranslation } from "react-i18next";
import etsyDark from "../../media/PortfolioIcons/Etsy-DM.png";
import etsyLight from "../../media/PortfolioIcons/Etsy-LM.png";
import instaDark from "../../media/PortfolioIcons/insta-DM.png";
import instaLight from "../../media/PortfolioIcons/Insta-LM.png";
import linkedinDark from "../../media/PortfolioIcons/Linkedin-BM.png";
import linkedinLight from "../../media/PortfolioIcons/Linkedin-LM.png";
import { Link } from "react-router-dom";

function Socials({ theme }) {
    const { t } = useTranslation();
    return (
        <div id="socials">
            <h1>{t("socials")}</h1>
            <section>
                <div className="socialLink">
                    <Link>
                        {theme === "dark" ? <img src={etsyDark} onClick={theme} alt="theme" />
                            : <img src={etsyLight} onClick={theme} alt="theme" />}
                    </Link>
                </div>

                <div className="socialLink">
                    <Link>
                        {theme === "dark" ? <img src={instaDark} onClick={theme} alt="theme" />
                            : <img src={instaLight} onClick={theme} alt="theme" />}
                    </Link>
                </div>

                <div className="socialLink">
                    <Link href="">
                        {theme === "dark" ?
                            <img src={linkedinDark} onClick={theme} alt="theme" />
                            : <img src={linkedinLight} onClick={theme} alt="theme" />}
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Socials;