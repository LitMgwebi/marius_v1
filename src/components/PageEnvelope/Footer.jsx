import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <div><button>
                <Link to="https://lithimgwebi.vercel.app/" target="_blank" rel="noopener noreferrer">{t("poweredBy")}</Link></button>
            </div>
            <div>
                <p>2023.07</p>
            </div>
            <div>
                <button>
                    <Link to="/copyright">
                        Copyright
                    </Link>
                </button>
            </div>
        </footer>
    )
}

export default Footer;