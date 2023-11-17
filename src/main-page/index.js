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
  const [cityWeaterList, setCityWeaterList] = useState([
    {
      name: "Bratislava",
      main: { temp: 283.75, temp_min: 282.04, temp_max: 285.99, humidity: 69 },
      id: 1,
    },
    {
      name: "London",
      main: { temp: 298.48, temp_min: 297.56, temp_max: 300.05, humidity: 64 },
      id: 2,
    },
  ]);

  const addCity = (userInput) => {
    const newCity = { name: userInput, id: Date.now() };
    setCityWeaterList((cityWeaterList) => [newCity, ...cityWeaterList]);
  };

  return (
    <Container className="main-container">
      <Row className="app-header">
        <Col>
          <Title />
        </Col>
        <Col></Col>
        <Col className="addCityForm">
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
