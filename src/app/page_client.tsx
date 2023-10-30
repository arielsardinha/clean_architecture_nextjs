"use client";
import React, { useState, useContext } from "react";

import { HomeContext } from "./home_provider";
import { TodoList } from "@/enterprise/entities/todo_list";
import { Todo } from "@/enterprise/entities/todo";

interface HomePageComponentProps {
  todoListProps: TodoList;
}

export function HomePageComponent({ todoListProps }: HomePageComponentProps) {
  const [todoList, setTodoList] = useState<TodoList>(todoListProps);
  const { toggleTodoStatusUseCase } = useContext(HomeContext);

  function checkTodo(todo: Todo) {
    const updateTodoList = toggleTodoStatusUseCase.execute(todo.id, todoList);
    setTodoList(updateTodoList);
  }

  return (
    <main>
      <span>Todo</span>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {todoList.todos.map((todo) => (
          <div key={todo.id.toString()}>
            <span style={{ textDecoration: todo.done ? "line-through" : "" }}>
              Nome: {todo.name} - id: {todo.id}
            </span>
            <input
              type="button"
              value="Concluir"
              onClick={() => checkTodo(todo)}
            />
          </div>
        ))}
      </div>
      <br />
    </main>
  );
}
