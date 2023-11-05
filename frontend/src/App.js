import Header from "./components/Header/Header.js";
import { useEffect, useState } from "react";

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
    <div class="context">
      {weather && <h1>{weather.weather}</h1>}
      <button onClick={printWeatherData}>Print Weather</button>
      <Header />
    </div>
  );
}

export default App;
