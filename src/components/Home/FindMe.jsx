import { useTranslation } from "react-i18next";

function FindMe() {
    const { t } = useTranslation();
    return (
        <div id="findMe">
            <h1>{t("findMe")}</h1>
        </div>
    )
}

export default FindMe;