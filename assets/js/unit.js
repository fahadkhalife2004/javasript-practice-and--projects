function convert() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const resultElement = document.getElementById("result");

  if (isNaN(inputValue)) {
    resultElement.textContent = "Please enter a valid number.";
    return;
  }

  const conversionRates = {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    inch: 39.3701,
    foot: 3.28084
  };

  const valueInMeters = inputValue / conversionRates[fromUnit];

  
  const convertedValue = valueInMeters * conversionRates[toUnit];

  resultElement.textContent = `Converted Value: ${convertedValue.toFixed(4)} ${toUnit}`;
}
