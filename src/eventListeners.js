import {
    retrieveWeatherData,
    returnMainFieldsFromWeatherDataResponse,
} from "./retrieveData";

import { clearContentFromElement } from "./generalPurpose";

import { generateWeatherDataCard, addSearchComponent } from "./dynamicElements";

export function setupDynamicEventListeners() {
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", handleButtonClick);
}

function handleButtonClick() {
    const container = document.getElementById("dynamic-content");
    const searchBar = document.getElementById("search-bar");
    if (searchBar.value === "") {
        return;
    }

    clearContentFromElement(container);
    addSearchComponent();
    setupDynamicEventListeners();

    let dataObject;
    const location = searchBar.value;
    const weatherData = retrieveWeatherData(location);

    weatherData
        .then((data) => {
            dataObject = returnMainFieldsFromWeatherDataResponse(data);
            const weatherDataCard = generateWeatherDataCard(dataObject);
            container.appendChild(weatherDataCard);
        })
        .catch((error) => {
            console.error(error);
        });
}
