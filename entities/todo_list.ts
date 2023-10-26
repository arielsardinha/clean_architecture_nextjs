import { Todo } from "./todo";

export class TodoList {
  todos: Todo[];

  constructor(todos: Todo[]) {
    this.todos = todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    return todo;
  }

  getTotal() {
    return this.todos.length;
  }

  getProgress() {
    const done = this.todos.filter(({ done }) => done);
    return (done.length / this.todos.length) * 100;
  }
}
