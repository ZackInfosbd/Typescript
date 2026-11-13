// interface Observer {
//   update(temperature: number): void;
// }

// class WeatherStation {
//   private readonly observers = new Set<Observer>();
//   private temperature = 0;

//   subscribe(observer: Observer): void {
//     this.observers.add(observer);
//   }

//   unsubscribe(observer: Observer): void {
//     this.observers.delete(observer);
//   }

//   setTemperature(temperature: number): void {
//     this.temperature = temperature;
//     this.notifyObservers();
//   }

//   private notifyObservers(): void {
//     for (const observer of this.observers) {
//       observer.update(this.temperature);
//     }
//   }
// }

// class PhoneDisplay implements Observer {
//   constructor(private readonly name: string) {}

//   update(temperature: number): void {
//     console.log(`${this.name}: temperature is ${temperature}°C`);
//   }
// }

// const weatherStation = new WeatherStation();
// const phone = new PhoneDisplay('Phone');
// const tablet = new PhoneDisplay('Tablet');

// weatherStation.subscribe(phone);
// weatherStation.subscribe(tablet);

// weatherStation.setTemperature(22);

// weatherStation.unsubscribe(tablet);
// weatherStation.setTemperature(25);

// export {};
