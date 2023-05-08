import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface Props {
  addTodo: (todoText: string) => void;
}
function TodoForm({ addTodo }: Props) {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText("");
  };

  return (
    <div className="TodoForm">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Enter a Todo</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter a Todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default TodoForm;
