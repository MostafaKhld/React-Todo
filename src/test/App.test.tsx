import { describe, expect, it } from "vitest";
import App from "../App";
import { render, screen, userEvent, fireEvent } from "../utils/test-utils";
describe("App Functions Unit Test", () => {
  it(" App title is visible", () => {
    render(<App />);
    expect(screen.getByText(/React Todo App/i)).toBeInTheDocument();
  });

  it(" Add New Todo", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText<HTMLInputElement>("Enter a Todo");

    expect(input).toBeTruthy();

    expect(input?.textContent).toBe("");

    await userEvent.type(input, "Task 1");

    expect(input.value).toBe("Task 1");
    const Submit = screen.getByText("Submit");

    fireEvent.click(Submit);

    const todo = screen.getByTestId("todo-text");
    const todoNameElement = todo.firstChild;
    expect(todoNameElement!.textContent).toBe("Task 1");
  });

  it(" Check Todo", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Enter a Todo");
    await userEvent.type(input, "Task 1");
    const Submit = screen.getByText("Submit");
    fireEvent.click(Submit);
    const todo = screen.getByTestId("check-todo");
    const todoNameElement = todo.firstChild;
    fireEvent.click(todoNameElement!);
    expect(todoNameElement!.textContent).toBe("UnCheck");
  });

  it(" Delete Todo", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Enter a Todo");
    await userEvent.type(input, "Task 1");
    const Submit = screen.getByText("Submit");
    fireEvent.click(Submit);
    const todo = screen.getByTestId("delete-todo");
    const todoNameElement = todo.firstChild;
    fireEvent.click(todoNameElement!);
    expect(todo).not.toBeInTheDocument();
  });
});
