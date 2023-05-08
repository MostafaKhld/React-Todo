import { describe, expect, it } from "vitest";
import TodoList from "../components/TodoList";
import { render, screen, userEvent, fireEvent } from "../utils/test-utils";

describe("Todo ListComponet Unit Test", () => {
  it("Todo List map todos element", () => {
    render(
      <TodoList
        todos={[
          { id: 1, text: "Task 1", completed: false },
          { id: 2, text: "Task 2", completed: false },
        ]}
        onRemove={(e) => e}
      />
    );
    const todoList = screen.getByTestId<HTMLInputElement>("TodoList");
    expect(todoList.childElementCount).toBe(2);
  });
});
