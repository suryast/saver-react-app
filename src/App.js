import React from "react";
import CouponContainer from "./components/CouponContainer";
import Form from "./components/Form";
import Target from "./components/Target";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Yearly Saver App</h1>
      <Form />
      <CouponContainer />
      <Target goal="$10,000" />
    </div>
  );
}

export default App;
