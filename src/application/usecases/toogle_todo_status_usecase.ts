import { TodoList } from "../../enterprise/entities/todo_list";

export class ToggleTodoStatusUseCase {
  execute(todoId: number, todoList: TodoList): TodoList {
    const newTodos = todoList.todos.map((todo) => {
      if (todo.id === todoId) {
        todo.done = !todo.done;
        return todo;
      }
      return todo;
    });

    return {
      todos: newTodos,
    };
  }
}
