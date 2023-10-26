import { ClientHttp } from "../client_http/client_http";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface RepositoryTodos {
  getTodos(): Promise<Todo[]>;
}

export class RepositoryTodosHttp implements RepositoryTodos {
  constructor(readonly clientHttp: ClientHttp) {}
  async getTodos(): Promise<Todo[]> {
    const { response } = await this.clientHttp.get<Todo[]>("/todos");
    return response.data;
  }
}
