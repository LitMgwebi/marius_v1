import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from "swiper/modules";
import "swiper/css"
import "swiper/css/thumbs"

function Portfolio() {
    return (
        <div id="portfolio">
            <h2>Portfolio</h2>
            <Swiper
                modules={[Thumbs]}
                class="swiper"
            >
                <SwiperSlide>This is slide 1</SwiperSlide>
                <SwiperSlide>This is slide 2</SwiperSlide>
                <SwiperSlide>This is slide 3</SwiperSlide>
                <SwiperSlide>This is slide 4</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;