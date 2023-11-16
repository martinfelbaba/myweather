import React, { useState } from "react";
import "./main-page.css";

function Title() {
  return <span className="title">MyWeather</span>;
}

function AddCityForm() {
  const [inputCity, setInputCity] = useState("");

  return (
    <span>
      <input
        onChange={(e) => {
          setInputCity(e.target.value);
        }}
        placeholder="Enter a city"
      />
      {inputCity}
    </span>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <AddCityForm />
      </header>
    </div>
  );
}

export default App;
export { Title };
