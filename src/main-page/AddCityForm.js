import React, { useState } from "react";
import { FormInputField } from "./FormInputField";
import { FormSubmitButton } from "./FormSubmitButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <FormInputField value={cityInput} onChange={handleChange} />
      &nbsp;
      <FormSubmitButton />
    </form>
  );
};

export default AddCityForm;
