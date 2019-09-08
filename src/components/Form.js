import React from "react";
import NumberFormat from "react-number-format";

const minimumInput = {
  width: "14rem"
};

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
              isNumericString={true}
            />
            , with minimum weekly saving of
            <NumberFormat
              style={minimumInput}
              thousandSeparator={true}
              prefix={"$"}
              value={this.props.minimum}
            />
            . I want to do this in <span style={bold}>52</span> weeks.
          </form>
        </h3>
      </>
    );
  }
}
