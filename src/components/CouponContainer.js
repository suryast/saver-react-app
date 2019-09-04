import React from "react";
import Coupon from "../components/Coupon";
import "../styles/coupon-container.css";

class CouponContainer extends React.Component {
  render() {
    return (
      <>
        <div class="container">
          <div class="grid">
            <Coupon week="1" />
            <Coupon week="2" />
            <Coupon week="3" />
            <Coupon week="4" />
            <Coupon week="1" />
            <Coupon week="2" />
            <Coupon week="3" />
            <Coupon week="4" />
            <Coupon week="1" />
            <Coupon week="2" />
            <Coupon week="3" />
            <Coupon week="4" />
            <Coupon week="1" />
            <Coupon week="2" />
            <Coupon week="3" />
            <Coupon week="4" />
            <Coupon week="1" />
            <Coupon week="2" />
            <Coupon week="3" />
            <Coupon week="4" />
            <Coupon week="1" />
            <Coupon week="2" />
            <Coupon week="3" />
            <Coupon week="4" />
            <Coupon week="1" />
            <Coupon week="2" />
            <Coupon week="3" />
            <Coupon week="4" />
          </div>
        </div>
      </>
    );
  }
}

export default CouponContainer;
