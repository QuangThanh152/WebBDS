import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import { RiChatSmile3Line } from "react-icons/ri";
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Liên hệ với chúng tôi</span>
          <span className="primaryText">Dễ dàng liên hệ với chúng tôi</span>
          <span className="secondaryText">
          Chúng tôi luôn sẵn sàng giúp đỡ bạn bằng những dịch vụ tốt nhất.
          Tin rằng một không gian tốt để sống có thể làm cho cuộc sống của bạn tốt hơn{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Gọi</span>
                    <span className="secondaryText">0987 65 4321</span>
                  </div>
                </div>
                <div className="flexCenter button">Gọi ngay</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">0987 65 4321</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat ngay</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <RiChatSmile3Line size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">0987 65 4321</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call ngay</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter  size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Nhắn tin</span>
                    <span className="secondaryText">0987 65 4321</span>
                  </div>
                </div>
                <div className="flexCenter button">Nhắn tin ngay</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./r3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
