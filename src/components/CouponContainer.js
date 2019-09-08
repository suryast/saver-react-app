import React from "react";
import Coupon from "../components/Coupon";
import { divvy } from "../helpers/divvy";
import { formatPrice } from "../helpers/formatPrice";
import "../styles/coupon-container.css";

class CouponContainer extends React.Component {
  drawBoxes = (target, duration, minimum) => {
    let coupons = [];
    let d = divvy(target, duration, minimum);
    return d;
  };

  render() {
    let d = this.drawBoxes(
      this.props.target,
      this.props.duration,
      this.props.minimum
    );

    const coupons = d.map((val, index) => {
      return <Coupon key={index} value={val} delay={`${index * 0.02}s`} />;
    });

    return (
      <>
        <div className="container">
          <div className="grid">{coupons}</div>
        </div>
        <br />
        <h2>Goal {formatPrice(parseInt(this.props.target))}</h2>
      </>
    );
  }
}

export default CouponContainer;
