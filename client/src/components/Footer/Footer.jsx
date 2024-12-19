import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2-removebg-preview.png" alt="" width={120} />
          <span className="secondaryText">
          Tầm nhìn của chúng tôi là làm <br />
          Cho tất cả mọi người có nơi tốt nhất để sống.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Thông tin</span>
          <span className="secondaryText">Công Ty TNHH 1 Thành Viên HQT</span>
          <div className="flexCenter f-menu">
            <span>Về chúng tôi</span>
            <span>Liên Hệ</span>
            <span>Dịch vụ</span>
            <span>Sản phẩm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
