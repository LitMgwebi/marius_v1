import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from "swiper/modules";
import { Link } from "react-router-dom"
import "swiper/css";
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { useTranslation } from "react-i18next";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

function Items() {
    const { t } = useTranslation();

    const product = {
        description: "First discription",
        price: 20
    }
    return (
        <div id="items">
            <h1>{t("portfolio")}</h1>
            <div className="buttonGroup">
                <button><Link to="/">{ t("back")}</Link></button>
            </div>
            <div className="swiper-slide">
                <Swiper
                    slidePerView={3}
                    grid={{ rows: 2, }}
                    spacebetween={30}
                    pagination={{ clickable: true, }}
                    modules={[Grid, Pagination]}
                    className="itemSwiper"
                >
                    <SwiperSlide className="slide">
                        <div className="paypal-button-container">
                            This is slide 1
                            Dont know what else to say
                            <PaypalCheckoutButton product={product} />
                            
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
                </Swiper>
            </div>
        </div>
    )
}

export default Items