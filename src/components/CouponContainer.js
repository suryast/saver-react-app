import React from "react";
import Coupon from "../components/Coupon";
import { divvy } from "../helpers/divvy";
import { formatPrice } from "../helpers/formatPrice";
import "../styles/coupon-container.css";

class CouponContainer extends React.Component {
  drawBoxes = (target, duration, minimum) => {
    let coupons = [];
    let d = divvy(target, duration, minimum);
    for (var i = 0; i < duration; i++) {
      coupons.push(<Coupon key={i} value={d[i]} />);
    }
    return coupons;
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="grid">
            {this.drawBoxes(
              this.props.target,
              this.props.duration,
              this.props.minimum
            )}
          </div>
        </div>
        <h1>Target {formatPrice(parseInt(this.props.target))}</h1>
      </>
    );
  }
}

export default CouponContainer;
