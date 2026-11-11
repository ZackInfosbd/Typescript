// interface ChatMediator {
//   sendMessage(message: string, sender: Participant): void;
// }

// class Participant {
//   constructor(
//     private readonly name: string,
//     private readonly mediator: ChatMediator,
//   ) {}

//   send(message: string): void {
//     this.mediator.sendMessage(message, this);
//   }

//   receive(message: string, sender: string): void {
//     console.log(`${this.name} received from ${sender}: ${message}`);
//   }

//   getName(): string {
//     return this.name;
//   }
// }

// class ChatRoom implements ChatMediator {
//   private readonly participants: Participant[] = [];

//   register(participant: Participant): void {
//     if (!this.participants.includes(participant)) {
//       this.participants.push(participant);
//     }
//   }

//   sendMessage(message: string, sender: Participant): void {
//     if (!this.participants.includes(sender)) {
//       throw new Error('Only registered participants can send messages');
//     }

//     for (const participant of this.participants) {
//       if (participant !== sender) {
//         participant.receive(message, sender.getName());
//       }
//     }
//   }
// }

// const chatRoom = new ChatRoom();
// const alice = new Participant('Alice', chatRoom);
// const bob = new Participant('Bob', chatRoom);
// const charlie = new Participant('Charlie', chatRoom);

// chatRoom.register(alice);
// chatRoom.register(bob);
// chatRoom.register(charlie);

// alice.send('Hi everyone!');

// export {};
