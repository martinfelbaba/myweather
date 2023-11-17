import React from "react";

function FormInputField(props) {
    return (
      <input
        className="cityInputField"
        value={props.value}
        type="text"
        onChange={props.onChange}
        placeholder="Enter a City"
      />
    );
  }

  export { FormInputField };