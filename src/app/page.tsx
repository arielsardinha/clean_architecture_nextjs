import React from "react";
import { HomePageComponent } from "./page_client";
import { HomeFactory } from "./hoje_page_factory";

export default async function Home() {
 

  const getTodoListUseCase = HomeFactory.createGetTodoListUseCase();
  const todoList = await getTodoListUseCase.exec();

  return <HomePageComponent todoListProps={todoList}></HomePageComponent>;
}
