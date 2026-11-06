// interface SupportRequest {
//   priority: number;
//   message: string;
// }
//
// abstract class SupportHandler {
//   private nextHandler?: SupportHandler;
//
//   constructor(private readonly maxPriority: number) {}
//
//   setNext(handler: SupportHandler): SupportHandler {
//     this.nextHandler = handler;
//     return handler;
//   }
//
//   handle(request: SupportRequest): string {
//     if (request.priority <= this.maxPriority) {
//       return this.resolve(request);
//     }
//
//     if (this.nextHandler) {
//       return this.nextHandler.handle(request);
//     }
//
//     return `No handler available for: ${request.message}`;
//   }
//
//   protected abstract resolve(request: SupportRequest): string;
// }
//
// class FrontlineSupport extends SupportHandler {
//   constructor() {
//     super(1);
//   }
//
//   protected resolve(request: SupportRequest): string {
//     return `Frontline support resolved: ${request.message}`;
//   }
// }
//
// class TechnicalSupport extends SupportHandler {
//   constructor() {
//     super(2);
//   }
//
//   protected resolve(request: SupportRequest): string {
//     return `Technical support resolved: ${request.message}`;
//   }
// }
//
// class ManagerSupport extends SupportHandler {
//   constructor() {
//     super(3);
//   }
//
//   protected resolve(request: SupportRequest): string {
//     return `A manager resolved: ${request.message}`;
//   }
// }
//
// const frontline = new FrontlineSupport();
// const technical = new TechnicalSupport();
// const manager = new ManagerSupport();
//
// frontline.setNext(technical).setNext(manager);
//
// const requests: SupportRequest[] = [
//   { priority: 1, message: 'Reset my password' },
//   { priority: 2, message: 'The application will not sync' },
//   { priority: 3, message: 'I need to report a serious outage' },
// ];
//
// for (const request of requests) {
//   console.log(frontline.handle(request));
// }