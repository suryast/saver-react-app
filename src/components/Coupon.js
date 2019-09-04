import React from "react";
import "../styles/coupon-container.css";

class Coupon extends React.Component {
  render() {
    return (
      <>
        <div>Week {this.props.week}</div>
      </>
    );
  }
}

export default Coupon;
