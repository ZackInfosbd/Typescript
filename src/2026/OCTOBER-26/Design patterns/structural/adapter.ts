// interface CelsiusTemperatureSensor {
//   readCelsius(): number;
// }

// class FahrenheitThermometer {
//   readFahrenheit(): number {
//     return 68;
//   }
// }

// class FahrenheitToCelsiusAdapter implements CelsiusTemperatureSensor {
//   constructor(private readonly thermometer: FahrenheitThermometer) {}

//   readCelsius(): number {
//     return ((this.thermometer.readFahrenheit() - 32) * 5) / 9;
//   }
// }

// function displayTemperature(sensor: CelsiusTemperatureSensor): void {
//   console.log(`Temperature: ${sensor.readCelsius()} °C`);
// }

// // The client expects Celsius, so the adapter lets it use the Fahrenheit device.
// const thermometer = new FahrenheitThermometer();
// const sensor = new FahrenheitToCelsiusAdapter(thermometer);
// displayTemperature(sensor);
