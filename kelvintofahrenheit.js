// temperature in kelvin stored in kelvinTemp
var kelvinTemp = 301

// temperature in celsius stored in celsiusTemp
var celsiusTemp = 301 - 273.15

// convert celsius to Fahrenheit with formula stored in fahrenheitTemp
var fahrenheitTemp = celsiusTemp * (9/5)+32

//rounding decimal of fahrenheitTemp using math.floor
fahrenheitTemp = Math.floor(fahrenheitTemp)

//using string concatenation to leave a message
console.log('The temperature is ' + fahrenheitTemp +' degrees Fahrenheit')
