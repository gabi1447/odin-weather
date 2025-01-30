import "./styles.css";
import "./styles-dynamic-elements.css";
import "./styles-weather-card.css";

import {
    celsiusToFahrenheit,
    clearContentFromElement,
    FahrenheitToCelsius,
} from "./generalPurpose";

import {
    retrieveWeatherData,
    retrieveGif,
    returnMainFieldsFromWeatherDataResponse,
} from "./retrieveData";

import { addSearchComponent } from "./dynamicElements";

import { setupDynamicEventListeners } from "./eventListeners";

const container = document.querySelector("#dynamic-content");

function main() {
    addSearchComponent();
    setupDynamicEventListeners();
}

main();
