import React from "react";
import NumberFormat from "react-number-format";

export default function Form(props) {
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
            value={props.target}
            onChange={props.updateTarget}
          />
          , with minimum weekly saving of
          <NumberFormat
            style={minimumInput}
            thousandSeparator={true}
            prefix={"$"}
            value={props.minimum}
            onChange={props.updateMinimum}
          />
          .
          <br />I want to do this in <span style={bold}>52</span> weeks.
        </form>
      </h3>
    </>
  );
}
