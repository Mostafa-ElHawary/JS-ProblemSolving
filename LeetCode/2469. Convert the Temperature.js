// You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

// You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

// Return the array ans. Answers within 10-5 of the actual answer will be accepted.

// Note that:

// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00
 

// Example 1:

// Input: celsius = 36.50
// Output: [309.65000,97.70000]

function convertTemperature(celsius) {
    const kelvin = (celsius + 273.15).toFixed(5);
    const fahrenheit = (celsius * 1.8 + 32).toFixed(5);
    return [parseFloat(kelvin), parseFloat(fahrenheit)];
  }
  