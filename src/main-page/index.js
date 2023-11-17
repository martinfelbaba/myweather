import React, { useState } from "react";
import "./main-page.css";
import CityWeatherItems from "./CityWeatherItems";
import AddCityForm from "./AddCityForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Title() {
  return <div className="title">MyWeather</div>;
}

function App() {
  const [cityWeaterList, setCityWeaterList] = useState([]);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  console.log("API_KEY: " + API_KEY);

  const addCity = (userInput) => {
    const latLongUrl = "http://api.openweathermap.org/geo/1.0/direct?q="
      + userInput + "&limit=1&appid=" + API_KEY;
    fetch(latLongUrl)
      .then(response => response.json())
      .then(data => {
        console.log("Url: " + latLongUrl)
        console.log("http://api.openweathermap.org: " +  userInput + ", lon: "+ data[0].lon + ", lat: " + data[0].lat);
        if(data[0].lat !== undefined) {
          const cityWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat="
            + data[0].lat  + "&lon=" + data[0].lon  + "&appid=" + API_KEY;
          fetch(cityWeatherUrl)
            .then(response => response.json())
            .then(data => {
              console.log("Url: " + cityWeatherUrl)
              console.log("http://api.openweathermap.org city: " + data.name);
              setCityWeaterList((cityWeaterList) => [data, ...cityWeaterList]);
            });
        }
      });
  };

  return (
    <Container className="main-container">
      <Row className="app-header">
        <Col>
          <Title />
        </Col>
        <Col></Col>
        <Col className="add-city-form">
          <AddCityForm addCity={addCity}></AddCityForm>
        </Col>
      </Row>
      <Row>
        <Col>
          <CityWeatherItems entries={cityWeaterList} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
export { Title };
