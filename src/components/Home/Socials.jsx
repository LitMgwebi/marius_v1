import { useTranslation } from "react-i18next";

function Socials() {
    const { t } = useTranslation();
    return (
        <div id="socials">
            <h1>{t("socials")}</h1>
        </div>
    )
}

export default Socials;