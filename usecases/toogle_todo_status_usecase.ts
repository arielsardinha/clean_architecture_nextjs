import { TodoList } from "../entities/todo_list";

export class ToggleTodoStatusUseCase {
  execute(todoId: number, todoList: TodoList): TodoList {
    const newTodos = todoList.todos.map((_todo) => {
      if (_todo.id === todoId) {
        _todo.toggleDone();
        return _todo;
      }
      return _todo;
    });

    return new TodoList(newTodos);
  }
}
