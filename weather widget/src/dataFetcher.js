import { sortingArray } from "./sortFilterUtils.js";
import { cityInput, errorNote } from "./script.js";

async function getCityData(city) {
  const apiKey = "be890fd63fd04b6b9ec1ce4da29df963";
  const url = `https://api.opencagedata.com/geocode/v1/json?q=
  ${encodeURIComponent(city)}
    &key=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const latitude = data.results[0].geometry.lat;
    const longitude = data.results[0].geometry.lng;
    const weatherResponse = await getWeatherForecast(latitude, longitude);
    errorNote.innerHTML = "";
    sortingArray(weatherResponse.list);
  } catch (error) {
    console.log(`Error: ${error}`);
    if (cityInput.value === "") {
      errorNote.innerHTML = "Enter the city name please.";
    } else {
      errorNote.innerHTML = "Wrong city name, please enter another  city name.";
    }
  }
}

async function getWeatherForecast(latitude, longitude) {
  const apiKey = "badc930a6ae2efb4305ee68302bfbe20";
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export { getWeatherForecast, getCityData };
