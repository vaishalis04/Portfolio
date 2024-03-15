import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";
import profile4 from "../../assets/profile4.jpg";

const Testimonials = () => {
  const clients = [
    {
      img: profile1,
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo, aut iusto dicta ducimus in dolorem magni! Rerum atque, labore aliquam debitis modi a vero numquam quisquam repellat? Quis porro quod quia exercitationem, dolor, eveniet cumque perferendis provident eos cupiditate explicabo, tempore harum excepturi aspernatur unde deleniti vero vel laboriosam.",
    },
    {
      img: profile2,
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo, aut iusto dicta ducimus in dolorem magni! Rerum atque, labore aliquam debitis modi a vero numquam quisquam repellat? Quis porro quod quia exercitationem, dolor, eveniet cumque perferendis provident eos cupiditate explicabo, tempore harum excepturi aspernatur unde deleniti vero vel laboriosam.",
    },
    {
      img: profile3,
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrnemo, aut iusto dicta ducimus in dolorem magni! Rerum atque, labore aliquam debitis modi a vero numquam quisquam repellat? Quis porro quod quia exercitationem, dolor, eveniet cumque perferendis provident eos cupiditate explicabo, tempore harum excepturi aspernatur unde deleniti vero vel laboriosam.",
    },
    {
      img: profile4,
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo, aut iusto dicta ducimus in dolorem magni! Rerum atque, labore aliquam debitis modi a vero numquam quisquam repellat? Quis porro quod quia exercitationem, dolor, eveniet cumque perferendis provident eos cupiditate explicabo, tempore harum excepturi aspernatur unde deleniti vero vel laboriosam.",
    },
  ];

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "var(--skyblue)" }}></div>
      </div>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonials">
              <img src={client.img} alt="" />
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
