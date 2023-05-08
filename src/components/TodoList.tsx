import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import Todo from "./Todo";

interface Props {
  todos: { completed: boolean; text: string; id: number }[];
  onRemove: (id: number) => void;
}
function TodoList({ todos, onRemove }: Props) {
  const todoList = todos.map((todo, index) => {
    return <Todo todo={todo} key={index} onRemove={onRemove} />;
  });

  return (
    <div className="TodoList">
      <h2>TodoList</h2>
      <ListGroup data-testid="TodoList">{todoList}</ListGroup>
    </div>
  );
}

export default TodoList;
