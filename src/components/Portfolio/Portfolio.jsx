import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from "swiper/modules";
import "swiper/css"
import "swiper/css/thumbs"

function Portfolio() {
    return (
        <div id="portfolio">
            <Swiper
                modules={[Thumbs]}
            >
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;