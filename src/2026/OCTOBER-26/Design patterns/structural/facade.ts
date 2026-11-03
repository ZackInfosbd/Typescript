// class MediaPlayer {
//   play(movie: string): void {
//     console.log(`Playing "${movie}"`);
//   }

//   stop(): void {
//     console.log('Stopping the movie');
//   }
// }

// class Projector {
//   turnOn(): void {
//     console.log('Projector on');
//   }

//   turnOff(): void {
//     console.log('Projector off');
//   }
// }

// class SoundSystem {
//   turnOn(): void {
//     console.log('Sound system on');
//   }

//   setVolume(level: number): void {
//     console.log(`Volume set to ${level}`);
//   }

//   turnOff(): void {
//     console.log('Sound system off');
//   }
// }

// class HomeTheaterFacade {
//   constructor(
//     private readonly player: MediaPlayer,
//     private readonly projector: Projector,
//     private readonly soundSystem: SoundSystem,
//   ) {}

//   watchMovie(movie: string): void {
//     console.log('Getting the home theater ready...');
//     this.projector.turnOn();
//     this.soundSystem.turnOn();
//     this.soundSystem.setVolume(5);
//     this.player.play(movie);
//   }

//   endMovie(): void {
//     console.log('Shutting down the home theater...');
//     this.player.stop();
//     this.projector.turnOff();
//     this.soundSystem.turnOff();
//   }
// }

// // The client uses one simple interface instead of coordinating each subsystem.
// const homeTheater = new HomeTheaterFacade(
//   new MediaPlayer(),
//   new Projector(),
//   new SoundSystem(),
// );

// homeTheater.watchMovie('The Design Patterns');
// homeTheater.endMovie();
