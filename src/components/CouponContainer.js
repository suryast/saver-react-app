import React from "react";
import Coupon from "../components/Coupon";
import { divvy } from "../helpers/divvy";
import { formatPrice } from "../helpers/formatPrice";
import "../styles/coupon-container.css";

export default class CouponContainer extends React.Component {
  getNumbersForCoupons = (target, duration, minimum) => {
    let saverMatrix = divvy(target, duration, minimum);
    return saverMatrix;
  };

  render() {
    const saverMatrix = this.getNumbersForCoupons(
      this.props.target,
      this.props.duration,
      this.props.minimum
    );

    const target = saverMatrix.reduce(function(a, b) {
      return a + b;
    });

    const coupons = saverMatrix.map((val, index) => {
      return <Coupon key={index} value={val} delay={`${index * 0.015}s`} />;
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
}
