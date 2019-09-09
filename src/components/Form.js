import React from "react";
import NumberFormat from "react-number-format";

export default class Form extends React.Component {
  render() {
    const minimumInput = {
      width: "14rem"
    };
    const bold = {
      fontWeight: "bold"
    };
    return (
      <>
        <h3>
          <form action="">
            I want to save
            <NumberFormat
              thousandSeparator={true}
              prefix={"$"}
              value={this.props.target}
              onChange={this.props.updateTarget}
            />
            , with minimum weekly saving of
            <NumberFormat
              style={minimumInput}
              thousandSeparator={true}
              prefix={"$"}
              value={this.props.minimum}
              onChange={this.props.updateMinimum}
            />
            .
            <br />I want to do this in <span style={bold}>52</span> weeks.
          </form>
        </h3>
      </>
    );
  }
}
