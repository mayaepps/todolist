import React, { useState } from 'react';
import TodoList from './TodoList'

export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, content: 'go to meeting'},
    {id: 2, content: 'sleep a lot'},
  ]);

  function deleteTodo(id) {
    setTodos(todos => todos.filter(todo => todo.if !== id));
  }
  return (
    <div className="App">
      <h1>Things To Do</h1>
      <TodoList todos={todos} />
    </div>
  );
}