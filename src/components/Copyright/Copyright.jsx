
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CopyRight() {
    const { t } = useTranslation();
    return (
        <div id="copyright">
            <h1>{t("legalnotice")}</h1>
            <div className="buttonGroup">
                <button>
                    <Link to="/">{t("back")}</Link>
                </button>
            </div>
            <article>
                <section>
                    <div className="vat">
                    <h4>Marius Edel<br />
                        Bismarckstr 35<br />
                        89129 Langenau<br />
                        Germany<br />
                        +49 176 42005261<br />
                        Marius.edel@gmx.com<br />
                        Represented by:<br />
                        Marius Edel</h4>
                    <p>VAT ID: [VAT Number, if applicable]
                        <br />
                        Regulatory Authority: [Name of relevant regulatory authority, if applicable]
                        <br />
                        Online Dispute Resolution: [Link to the Online Dispute Resolution platform, if applicable]
                        <br />
                        This Legal Notice complies with the German laws under § 5 TMG and § 55 RStV.</p>
                    </div>
                    <br />
                    <h4>Liability for Content</h4>
                    <p>The contents of our website have been created with the greatest possible care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to Section 7, paragraph 1 of the TMG (Telemediengesetz - German Telemedia Act), we as service providers are liable for our content on these pages by general laws. However, according to Sections 8 to 10 of the TMG, we service providers are not obliged to monitor external information transmitted or stored or investigate circumstances pointing to illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, a liability in this regard is only possible from the moment of knowledge of a specific infringement. Upon notification of such violations, we will remove the content immediately.</p>
                </section>
                <section>
                    <h4>Liability for Links</h4>
                    <p>Our website contains links to external websites, over whose contents we have no control. Therefore, we cannot accept any liability for these external contents. The respective provider or operator of the websites is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not identified at the time of linking. However, permanent monitoring of the contents of the linked pages is not reasonable without specific indications of a violation. Upon notification of violations, we will remove such links immediately.</p>
                    <h4>Copyright</h4>
                    <p>The contents and works on these pages created by the site operator are subject to German copyright law. The duplication, processing, distribution, and any kind of utilization outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use. In so far as the contents on this site were not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you become aware of a copyright infringement, please inform us accordingly. Upon notification of violations, we will remove such contents immediately.</p>
                </section>
            </article>
        </div>
    );
}

export default CopyRight