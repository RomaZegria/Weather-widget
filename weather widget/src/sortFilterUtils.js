import { displayWeather, displayCurrentWeather } from "./displayWeather.js";

function sortingArray(arr) {
  displayCurrentWeather(arr[0]);
  const sortedArray = [];
  let day = [];
  arr.forEach((item, index) => {
    if (index % 8 === 0) {
      day.push(item);
      const dayWeather = filterArray(day);
      sortedArray.push(dayWeather);
      day = [];
    } else {
      +day.push(item);
    }
  });
  displayWeather(sortedArray);
}

function filterArray(array) {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let sortedArray = {
    minTemp: Infinity,
    maxTemp: -Infinity,
    description: "",
    icon: "",
    day: "",
  };

  for (let i = 0; i < array.length; i++) {
    const { dt_txt, main, weather } = array[i];
    const date = new Date(dt_txt.split(" ").shift());
    const day = weekDays[date.getDay()];
    const minTemp = Math.ceil(main.temp_min - 273.15);
    const maxTemp = Math.floor(main.temp_max - 273.15);

    if (i === 0 || minTemp < sortedArray.minTemp) {
      sortedArray.minTemp = minTemp;
    }

    if (i === 0 || maxTemp > sortedArray.maxTemp) {
      sortedArray.maxTemp = maxTemp;
    }

    if (i === 0 || i === 6) {
      sortedArray.description = weather[0].description;
      sortedArray.icon = weather[0].icon;
    }

    sortedArray.day = day;
  }

  return sortedArray;
}

export { filterArray, sortingArray };
