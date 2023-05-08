import { describe, expect, it } from "vitest";
import Todo from "../components/Todo";
import { render, screen, userEvent, fireEvent } from "../utils/test-utils";
describe("Todo Componet Unit Test", () => {
  it("Todo Component Mounted", () => {
    render(
      <Todo
        todo={{ id: 1, text: "Task 1", completed: false }}
        onRemove={(e) => e}
      />
    );
    const todoText = screen.getByTestId<HTMLInputElement>("todo-text");
    expect(todoText!.textContent).toBe("Task 1");
  });
});
