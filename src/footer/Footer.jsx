import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="inner">
      <div className="footer-container">
        <div className="footer-title">(주)코코드림랜드</div>
        <div className="footer-info">
          <div className="footer-details">
            <div className="footer-detail">
              주소 : 용인시 용구대로 2787번길 5
            </div>
            <div className="footer-detail">전화번호 : +82-10-7701-3270</div>
            <div className="footer-detail">이메일 : cystmax@gmail.com</div>
          </div>
          <div className="footer-details">
            <div className="footer-detail">이름 : 최용석</div>
            <div className="footer-detail">프로덕트명 : 하이 코코</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
