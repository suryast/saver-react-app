import React from "react";
import CouponContainer from "./components/CouponContainer";
import Form from "./components/Form";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "10000",
      minimum: "",
      duration: "52",
      clicked: false
    };

    this.updateTarget = this.updateTarget.bind(this);
    this.updateMinimum = this.updateMinimum.bind(this);
  }

  componentDidMount() {
    this.randomMinimum();
  }

  randomMinimum = () => {
    var minMinimum = 80;
    var maxMinimum = 210;
    var random =
      Math.floor(Math.random() * (+maxMinimum - +minMinimum)) + +minMinimum;
    this.setState({ minimum: random });
  };

  updateTarget = event => {
    let value = event.target.value;
    value = parseFloat(
      value.replace(/(\d+),(?=\d{3}(\D|$))/g, "$1").substring(1)
    );
    this.setState({ target: value });
  };

  updateMinimum = event => {
    let value = event.target.value;
    value = parseFloat(
      value.replace(/(\d+),(?=\d{3}(\D|$))/g, "$1").substring(1)
    );
    this.setState({ minimum: value });
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>Saver Bingo</h1>
          <Form
            target={this.state.target}
            minimum={this.state.minimum}
            duration={this.state.duration}
            updateTarget={this.updateTarget}
            updateMinimum={this.updateMinimum}
          />
          <CouponContainer
            target={this.state.target}
            minimum={this.state.minimum}
            duration={this.state.duration}
            clicked={this.state.clicked}
          />
        </div>
      </>
    );
  }
}
