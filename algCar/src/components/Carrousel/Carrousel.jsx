import "./Carrousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import slide1 from '../../assets/slide1.svg'
import slide2 from '../../assets/slide2.svg'

import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const Carrousel = () => {
    const [slidesPerView, setSlidePerView] = useState(1);

    const data = [
        { id: "1", image: slide1 },
        { id: "2", image: slide2 },
    ];

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 720) {
                setSlidePerView(1);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="containerCarrousel">
            <Swiper
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
                navigation
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            className="slide-item"
                            src={item.image}
                            alt="Slider"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carrousel;
