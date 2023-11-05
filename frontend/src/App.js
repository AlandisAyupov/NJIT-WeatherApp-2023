import Header from "./components/Header/Header.js";
import { useEffect, useState } from "react";
import background from "./images/sky.jpg";

function App() {
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const printWeatherData = () => {
    const api = "f7b01ad7a4c6639b767e686b3284b139";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((error) => console.log("ERROR"));
  };
  return (
    <div>
      <Header />
      <div class="box1">
        <button onClick={printWeatherData}>Print Weather</button>
        <h3>Latitude:</h3>
        <input
          type="text"
          onChange={(e) => setLat(e.target.value)}
          value={lat}
        />
        <h3>Longitude:</h3>
        <input
          type="text"
          onChange={(e) => setLon(e.target.value)}
          value={lon}
        />
      </div>
      <div class="box2">
        {weather && (
          <div>
            {Object.keys(weather.main).map((key, index) => {
              return (
                <div key={index}>
                  <h2>
                    {key}: {weather.main[key]}
                  </h2>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
