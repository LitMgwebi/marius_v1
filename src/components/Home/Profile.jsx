/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import { useTranslation } from "react-i18next";

function Profile() {
    const { t } = useTranslation();
    return (
        <div id="profile">
            <section className="image">
                <img
                    src={require("../../media/Marius.jpg")}
                    title="Marius Edel"
                />
            </section>
            <section className="writing">
                <h1 className="lower">{t("intro")}</h1>
                <hr />
                    <h1 className="upper">Marius Edel</h1>
            </section>
        </div>
    );
}

export default Profile;