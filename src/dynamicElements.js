import { retrieveGif } from "./retrieveData";
import { FahrenheitToCelsius } from "./generalPurpose";

export function addSearchComponent() {
    const container = document.getElementById("dynamic-content");
    const searchContainer = document.createElement("div");
    searchContainer.className = "search-container";

    const searchBar = document.createElement("input");
    searchBar.placeholder = "Add location";
    searchBar.id = "search-bar";

    const searchButton = document.createElement("button");
    searchButton.id = "search-button";
    searchButton.innerText = "Search";

    searchContainer.append(searchBar, searchButton);
    container.appendChild(searchContainer);
}

export function generateWeatherDataCard(dataObject) {
    const weatherCard = document.createElement("div");
    weatherCard.id = "weather-card";

    const weatherData = generateWeatherData(dataObject);
    weatherData.id = "weather-data-container";

    const gif = generateGif(dataObject);
    gif.id = "weather-gif";

    weatherCard.append(weatherData, gif);

    return weatherCard;
}

function generateGif(dataObject) {
    const gif = document.createElement("img");
    const weatherIcon = dataObject["icon"];
    retrieveGif(weatherIcon).then((url) => {
        gif.src = url;
    });

    return gif;
}

function generateWeatherData(dataObject) {
    const weatherData = document.createElement("div");

    const address = document.createElement("h1");
    address.id = "weather-address";
    address.innerText = `${dataObject["address"]}`;

    const time = document.createElement("p");
    time.id = "weather-time";
    time.innerText = `Last time checked: ${dataObject["dateTime"]}`;

    const temp = document.createElement("p");
    temp.id = "weather-temp";
    temp.innerText = `Temperature: ${FahrenheitToCelsius(dataObject["temp"])}°C`;

    const conditions = document.createElement("p");
    conditions.id = "weather-conditions";
    conditions.innerText = `Conditions: ${dataObject["conditions"]}`;

    const description = document.createElement("p");
    description.id = "weather-description";
    description.innerText = `Description: ${dataObject["description"]}`;

    weatherData.append(address, time, temp, conditions, description);

    return weatherData;
}

/*     const img = document.createElement("img");
    retrieveGif("duck").then((url) => {
        img.src = url;
    });
    container.appendChild(img); */
