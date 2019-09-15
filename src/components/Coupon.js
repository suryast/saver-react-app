import React, { useState } from "react";
import { formatPrice } from "../helpers/formatPrice";
import "../styles/coupon-container.css";

export default function Coupon(props) {
  const [clicked, setClicked] = useState(props.clicked);

  function handleClick() {
    setClicked(!clicked);
  }

  const couponAnimation = {
    animation: "0.1s slideIn backwards",
    animationDelay: props.delay
  };

  const lineThroughClicked = {
    textDecoration: "line-through red"
  };

  const lineThroughNone = {};

  let clickedState = clicked ? lineThroughClicked : lineThroughNone;

  return (
    <>
      <div style={couponAnimation}>
        <br />
        <h2>
          <span style={clickedState} onClick={handleClick}>
            {formatPrice(props.value)}
          </span>
        </h2>
      </div>
    </>
  );
}
