import React from "react";
import { formatPrice } from "../helpers/formatPrice";
import "../styles/coupon-container.css";

class Coupon extends React.Component {
  render() {
    const styles = {
      animation: "0.3s slideIn backwards",
      animationDelay: this.props.delay
    };
    return (
      <>
        <div style={styles}>
          <br />
          <h2>{formatPrice(this.props.value)}</h2>
        </div>
      </>
    );
  }
}

export default Coupon;
