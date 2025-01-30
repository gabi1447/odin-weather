import "./styles.css";
import "./styles-dynamic-elements.css";
import "./styles-weather-card.css";

import { addSearchComponent } from "./dynamicElements";

import { setupDynamicEventListeners } from "./eventListeners";

const container = document.querySelector("#dynamic-content");

function main() {
    addSearchComponent();
    setupDynamicEventListeners();
}

main();
