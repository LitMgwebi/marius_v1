import { useTranslation } from "react-i18next";
function AboutMe() {
    const { t } = useTranslation();
    return (
        <div id="aboutMe">
            <h1>{ t("aboutMe")}</h1>
            <section className="aboutMeWriting">
                <h3 ignoreAccents={false}>
                    { t("aboutMeParagraph")}
                </h3>
            </section>
        </div>
    );
}

export default AboutMe;