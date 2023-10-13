import { useTranslation } from "react-i18next";
import monitor from "../../media/monitor.svg";
import idea from "../../media/idea.svg";

function Service() {
    const { t } = useTranslation();

    return (
        <div id="service">
            <h1>{t("services")}</h1>
            <div className='idea'>
                <section className="development">
                    <div className="ideaImage">
                        <img
                            src={idea}
                            alt="Idea Development"
                            className="serviceLogo"
                        />
                    </div>
                    <h2>{t("development")}</h2>
                    <h3>
                        {t("developmentParagraph")}
                    </h3>
                </section>
                <section className="execution">
                    <div className="ideaImage">
                        <img
                            src={monitor}
                            alt="Idea Execution"
                            className="serviceLogo"
                        />
                    </div>
                    <h2>{t("execution")}</h2>
                    <h3>
                        {t("executionParagraph")}
                    </h3>
                </section>
            </div>

            <div className="buttonGroup">
                <button>{ t("viewMore")}</button>
            </div>
        </div>
    )
}

export default Service;