import { useTranslation } from "react-i18next";
import etsyDark from "../../media/PortfolioIcons/Etsy-DM.png";
import etsyLight from "../../media/PortfolioIcons/Etsy-LM.png";
import instaDark from "../../media/PortfolioIcons/insta-DM.png";
import instaLight from "../../media/PortfolioIcons/Insta-LM.png";
import linkedinDark from "../../media/PortfolioIcons/Linkedin-BM.png";
import linkedinLight from "../../media/PortfolioIcons/Linkedin-LM.png";

function Socials({ theme }) {
    const { t } = useTranslation();
    return (
        <div id="socials">
            <div>            
                <h1>{t("socials")}</h1>
            </div>
            <section>
                <div className="socialLink">
                    <a href="https://www.etsy.com/de-en/shop/ExcelEmpire" target="_blank" rel="noopener noreferrer">
                        {theme === "dark" ? <img src={etsyDark} alt="etsyDark" />
                            : <img src={etsyLight} alt="etsyLight" />}
                    </a>
                </div>

                <div className="socialLink">
                    <a href="https://instagram.com/ma.r.i.u.s?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                        {theme === "dark" ? <img src={instaDark} alt="instaDark" />
                            : <img src={instaLight} alt="instaLight" />}
                    </a>
                </div>

                <div className="socialLink">
                    <a href="https://www.linkedin.com/in/marius-edel-4a6955227/" target="_blank" rel="noopener noreferrer">
                        {theme === "dark" ?
                            <img src={linkedinDark} alt="linkedinDark" />
                            : <img src={linkedinLight} alt="linkedinLight" />}
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Socials;