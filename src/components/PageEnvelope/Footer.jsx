import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <div>
                <button>
                <a href="https://lithimgwebi.vercel.app/" target="_blank" rel="noopener noreferrer">
                    {t("poweredBy")}
                    </a>
                </button>
            </div>
            <div>
                <p>2023.07</p>
            </div>
            <div>
                <button>
                        Copyright
                </button>
            </div>
        </footer>
    )
}

export default Footer;