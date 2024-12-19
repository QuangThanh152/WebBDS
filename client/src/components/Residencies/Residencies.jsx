import React from "react";
// import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
const Residencies = () => {
  const {data, isError, isLoading} = useProperties();

  if(isError) {
    return (
      <div className='wrapper'>
        <span>Lỗi khi lấy dữ liệu từ data</span>
      </div>
    )
  }

  if(isLoading) {
    return (
      <div className='wrapper flexCenter' style={{height:"600vh"}}>
        <PuffLoader
          size={80} // Thay thế cho `radius` và điều chỉnh kích thước loader
          color='#4066ff'
          loading={true}
        />
      </div>
    )
  }

  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Giá tốt nhất</span>
          <span className="primaryText">Nơi cư trú phổ biến</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {data.slice(0, 10).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
