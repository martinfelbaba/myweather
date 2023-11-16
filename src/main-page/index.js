import React, { useState } from "react";
import "./main-page.css";
import CityWeatherItems from "./CityWeatherItems";
import AddCityForm from "./AddCityForm";

function Title() {
  return <span className="title">MyWeather</span>;
}

function App() {
  const [cityWeaterList, setCityWeaterList] = useState([
    { name: "Bratislava", "main" : { "temp" : 283.75, "temp_min" : 282.04, "temp_max" : 285.99, "humidity" : 69}, id: 1 },
    { name: "London", "main" : { "temp" : 298.48, "temp_min" : 297.56, "temp_max" : 300.05, "humidity" : 64}, id: 2},
  ]);

  const addCity = (userInput) => {
    const newCity = { name: userInput, id: Date.now() };
    setCityWeaterList((cityWeaterList) => [newCity, ...cityWeaterList]);
  };

  return (
    <div className="container">
      <Title />
      <div className="row mb-1 ms-1 me-1 mt-2">
        <AddCityForm addCity={addCity}></AddCityForm>
      </div>
      <div className="row mb-3 ms-1 me-1 mt-3">
        <CityWeatherItems entries={cityWeaterList} />
      </div>
    </div>
  );
}

export default App;
export { Title };
