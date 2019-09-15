import React, { useState } from "react";
import CouponContainer from "./components/CouponContainer";
import Form from "./components/Form";
import { divvy } from "./helpers/divvy";
import "./App.css";

// Initialise the first minimum amount – maybe not the best way

export default function App() {
  const [target, setTarget] = useState(10000);
  const [minimum, setMinimum] = useState(() => seedMinimum());
  const [duration] = useState(52); //52 weeks in one year
  const [clicked, setClicked] = useState(false);
  const [saverMatrix, setSaverMatrix] = useState(() => seedMatrix());

  // Initialise the minimum amount and the matrix
  function seedMinimum() {
    var minMinimum = 40;
    var maxMinimum = 200;
    var random =
      Math.floor(Math.random() * (+maxMinimum - +minMinimum)) + +minMinimum;
    return random;
  }

  function seedMatrix() {
    let matrix = divvy(target, duration, minimum);
    return matrix;
  }

  // This function is needed as a hack to convert the returned state from <NumberFormat /> from string back to digits
  function updateTarget(event) {
    let target = event.target.value;
    target = parseFloat(
      target.replace(/(\d+),(?=\d{3}(\D|$))/g, "$1").substring(1)
    );

    // Re-Create a new matrix and return the values after  onChange event
    let matrix = divvy(target, duration, minimum);
    return setTarget(target), setSaverMatrix(matrix);
  }

  // Similar to the one above but for updating the minimum amount
  function updateMinimum(event) {
    let minimum = event.target.value;
    minimum = parseFloat(
      minimum.replace(/(\d+),(?=\d{3}(\D|$))/g, "$1").substring(1)
    );

    // Re-Create a new matrix and return the values after  onChange event
    let matrix = divvy(target, duration, minimum);
    return setMinimum(minimum), setSaverMatrix(matrix);
  }

  function handleClick(event) {
    setClicked(!clicked);
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
          handleClick={handleClick}
          saverMatrix={saverMatrix}
        />
      </div>
    </>
  );
}
