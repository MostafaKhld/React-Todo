import { describe, expect, it } from "vitest";
import { render, screen, userEvent, fireEvent } from "../utils/test-utils";
import TodoForm from "../components/TodoForm";

describe("Todo Form Unit Test", () => {

  it("Todo Form  element", () => {
    render(<TodoForm addTodo={(e) => e} />);
    const todoInput =
      screen.getAllByPlaceholderText<HTMLInputElement>("Enter a Todo");
    expect(todoInput).toBeTruthy();
    
  });
});
