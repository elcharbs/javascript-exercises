const convertToCelsius = function(tempInF) {
  convertedTemp = (tempInF - 32) * (5/9);
  if (convertedTemp !== Math.floor(convertedTemp)) {
    return Number(convertedTemp.toFixed(1));
  }
  return convertedTemp;
};

const convertToFahrenheit = function(tempInC) {
  convertedTemp = (tempInC * (9/5)) + 32;
  if (convertedTemp !== Math.floor(convertedTemp)) {
    return Number(convertedTemp.toFixed(1));
  }
  return convertedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
