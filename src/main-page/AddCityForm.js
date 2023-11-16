import React, { useState } from "react";
import {FormInputField} from "./FormInputField";
import {FormSubmitButton} from "./FormSubmitButton";

const AddCityForm = ({ addCity }) => {
  const [cityInput, setCityInput] = useState("");

  const handleChange = (e) => {
    setCityInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityInput.length > 0) {
      addCity(cityInput);
    }
    setCityInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="col-7">
          <FormInputField value={cityInput} onChange={handleChange} />
        </div>

        <div className="col-5">
          <FormSubmitButton />
        </div>
    </form>
  );
};

export default AddCityForm;