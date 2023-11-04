fetch(
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={f7b01ad7a4c6639b767e686b3284b139}"
)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
