import React from "react";
import CouponContainer from "./components/CouponContainer";
import Form from "./components/Form";
import "./App.css";

function App() {
  function randomDuration() {
    var minDuration = 12;
    var maxDuration = 52;
    return (
      Math.floor(Math.random() * (+maxDuration - +minDuration)) + +minDuration
    );
  }

  function randomMinimum() {
    var minMinimum = 30;
    var maxMinimum = 190;
    return (
      Math.floor(Math.random() * (+maxMinimum - +minMinimum)) + +minMinimum
    );
  }
  function randomTarget() {
    var minTarget = 10000;
    var maxTarget = 10000;
    return Math.floor(Math.random() * (+maxTarget - +minTarget)) + +minTarget;
  }

  var target = randomTarget();
  var minimum = randomMinimum();
  var duration = randomDuration();

  return (
    <div className="App">
      <h1>Bingo Saver</h1>
      <Form target={target} minimum={minimum} duration={duration} />
      <CouponContainer target={target} minimum={minimum} duration={duration} />
    </div>
  );
}

export default App;
