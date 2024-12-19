import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Bắt đầu với QtHousez</span>
          <span className="secondaryText">
            Theo dõi và liên hệ giá siêu hấp dẫn từ chúng tôi.
            <br />
            Tìm nơi cư trú của bạn.
          </span>
          <button className="button" href>
            <a href="mailto:zainkeepscode@gmail.com">Bắt đầu</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
