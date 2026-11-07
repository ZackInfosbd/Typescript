// interface Command {
//   execute(): void;
//   undo(): void;
// }
//
// class Light {
//   turnOn(): void {
//     console.log('Light is on');
//   }
//
//   turnOff(): void {
//     console.log('Light is off');
//   }
// }
//
// class LightOnCommand implements Command {
//   constructor(private readonly light: Light) {}
//
//   execute(): void {
//     this.light.turnOn();
//   }
//
//   undo(): void {
//     this.light.turnOff();
//   }
// }
//
// class LightOffCommand implements Command {
//   constructor(private readonly light: Light) {}
//
//   execute(): void {
//     this.light.turnOff();
//   }
//
//   undo(): void {
//     this.light.turnOn();
//   }
// }
//
// class RemoteControl {
//   private lastCommand?: Command;
//
//   pressButton(command: Command): void {
//     command.execute();
//     this.lastCommand = command;
//   }
//
//   pressUndo(): void {
//     if (!this.lastCommand) {
//       console.log('There is no command to undo');
//       return;
//     }
//
//     this.lastCommand.undo();
//     this.lastCommand = undefined;
//   }
// }
//
// const livingRoomLight = new Light();
// const remote = new RemoteControl();
// const turnOn = new LightOnCommand(livingRoomLight);
// const turnOff = new LightOffCommand(livingRoomLight);
//
// remote.pressButton(turnOn);
// remote.pressUndo();
// remote.pressButton(turnOff);