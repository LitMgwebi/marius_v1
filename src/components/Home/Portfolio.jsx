import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom"
import "swiper/css";
import "swiper/css/effect-coverflow";

function Portfolio() {
    return (
        <div id="portfolio">
            <h1>Portfolio</h1>
            <Swiper
                modules={[EffectCoverflow]}
                class="swiper"
            >
                <SwiperSlide>This is slide 1</SwiperSlide>
                <SwiperSlide>This is slide 2</SwiperSlide>
                <SwiperSlide>This is slide 3</SwiperSlide>
                <SwiperSlide><Link to="/portfolio">See More</Link></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;