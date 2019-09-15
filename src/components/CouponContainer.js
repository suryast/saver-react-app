import React from "react";
import Coupon from "../components/Coupon";
import { formatPrice } from "../helpers/formatPrice";
import "../styles/coupon-container.css";

export default function CouponContainer(props) {
  const target = props.saverMatrix.reduce(function(a, b) {
    return a + b;
  });

  const coupons = props.saverMatrix.map((val, index) => {
    return (
      <Coupon
        key={index}
        value={val}
        delay={`${index * 0.015}s`}
        clicked={props.clicked}
        handleClick={props.handleClick}
      />
    );
  });

  return (
    <>
      <div className="container">
        <div className="grid">{coupons}</div>
      </div>
      <br />
      <h2>Exact Sum = {formatPrice(parseInt(target))}</h2>
    </>
  );
}
