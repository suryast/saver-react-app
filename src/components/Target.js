import React from "react";
import { formatPrice } from "../helpers/formatPrice";

export default class Target extends React.Component {
  render() {
    return <h1>Goal {formatPrice(parseInt(this.props.goal))}</h1>;
  }
}
