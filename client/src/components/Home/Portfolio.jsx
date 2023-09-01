import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Portfolio() {
    const { t } = useTranslation();
    return (
        <div id="portfolio">
            <h1>{ t("portfolio")}</h1>
            <div className="swiper-slide">
                <Swiper
                    effect={"cards"}
                    pagination={true}
                    autoplay={{
                        delay: 1750,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true }
                    modules={[EffectCards, Pagination, Autoplay]}
                    className="swiper"
                >
                    <SwiperSlide className="slide">
                        <div>
                            This is slide 1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <div>
                            This is slide 2
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <div>
                            This is slide 3
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <Link to="/portfolio">
                            <div>
                                See More
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Portfolio;