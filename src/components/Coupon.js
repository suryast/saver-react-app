import React from "react";
import { formatPrice } from "../helpers/formatPrice";
import "../styles/coupon-container.css";

class Coupon extends React.Component {
  render() {
    var min = 120;
    var max = 10000;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return (
      <>
        <div>
          Week {this.props.week}
          <h2>{formatPrice(random)}</h2>
        </div>
      </>
    );
  }
}

export default Coupon;
