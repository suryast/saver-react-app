import React, { useState } from "react";
import CouponContainer from "./components/CouponContainer";
import Form from "./components/Form";
import "./App.css";

// Initialise the first minimum amount – maybe not the best way

export default function App() {
  const [target, setTarget] = useState(10000);
  const [minimum, setMinimum] = useState(() => randomMinimum());
  const [duration] = useState(`52`);
  const [clicked] = useState(false);

  function randomMinimum() {
    var minMinimum = 80;
    var maxMinimum = 210;
    var random =
      Math.floor(Math.random() * (+maxMinimum - +minMinimum)) + +minMinimum;
    return random;
  }

  // This function is needed as a hack to convert the returned state from <NumberFormat /> from string back to digits
  function updateTarget(event) {
    let value = event.target.value;
    value = parseFloat(
      value.replace(/(\d+),(?=\d{3}(\D|$))/g, "$1").substring(1)
    );
    return setTarget(value);
  }

  // Same as above
  function updateMinimum(event) {
    let value = event.target.value;
    value = parseFloat(
      value.replace(/(\d+),(?=\d{3}(\D|$))/g, "$1").substring(1)
    );
    return setMinimum(value);
  }

  return (
    <>
      <div className="App">
        <h1>Saver Bingo</h1>
        <Form
          target={target}
          minimum={minimum}
          duration={duration}
          updateTarget={updateTarget}
          updateMinimum={updateMinimum}
        />
        <CouponContainer
          target={target}
          minimum={minimum}
          duration={duration}
          clicked={clicked}
        />
      </div>
    </>
  );
}
