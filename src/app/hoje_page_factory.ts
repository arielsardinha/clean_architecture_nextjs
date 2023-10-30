import { GetTodoListUseCase } from "@/application/usecases/get_todolist_usecase";
import { ClientHttpFetch } from "@/infra/client_http/client_http_fetch";
import { RepositoryTodosHttp } from "@/infra/repositories/repository_todos/repository_todos_impl";

export class HomeFactory {
  private static clientHttp: ClientHttpFetch;
  private static repository: RepositoryTodosHttp;

  static createGetTodoListUseCase(): GetTodoListUseCase {
    if (!this.clientHttp) {
      this.clientHttp = ClientHttpFetch.getInstance();
    }

    if (!this.repository) {
      this.repository = new RepositoryTodosHttp(this.clientHttp);
    }

    return new GetTodoListUseCase(this.repository);
  }
}
