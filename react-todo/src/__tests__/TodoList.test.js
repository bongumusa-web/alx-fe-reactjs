import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";


// Test 1: Initial Render
test("renders initial todos", () => {
  render(<TodoList />);

  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Write Tests")).toBeInTheDocument();
  expect(screen.getByText("Build Projects")).toBeInTheDocument();
});


// Test 2: Add Todo
test("adds a new todo", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText("Add todo...");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Todo Task" } });
  fireEvent.click(button);

  expect(screen.getByText("New Todo Task")).toBeInTheDocument();
});


// Test 3: Toggle Todo
test("toggles todo completion", () => {
  render(<TodoList />);

  const todo = screen.getByText("Learn React");

  fireEvent.click(todo);

  expect(todo).toHaveStyle("text-decoration: line-through");
});


// Test 4: Delete Todo
test("deletes a todo", () => {
  render(<TodoList />);

  const deleteButtons = screen.getAllByText("Delete");

  fireEvent.click(deleteButtons[0]);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
