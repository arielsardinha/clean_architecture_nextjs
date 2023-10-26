"use client";
import React, { ReactNode } from "react";
import { RepositoryTodosHttp } from "../../repository/todos_repository";
import { GetTodoListUseCase } from "../../usecases/get_todolist_usecase";
import { ClientHttpFetch } from "../../client_http/client_http";
import { ToggleTodoStatusUseCase } from "../../usecases/toogle_todo_status_usecase";

interface HomeContextType {
  getTodoListUseCase: GetTodoListUseCase;
  toggleTodoStatusUseCase: ToggleTodoStatusUseCase;
}

const clientHttp = new ClientHttpFetch();
const repository = new RepositoryTodosHttp(clientHttp);

const HomeContext = React.createContext<HomeContextType>({
  getTodoListUseCase: new GetTodoListUseCase(repository),
  toggleTodoStatusUseCase: new ToggleTodoStatusUseCase(),
});

interface HomeProviderProps {
  children: ReactNode;
}

function HomeProvider({ children }: HomeProviderProps): JSX.Element {
  const repository = new RepositoryTodosHttp(clientHttp);
  const getTodoListUseCase = new GetTodoListUseCase(repository);
  const toggleTodoStatusUseCase = new ToggleTodoStatusUseCase();

  return (
    <HomeContext.Provider
      value={{ getTodoListUseCase, toggleTodoStatusUseCase }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export { HomeContext, HomeProvider };
