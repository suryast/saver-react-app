import React from "react";
import NumberFormat from "react-number-format";

const minimumInput = {
  width: "11rem"
};

const durationInput = {
  width: "5rem"
};

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { target: "10000", minimum: "100", duration: "52" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.props.value);
  }

  render() {
    return (
      <>
        <h3>
          <form action="">
            I want to save ${" "}
            <NumberFormat
              thousandSeparator={true}
              value={this.state.target}
              onValueChange={values => {
                this.setState({ target: values.value });
              }}
            />
            , with minimum weekly saving of ${" "}
            <NumberFormat
              style={minimumInput}
              thousandSeparator={true}
              value={this.state.minimum}
              onValueChange={values => {
                this.setState({ minimum: values.value });
              }}
            />
            . <br />I want to do this in{" "}
            <NumberFormat
              style={durationInput}
              value={this.state.duration}
              onValueChange={values => {
                this.setState({ duration: values.value });
              }}
            />{" "}
            weeks.
          </form>
        </h3>
      </>
    );
  }
}
