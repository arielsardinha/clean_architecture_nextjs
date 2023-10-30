import { TodoModel } from "./models/todo_model";

export interface RepositoryTodos {
  getTodos(): Promise<TodoModel[]>;
}
