import { Rating } from "@smastrom/react-rating";
import { SwiperSlide } from "swiper/react";

const Reviews = ({ review }) => {
  const { name, details, rating } = review;
  console.log({ name, details, rating });
  return (
    <SwiperSlide>
      <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
    </SwiperSlide>
  );
};

export default Reviews;
