export class Todo {
  done: boolean;
  constructor(readonly name: string, done: boolean, readonly id: number) {
    this.done = done;
  }

  toggleDone() {
    this.done = !this.done;
  }
}
