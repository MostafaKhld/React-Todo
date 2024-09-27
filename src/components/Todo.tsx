import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import "../App.css";

interface Props {
  todo: { completed: boolean; text: string; id: number };
  onRemove: (id: number) => void;
}
function Todo({ todo, onRemove }: Props) {
  const [todoItem, setTodoItem] = useState(todo);

  const toggleDone = () => {
    setTodoItem({
      ...todoItem,
      completed: !todoItem.completed,
    });
  };

  return (
    <ListGroup.Item className="Todo" data-testid="todo">
      <Row>
        <Col sm={8}>
          <p
            className={todoItem.completed ? "isDone" : ""}
            data-testid="todo-text"
          >"test"
            {todoItem.text}
          </p>
        </Col>
        <Col sm={2}>
          <Button
            onClick={toggleDone}
            variant={todoItem.completed ? "warning" : "success"}
            data-testid="check-todo"
          >
            {todoItem.completed ? "UnCheck" : "Check"}
          </Button>
        </Col>
        <Col sm={2}>
          <Button
            onClick={() => onRemove(todoItem.id)}
            variant="danger"
            data-testid="delete-todo"
          >
            Delete
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default Todo;
