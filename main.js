"use strict";
function IntroConvert(InitialUnit, FinalUnit) {
    const convertOne = (value) => {
        if (InitialUnit === "km" && FinalUnit === "miles")
            return value * 0.621371;
        if (InitialUnit === "miles" && FinalUnit === "km")
            return value * 1.60934;
        if (InitialUnit === "kg" && FinalUnit === "pounds")
            return value * 2.20462;
        if (InitialUnit === "pounds" && FinalUnit === "kg")
            return value * 0.453592;
        if (InitialUnit === "celsius" && FinalUnit === "fahrenheit")
            return (value * 9) / 5 + 32;
        if (InitialUnit === "fahrenheit" && FinalUnit === "celsius")
            return ((value - 32) * 5) / 9;
        return value;
    };
    return (item) => {
        if (Array.isArray(item)) {
            return item.map((value) => convertOne(value));
        }
        return convertOne(item);
    };
}
const kgInput = document.getElementById("kg-input");
const kgButton = document.getElementById("kg-button");
const kgResult = document.getElementById("kg-result");
const poundsInput = document.getElementById("pounds-input");
const poundsButton = document.getElementById("pounds-button");
const poundsResult = document.getElementById("pounds-result");
const milesInput = document.getElementById("miles-input");
const milesButton = document.getElementById("miles-button");
const milesResult = document.getElementById("miles-result");
const kmInput = document.getElementById("km-input");
const kmButton = document.getElementById("km-button");
const kmResult = document.getElementById("km-result");
const celsiusInput = document.getElementById("celsius-input");
const celsiusButton = document.getElementById("celsius-button");
const celsiusResult = document.getElementById("celsius-result");
const fahrenheitInput = document.getElementById("fahrenheit-input");
const fahrenheitButton = document.getElementById("fahrenheit-button");
const fahrenheitResult = document.getElementById("fahrenheit-result");
const handlePoundsConvert = () => {
    const pounds = Number(poundsInput.value);
    const converter = IntroConvert("pounds", "kg");
    const kilograms = converter(pounds);
    poundsResult.textContent = kilograms.toFixed(2);
};
const handleKgConvert = () => {
    const converter = IntroConvert("kg", "pounds");
    if (kgInput.value.includes(",")) {
        const kilograms = kgInput.value
            .split(",")
            .map((value) => Number(value.trim()));
        const pounds = converter(kilograms);
        kgResult.textContent = pounds
            .map((value) => value.toFixed(2))
            .join(", ");
    }
    else {
        const kilograms = Number(kgInput.value);
        const pounds = converter(kilograms);
        kgResult.textContent = pounds.toFixed(2);
    }
};
const handleMilesConvert = () => {
    const miles = Number(milesInput.value);
    const converter = IntroConvert("miles", "km");
    const kilometres = converter(miles);
    milesResult.textContent = kilometres.toFixed(2);
};
const handleKmConvert = () => {
    const kilometres = Number(kmInput.value);
    const converter = IntroConvert("km", "miles");
    const miles = converter(kilometres);
    kmResult.textContent = miles.toFixed(2);
};
const handleCelsiusConvert = () => {
    const celsius = Number(celsiusInput.value);
    const converter = IntroConvert("celsius", "fahrenheit");
    const fahrenheit = converter(celsius);
    celsiusResult.textContent = fahrenheit.toFixed(2);
};
const handleFahrenheitConvert = () => {
    const fahrenheit = Number(fahrenheitInput.value);
    const converter = IntroConvert("fahrenheit", "celsius");
    const celsius = converter(fahrenheit);
    fahrenheitResult.textContent = celsius.toFixed(2);
};
kgButton.addEventListener("click", handleKgConvert);
poundsButton.addEventListener("click", handlePoundsConvert);
milesButton.addEventListener("click", handleMilesConvert);
kmButton.addEventListener("click", handleKmConvert);
celsiusButton.addEventListener("click", handleCelsiusConvert);
fahrenheitButton.addEventListener("click", handleFahrenheitConvert);
