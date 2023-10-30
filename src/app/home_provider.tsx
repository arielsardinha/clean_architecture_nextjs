"use client";
import { ToggleTodoStatusUseCase } from "@/application/usecases/toogle_todo_status_usecase";
import React, { ReactNode } from "react";

interface HomeContextType {
  toggleTodoStatusUseCase: ToggleTodoStatusUseCase;
}

export const HomeContext = React.createContext<HomeContextType>({
  toggleTodoStatusUseCase: new ToggleTodoStatusUseCase(),
});

interface HomeProviderProps {
  children: ReactNode;
}

export function HomeProvider({ children }: HomeProviderProps): JSX.Element {
  const toggleTodoStatusUseCase = new ToggleTodoStatusUseCase();

  return (
    <HomeContext.Provider value={{ toggleTodoStatusUseCase }}>
      {children}
    </HomeContext.Provider>
  );
}
