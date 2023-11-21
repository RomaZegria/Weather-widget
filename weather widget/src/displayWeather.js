import { upperCaseString } from "./utilities.js";
import { cityInput } from "./script.js";

function displayWeather(array) {
  let weather = array.map((item) => {
    return `
      <div class='weather__field field'>
      <div class="field__day-name">${item.day}</div>
      <div class="field__img">
      <img src="https://openweathermap.org/img/wn/${item.icon}@2x.png">
      </div>
      <div class="field__day-weather">${upperCaseString(item.description)}</div>
      <div class="field__info">
        <div class="field__day-part">Day</div>
        <div class="field__temp">${item.maxTemp}&deg;</div>
        <div class="field__temp">${item.minTemp}&deg;</div>
        <div class="field__day-part">Night</div>
      </div>
    </div>
    `;
  });
  document.getElementById("weatherField").innerHTML = weather.join("");
}

function displayCurrentWeather(object) {
  const weather = `<div class="current-weather">
      <div class="current-weather__state">
        <div class="current-weather__min-temp">${Math.floor(
          object.main.temp_min - 273
        )}&deg;</div>
        <div class="current-weather__weather">${object.weather[0].main}</div>
        <div class="current-weather__max-temp">${Math.floor(
          object.main.temp_max - 273
        )}&deg;</div>
      </div>
      <div class="current-weather__info">
        <div class="current-weather__sky-state">${upperCaseString(
          object.weather[0].description
        )}</div>
        <div class="current-weather__city-name">${upperCaseString(
          cityInput.value
        )}</div>
      </div>
      <div class="current-weather__image">
        <img src="https://openweathermap.org/img/wn/${
          object.weather[0].icon
        }@2x.png">
      </div>
    </div>`;
  document.getElementById("currentWeather").innerHTML = weather;
}

export { displayWeather, displayCurrentWeather };
