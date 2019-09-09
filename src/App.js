import React from "react";
import CouponContainer from "./components/CouponContainer";
import Form from "./components/Form";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateTarget = this.updateTarget.bind(this);
  }

  state = {
    target: "10000",
    minimum: "",
    duration: "52"
  };

  randomMinimum = () => {
    var minMinimum = 80;
    var maxMinimum = 210;
    return (
      Math.floor(Math.random() * (+maxMinimum - +minMinimum)) + +minMinimum
    );
  };

  updateTarget = event => {
    this.setState({ target: event.target.value });
  };

  render() {
    let minimum = this.randomMinimum();
    return (
      <>
        <div className="App">
          <h1>Saver Bingo</h1>
          <Form
            target={this.state.target}
            minimum={minimum}
            duration={this.state.duration}
            updateTarget={this.updateTarget}
          />
          <CouponContainer
            target={this.state.target}
            minimum={minimum}
            duration={this.state.duration}
          />
        </div>
      </>
    );
  }
}

export default App;
