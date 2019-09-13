import React from "react";
import { formatPrice } from "../helpers/formatPrice";
import "../styles/coupon-container.css";

export default class Coupon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: this.props.clicked
    };
  }

  componentWillReceiveProps() {
    this.setState({ clicked: this.props.clicked });
  }

  handleChange = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const couponAnimation = {
      animation: "0.1s slideIn backwards",
      animationDelay: this.props.delay
    };

    const lineThroughClicked = {
      textDecoration: "line-through red"
    };

    const lineThroughNone = {};

    let clickedState = this.state.clicked
      ? lineThroughClicked
      : lineThroughNone;

    return (
      <>
        <div style={couponAnimation}>
          <br />
          <h2>
            <span style={clickedState} onClick={this.handleChange}>
              {formatPrice(this.props.value)}
            </span>
          </h2>
        </div>
      </>
    );
  }
}
