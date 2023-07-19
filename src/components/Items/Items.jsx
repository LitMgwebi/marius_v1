import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Link } from "react-router-dom"
import "swiper/css";
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination';
function Items() {
    return (
        <div id="items">
            <h1>Portfolio</h1>
            <div className="buttonGroup">
                <button><Link to="/">Back</Link></button>
            </div>
            <div className="swiper-slide">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidePerView={'auto'}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="itemSwiper"
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
                </Swiper>
            </div>
        </div>
    )
}

export default Items