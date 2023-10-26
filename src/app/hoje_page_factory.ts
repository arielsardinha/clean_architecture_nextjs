import { ClientHttpFetch } from "../../client_http/client_http";
import { RepositoryTodosHttp } from "../../repository/todos_repository";
import { GetTodoListUseCase } from "../../usecases/get_todolist_usecase";

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
