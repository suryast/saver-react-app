import React from "react";
import CouponContainer from "./components/CouponContainer";
import Form from "./components/Form";
import Target from "./components/Target";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Saver App</h1>
      <Form target="10000" minimum="100" duration="52" />
      <CouponContainer />
      <Target goal="1000000" />
    </div>
  );
}

export default App;
