import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import SwiperCore, { Navigation, Pagination } from 'swiper';
import Sidebar from '../../assets/sidebar.png';
import Ecommerce from '../../assets/ecommerce.png';
import HOC from '../../assets/hoc.png';
import Music from '../../assets/musicapp.png';

// SwiperCore.use([Navigation, Pagination]);

const Portfolio = () => {
  return (
    <div className="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-Slider'
        // navigation
        // pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Music} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
