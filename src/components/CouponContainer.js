import React from "react";
import Coupon from "../components/Coupon";
import "../styles/coupon-container.css";

class CouponContainer extends React.Component {
  drawBoxes = boxes => {
    let coupons = [];
    for (var i = 0; i < boxes; i++) {
      coupons.push(<Coupon week={i + 1} key={i} />);
    }
    return coupons;
  };

  render() {
    var min = 12;
    var max = 52;
    var request = Math.floor(Math.random() * (+max - +min)) + +min;
    return (
      <>
        <div className="container">
          <div className="grid">{this.drawBoxes(request)}</div>
        </div>
      </>
    );
  }
}

export default CouponContainer;
