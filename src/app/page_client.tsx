"use client";

import React, { useState, useContext, useEffect } from "react";
import { HomeContext } from "./home_provider";
import { TodoList } from "@/enterprise/entities/todo_list";
import { Todo } from "@/enterprise/entities/todo";

interface HomePageComponentProps {
  todoListProps: TodoList;

}

function setCookie(name: string, value: string, days = 7) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + value + expires + "; path=/";
}

export function HomePageComponent({ todoListProps }: HomePageComponentProps) {
  const [todoList, setTodoList] = useState<TodoList>(todoListProps);
  const { toggleTodoStatusUseCase } = useContext(HomeContext);
  const [theme, setTheme] = useState('');
  function checkTodo(todo: Todo) {
    const updateTodoList = toggleTodoStatusUseCase.execute(todo.id, todoList);
    setTodoList(updateTodoList);
  }

  useEffect(() => {
    if (theme) {
      console.log('foi')
      setCookie('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);


  return (
    <main>
      <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Alternar Tema
        </button>
        {/* Restante do app */}
      </div>

      <i className="icon-home" />
      <br />
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
