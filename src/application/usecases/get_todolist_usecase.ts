import { RepositoryTodos } from "@/infra/repositories/repository_todos/repository_todos";
import { Todo } from "../../enterprise/entities/todo";
import { TodoList } from "../../enterprise/entities/todo_list";

export class GetTodoListUseCase {
  constructor(readonly repositoryTodos: RepositoryTodos) {}

  async exec(): Promise<TodoList> {
    const todos = await this.repositoryTodos.getTodos();
    const _todos = todos.map(
      (todo) =>
        ({ done: todo.completed, name: todo.title, id: todo.id } as Todo)
    );
    return {
      todos: _todos,
    };
  }
}
