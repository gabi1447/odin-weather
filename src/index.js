import "./styles.css";
import "./styles-dynamic-elements.css";
import "./styles-weather-card.css";

import { addSearchComponent } from "./dynamicElements";

import { setupDynamicEventListeners } from "./eventListeners";

function main() {
    addSearchComponent();
    setupDynamicEventListeners();
}

main();
