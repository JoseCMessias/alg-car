import './Carrousel.css';
import { Swiper, SwiperSlide} from 'swiper/react';
import { useState, useEffect } from 'react';

import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'

const Carrousel = () => {
    const [slidesPerView, setSlidePerView] = useState(1)

    const data = [
        { id: '1', image: './src/image/slide1.svg'},
        { id: '2', image: './src/image/slide2.svg'},
    ]

    useEffect(() =>{

        function handleResize(){
            if(window.innerWidth < 720){
                setSlidePerView(1);
            }
            // else{
            //     setSlidePerView(2);
            // }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    return (
        <div className='containerCarrousel'>

            <Swiper
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
                navigation
            >
                {data.map( (item) => (
                    <SwiperSlide key={item.id}>
                        <img 
                            src={item.image} 
                            alt="Slider"
                            className='slide-item'  
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carrousel;