import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useTranslation } from "react-i18next";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dark1 from "../../media/PortfolioThumbnails/1.png";
import dark2 from "../../media/PortfolioThumbnails/2.png";
import dark3 from "../../media/PortfolioThumbnails/3.png";
import dark4 from "../../media/PortfolioThumbnails/4.png";
import light1 from "../../media/PortfolioThumbnails/5.png";
import light2 from "../../media/PortfolioThumbnails/6.png";
import light3 from "../../media/PortfolioThumbnails/7.png";
import light4 from "../../media/PortfolioThumbnails/8.png";
import { motion, useScroll } from "framer-motion";

function Portfolio({ theme }) {
    const { t } = useTranslation();
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            id="portfolio"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ scaleX: scrollYProgress }}
        >
            <h1>{t("portfolio")}</h1>
            <div className="swiper-slide">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="swiper"
                >
                    <SwiperSlide>
                        <div className="slide">
                            <section className='slideContent'>
                                Idea execution is where i will do the things that need to be done
                            </section>
                            <div className="slideImage">
                                {theme === "dark" ? <img src={dark1} alt="theme" />
                                    : <img src={light1} alt="theme" />}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide">
                            <section className='slideContent'>
                                Idea execution is where i will do the things that need to be done
                            </section>
                            <div className="slideImage">
                                {theme === "dark" ? <img src={dark2} alt="theme" />
                                    : <img src={light2} alt="theme" />}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide">
                            <section className='slideContent'>
                                Idea execution is where i will do the things that need to be done
                            </section>
                            <div className="slideImage">
                                {theme === "dark" ? <img src={dark3} alt="theme" />
                                    : <img src={light3} alt="theme" />}
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide">
                            <section className='slideContent'>
                                Idea execution is where i will do the things that need to be done
                            </section>
                            <div className="slideImage">
                                {theme === "dark" ? <img src={dark4} alt="theme" />
                                    : <img src={light4} alt="theme" />}
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </motion.div>
    )
}

export default Portfolio;