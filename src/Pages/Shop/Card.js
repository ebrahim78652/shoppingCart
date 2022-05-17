import React from "react";

export const Card = () => {
  return (
    <>
      <div className="card">
        <img src="/images/image1.webp" alt="" />
        <div className="description">
          <p className="name">Pink flower</p>
          <p className="price">100$</p>
        </div>
        <div className="buttons">
          <div className="decrement">-</div>
          <div className="amount">0</div>
          <div className="increment">+</div>
        </div>
      </div>
    </>
  );
};
