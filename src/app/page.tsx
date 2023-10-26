"use client";
import React, { useEffect, useRef, useState, useContext } from "react";
import { TodoList } from "../../entities/todo_list";
import { Todo } from "../../entities/todo";
import { HomeContext } from "./home_provider";

export default function Home() {
  const [todoList, setTodoList] = useState<TodoList>(new TodoList([]));
  const { getTodoListUseCase, toggleTodoStatusUseCase } =
    useContext(HomeContext);

  useEffect(() => {
    getTodoListUseCase.exec().then((todos) => setTodoList(todos));
  }, []);

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
