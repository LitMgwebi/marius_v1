import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom"
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Portfolio() {
    return (
        <div id="portfolio">
            <h1>Portfolio</h1>
            <div className="buttonGroup">
                <button><Link to="/portfolio">View Archive</Link></button>
            </div>
            <div className="swiper-slide">
                <Swiper
                    effect={"cards"}
                    pagination={{
                        type: 'fraction'
                    }}
                    navigation={true}
                    modules={[EffectCards, Pagination, Navigation]}
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