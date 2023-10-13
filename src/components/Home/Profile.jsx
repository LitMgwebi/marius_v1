import { useTranslation } from "react-i18next";
import marius from "../../media/Marius.jpg";
import { motion as m } from "framer-motion";

function Profile() {
    const { t } = useTranslation();
    return (
        <div id="profile"
        >
            <section className="image">
                <img
                    src={marius}
                    title="Marius Edel"
                    alt="Marius Edel"
                />
            </section>
            <m.section
                className="writing"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 2, ease: 'easeOut' }}
                exit={{ opacity: 0 }}
            >
                <h1 className="lower">{t("intro")}</h1>
                <hr />
                <h1 className="upper">Marius Edel</h1>
            </m.section>
        </div>
    );
}

export default Profile;