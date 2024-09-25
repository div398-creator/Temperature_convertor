document.getElementById('convert-btn').addEventListener('click', function() {
  const tempInput = document.getElementById('temperature').value;
  const unit = document.getElementById('unit').value;
  const resultText = document.getElementById('result-text');

  if (isNaN(tempInput)) {
    resultText.textContent = 'Please enter a valid number.';
    return;
  }

  const temperature = parseFloat(tempInput);
  let convertedTemp;

  if (unit === 'Celsius') {
    convertedTemp = (temperature * 9/5) + 32;
    resultText.textContent = `${temperature} °C = ${convertedTemp.toFixed(2)} °F`;
  } else if (unit === 'Fahrenheit') {
    convertedTemp = (temperature - 32) * 5/9;
    resultText.textContent = `${temperature} °F = ${convertedTemp.toFixed(2)} °C`;
  }
});
