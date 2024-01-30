import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <div className="mb-12">
      <SectionTitle
        subHeading="---From 11:00am to 10:00pm---"
        heading="ORDER ONLINE"
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide one" />
          <h3 className="text-3xl text-white text-semibold text-center -mt-12">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide one" />
          <h3 className="text-3xl text-white text-semibold text-center -mt-12">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide one" />
          <h3 className="text-3xl text-white text-semibold text-center -mt-12">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide one" />
          <h3 className="text-3xl text-white text-semibold text-center -mt-12">
            Desert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide one" />
          <h3 className="text-3xl text-white text-semibold text-center -mt-12">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
