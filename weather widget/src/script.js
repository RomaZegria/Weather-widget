const cityInput = document.getElementById("cityInput");
const selectedCity = document.getElementById("selectedCity");
const errorNote = document.getElementById("errorReport");

import { upperCaseString } from "./utilities.js";
import { getCityData } from "./dataFetcher.js";

document.addEventListener("DOMContentLoaded", () => {
  selectedCity.innerHTML = upperCaseString(cityInput.value);
  getCityData(cityInput.value);
});

document.getElementById("clearInput").addEventListener("click", () => {
  cityInput.value = "";
});

cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    selectedCity.innerHTML = upperCaseString(cityInput.value);
    getCityData(cityInput.value);
  }
});

export { cityInput, selectedCity, errorNote };
