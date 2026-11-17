// interface DocumentState {
//   readonly name: string;
//   submitForReview(document: DocumentWorkflow): void;
//   approve(document: DocumentWorkflow): void;
//   requestChanges(document: DocumentWorkflow): void;
// }

// abstract class DocumentStateBase implements DocumentState {
//   abstract readonly name: string;

//   submitForReview(document: DocumentWorkflow): void {
//     this.rejectAction('submit for review');
//   }

//   approve(document: DocumentWorkflow): void {
//     this.rejectAction('approve');
//   }

//   requestChanges(document: DocumentWorkflow): void {
//     this.rejectAction('request changes');
//   }

//   protected rejectAction(action: string): never {
//     throw new Error(`Cannot ${action} while the document is ${this.name}`);
//   }
// }

// // Each state owns the transitions that are valid from that state.
// class DraftState extends DocumentStateBase {
//   readonly name = 'Draft';

//   override submitForReview(document: DocumentWorkflow): void {
//     document.changeState(new InReviewState());
//   }
// }

// class InReviewState extends DocumentStateBase {
//   readonly name = 'In review';

//   override approve(document: DocumentWorkflow): void {
//     document.changeState(new PublishedState());
//   }

//   override requestChanges(document: DocumentWorkflow): void {
//     document.changeState(new DraftState());
//   }
// }

// class PublishedState extends DocumentStateBase {
//   readonly name = 'Published';
// }

// class DocumentWorkflow {
//   private state: DocumentState = new DraftState();

//   get status(): string {
//     return this.state.name;
//   }

//   submitForReview(): void {
//     this.state.submitForReview(this);
//   }

//   approve(): void {
//     this.state.approve(this);
//   }

//   requestChanges(): void {
//     this.state.requestChanges(this);
//   }

//   changeState(state: DocumentState): void {
//     this.state = state;
//   }
// }

// const article = new DocumentWorkflow();
// console.log(`Initial status: ${article.status}`);

// article.submitForReview();
// console.log(`After submission: ${article.status}`);

// article.requestChanges();
// console.log(`After requested changes: ${article.status}`);

// article.submitForReview();
// article.approve();
// console.log(`After approval: ${article.status}`);

// export {};
