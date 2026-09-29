function IntroConvert(InitialUnit: string, FinalUnit: string) {

  const convertOne = (value: number): number => {

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

  return (item: number | number[]): number | number[] => {

    if (Array.isArray(item)) {
      return item.map((value) => convertOne(value));
    }

    return convertOne(item);
  };
}


const kgInput = document.getElementById("kg-input") as HTMLInputElement;
const kgButton = document.getElementById("kg-button") as HTMLButtonElement;
const kgResult = document.getElementById("kg-result") as HTMLParagraphElement;
const poundsInput = document.getElementById("pounds-input") as HTMLInputElement;
const poundsButton = document.getElementById("pounds-button") as HTMLButtonElement;
const poundsResult = document.getElementById("pounds-result") as HTMLParagraphElement;
const milesInput = document.getElementById("miles-input") as HTMLInputElement;
const milesButton = document.getElementById("miles-button") as HTMLButtonElement;
const milesResult = document.getElementById("miles-result") as HTMLParagraphElement;
const kmInput = document.getElementById("km-input") as HTMLInputElement;
const kmButton = document.getElementById("km-button") as HTMLButtonElement;
const kmResult = document.getElementById("km-result") as HTMLParagraphElement;
const celsiusInput = document.getElementById("celsius-input") as HTMLInputElement;
const celsiusButton = document.getElementById("celsius-button") as HTMLButtonElement;
const celsiusResult = document.getElementById("celsius-result") as HTMLParagraphElement;
const fahrenheitInput = document.getElementById("fahrenheit-input") as HTMLInputElement;
const fahrenheitButton = document.getElementById("fahrenheit-button") as HTMLButtonElement;
const fahrenheitResult = document.getElementById("fahrenheit-result") as HTMLParagraphElement;


const handlePoundsConvert = (): void => {
  const pounds = Number(poundsInput.value);

  const converter = IntroConvert("pounds", "kg");

  const kilograms = converter(pounds) as number;

  poundsResult.textContent = kilograms.toFixed(2);
};
const handleKgConvert = (): void => {

  const converter = IntroConvert("kg", "pounds");

  if (kgInput.value.includes(",")) {

    const kilograms: number[] = kgInput.value
      .split(",")
      .map((value) => Number(value.trim()));

    const pounds = converter(kilograms) as number[];

    kgResult.textContent = pounds
      .map((value) => value.toFixed(2))
      .join(", ");

  } else {

    const kilograms: number = Number(kgInput.value);

    const pounds: number = converter(kilograms) as number;

    kgResult.textContent = pounds.toFixed(2);
  }
};
const handleMilesConvert = (): void => {
  const miles = Number(milesInput.value);

  const converter = IntroConvert("miles", "km");

  const kilometres = converter(miles) as number;

  milesResult.textContent = kilometres.toFixed(2);
};
const handleKmConvert = (): void => {
  const kilometres = Number(kmInput.value);

  const converter = IntroConvert("km", "miles");

  const miles = converter(kilometres) as number;

  kmResult.textContent = miles.toFixed(2);
};
const handleCelsiusConvert = (): void => {
  const celsius = Number(celsiusInput.value);

  const converter = IntroConvert("celsius", "fahrenheit");

  const fahrenheit = converter(celsius) as number;

  celsiusResult.textContent = fahrenheit.toFixed(2);
};
const handleFahrenheitConvert = (): void => {
  const fahrenheit = Number(fahrenheitInput.value);

  const converter = IntroConvert("fahrenheit", "celsius");

  const celsius = converter(fahrenheit) as number;

  fahrenheitResult.textContent = celsius.toFixed(2);
};


kgButton.addEventListener("click", handleKgConvert);
poundsButton.addEventListener("click", handlePoundsConvert);
milesButton.addEventListener("click", handleMilesConvert);
kmButton.addEventListener("click", handleKmConvert);
celsiusButton.addEventListener("click", handleCelsiusConvert);
fahrenheitButton.addEventListener("click", handleFahrenheitConvert);