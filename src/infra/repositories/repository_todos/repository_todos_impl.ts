import { ClientHttp } from "@/infra/client_http/client_http";
import { TodoModel } from "./models/todo_model";
import { RepositoryTodos } from "./repository_todos";

export class RepositoryTodosHttp implements RepositoryTodos {
  constructor(readonly clientHttp: ClientHttp) {}

  async getTodos(): Promise<TodoModel[]> {
    const { response } = await this.clientHttp.get<TodoModel[]>("/todos");
    return response.data;
  }
}
