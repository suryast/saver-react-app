import React from "react";
import { formatPrice } from "../helpers/formatPrice";
import "../styles/coupon-container.css";

class Coupon extends React.Component {
  render() {
    return (
      <>
        <div>
          <br />
          <h2>{formatPrice(this.props.value)}</h2>
        </div>
      </>
    );
  }
}

export default Coupon;
