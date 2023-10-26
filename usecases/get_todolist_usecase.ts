import { Todo } from "../entities/todo";
import { TodoList } from "../entities/todo_list";
import { RepositoryTodos } from "../repository/todos_repository";

export class GetTodoListUseCase {
  constructor(readonly repositoryTodos: RepositoryTodos) {}
  
  async exec(): Promise<TodoList> {
    const todos = await this.repositoryTodos.getTodos();
    const _todos = todos.map(
      (todo) => new Todo(todo.title, todo.completed, todo.id)
    );
    return new TodoList(_todos);
  }
}
