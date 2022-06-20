import React from "react";
import "./Card.css";
function Card() {
  return (
    <div className="card-container">
      <div className="card-image-container"></div>
      <div className="card-info-container">
        <div className="card-info-title">유럽여행 5박 6일</div>
        <div className="card-info-detail">꿈꾸는 여행을 떠나봐요</div>
        <div className="card-info-price">150$</div>
        <div className="card-info-btns">
          <button className="card-btn">BUY NOW!</button>
          <button className="card-btn">+ADD CART</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
