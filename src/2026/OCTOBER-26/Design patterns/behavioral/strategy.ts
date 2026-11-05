// interface PaymentStrategy {
//   pay(amount: number): void;
// }
//
// class CreditCardPayment implements PaymentStrategy {
//   constructor(private readonly cardNumber: string) {}
//
//   pay(amount: number): void {
//     console.log(`Paid $${amount.toFixed(2)} with card ending in ${this.cardNumber.slice(-4)}`);
//   }
// }
//
// class PayPalPayment implements PaymentStrategy {
//   constructor(private readonly email: string) {}
//
//   pay(amount: number): void {
//     console.log(`Paid $${amount.toFixed(2)} with PayPal account ${this.email}`);
//   }
// }
//
// class Checkout {
//   constructor(private paymentStrategy: PaymentStrategy) {}
//
//   setPaymentStrategy(strategy: PaymentStrategy): void {
//     this.paymentStrategy = strategy;
//   }
//
//   completePurchase(amount: number): void {
//     this.paymentStrategy.pay(amount);
//   }
// }
//
// const checkout = new Checkout(new CreditCardPayment('1234567812345678'));
// checkout.completePurchase(49.99);
//
// // Switch the algorithm at runtime without changing Checkout.
// checkout.setPaymentStrategy(new PayPalPayment('customer@example.com'));
// checkout.completePurchase(19.99);