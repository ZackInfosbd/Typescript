import ISwitchCommand from './iswitch-comand';
import Light from './light';

export default class SwitchOnCommand implements ISwitchCommand {
  #light: Light;

  constructor(light: Light) {
    this.#light = light;
  }

  execute(): void {
    this.#light.turnOn();
  }
}
