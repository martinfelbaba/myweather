import React from "react";

const KELVINDIF = -272.15;

function toCelsius(kelvin) {
    return Number(kelvin + KELVINDIF).toFixed(1) + " 'C";
}

function CityWeatherItems(props) {
    const entries = props.entries;

    return (
      <div className="cityWaeterItems">
        {entries.map(({ id, name, main}) => {
          return (
            <div
              className="cityWeaterItem" 
              key={id}
            >
              <div className="subtitle">Weather Summary</div>
              <div className="city-name">{name}</div>
              <div className="temperature">{toCelsius(main?.temp)}</div>
              <div className="temperature-ma`">Min: {toCelsius(main?.temp_min)}</div>
              <div className="temperature-min">Max: {toCelsius(main?.temp_max)}</div>
              <div className="humidity">Humidity: {main?.humidity}</div>
            </div>
          );
       })}
      </div>
    );
}

export default CityWeatherItems;