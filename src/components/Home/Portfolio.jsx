import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import dark1 from "../../media/PortfolioThumbnails/1.png";
import dark2 from "../../media/PortfolioThumbnails/2.png";
import dark3 from "../../media/PortfolioThumbnails/3.png";
import dark4 from "../../media/PortfolioThumbnails/4.png";
import light1 from "../../media/PortfolioThumbnails/5.png";
import light2 from "../../media/PortfolioThumbnails/6.png";
import light3 from "../../media/PortfolioThumbnails/7.png";
import light4 from "../../media/PortfolioThumbnails/8.png";

function Portfolio({ theme }) {
    const { t } = useTranslation();
    return (
        <div id="portfolio">
            <h1>{t("portfolio")}</h1>
            <div className="swiper-slide">
                <Swiper
                    effect={"cards"}
                    pagination={true}
                    autoplay={{
                        delay: 1750,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    modules={[EffectCards, Pagination, Autoplay]}
                    className="swiper"
                >
                    <SwiperSlide>
                        <div className="slide">
                            {theme === "dark" ? <img src={dark1} alt="theme" />
                                : <img src={light1} alt="theme" />}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide">
                            {theme === "dark" ? <img src={dark2}alt="theme" />
                                : <img src={light2} alt="theme" />}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide">
                            {theme === "dark" ? <img src={dark3} alt="theme" />
                                : <img src={light3} alt="theme" />}
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide">
                            {theme === "dark" ? <img src={dark4} alt="theme" />
                                : <img src={light4} alt="theme" />}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide">
                        <Link to="/portfolio">
                                See More
                        </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Portfolio;