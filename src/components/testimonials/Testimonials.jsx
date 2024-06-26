import USER_IMG from "../../assets/user-icon.jpg";

import "./testimonials.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const data = [
  {
    avatar: USER_IMG,
    name: "Olivia Carter",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, neque? Corrupti dolorem tempore eaque unde repellendus magni ipsam consequatur laboriosam? Magni eum assumenda alias rem suscipi recusandae labore accusamus nisi.",
  },
  {
    avatar: USER_IMG,
    name: "Liam Johnson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, neque? Corrupti dolorem tempore eaque unde repellendus magni ipsam consequatur laboriosam? Magni eum assumenda alias rem suscipi recusandae labore accusamus nisi.",
  },
  {
    avatar: USER_IMG,
    name: "Jackson Lee",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, neque? Corrupti dolorem tempore eaque unde repellendus magni ipsam consequatur laboriosam? Magni eum assumenda alias rem suscipi recusandae labore accusamus nisi.",
  },
  {
    avatar: USER_IMG,
    name: "Isabella Harris",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, neque? Corrupti dolorem tempore eaque unde repellendus magni ipsam consequatur laboriosam? Magni eum assumenda alias rem suscipi recusandae labore accusamus nisi.",
  },
  {
    avatar: USER_IMG,
    name: "Emma Davis",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, neque? Corrupti dolorem tempore eaque unde repellendus magni ipsam consequatur laboriosam? Magni eum assumenda alias rem suscipi recusandae labore accusamus nisi.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="colored-sec">
      <div className="container">
        <div className="main-title text-center mb-5">
          <h5>Review from clients</h5>
          <h2>Testimonials</h2>
        </div>

        <div className="testimonials__container">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
