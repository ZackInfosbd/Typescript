// class EditorMemento {
//   constructor(private readonly content: string) {}

//   getContent(): string {
//     return this.content;
//   }
// }

// class TextEditor {
//   private content = '';

//   write(text: string): void {
//     this.content += text;
//   }

//   getContent(): string {
//     return this.content;
//   }

//   createMemento(): EditorMemento {
//     return new EditorMemento(this.content);
//   }

//   restore(memento: EditorMemento): void {
//     this.content = memento.getContent();
//   }
// }

// class EditorHistory {
//   private readonly snapshots: EditorMemento[] = [];

//   save(editor: TextEditor): void {
//     this.snapshots.push(editor.createMemento());
//   }

//   undo(editor: TextEditor): boolean {
//     const snapshot = this.snapshots.pop();
//     if (!snapshot) {
//       return false;
//     }

//     editor.restore(snapshot);
//     return true;
//   }
// }

// const editor = new TextEditor();
// const history = new EditorHistory();

// editor.write('Hello');
// history.save(editor);

// editor.write(', world!');
// console.log(editor.getContent()); // Hello, world!

// history.undo(editor);
// console.log(editor.getContent()); // Hello

// export {};
