import { useState } from "react";
import Container from "react-bootstrap/Container";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<any[]>([]);
  const [nextIndex, setNextIndex] = useState(0);

  const addTodo = (todoText: string) => {
    const todo = { id: nextIndex, text: todoText, completed: false };

    setTodos([...todos, todo]);
    setNextIndex(nextIndex + 1);
  };

  const removeTodo = (id: number) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <Container>
      <h2>React Todo App</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} onRemove={removeTodo} />
    </Container>
  );
}

export default App;
