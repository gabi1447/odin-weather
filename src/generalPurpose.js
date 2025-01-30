export function celsiusToFahrenheit(degrees) {
    return Math.round((degrees * 9) / 5 + 32);
}

export function FahrenheitToCelsius(degrees) {
    return Math.round(((degrees - 32) * 5) / 9);
}

export function clearContentFromElement(element) {
    element.innerText = "";
}
