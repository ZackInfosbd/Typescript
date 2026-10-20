// interface CourseNotification {
//   send(message: string): void;
// }

// class EmailNotification implements CourseNotification {
//   send(message: string): void {
//     console.log(`Sending email: ${message}`);
//   }
// }

// class SmsNotification implements CourseNotification {
//   send(message: string): void {
//     console.log(`Sending SMS: ${message}`);
//   }
// }

// type NotificationType = "email" | "sms";

// class NotificationFactory {
//   static create(type: NotificationType): CourseNotification {
//     switch (type) {
//       case "email":
//         return new EmailNotification();
//       case "sms":
//         return new SmsNotification();
//     }
//   }
// }

// // The client chooses a notification type without constructing it directly.
// const notification = NotificationFactory.create("email");
// notification.send("Your course enrollment is confirmed.");
