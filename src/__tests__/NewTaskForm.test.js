import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../data";
import App from "../components/App";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();
  render(
    <NewTaskForm
      categories={["Code", "Food"]}
      onTaskFormSubmit={onTaskFormSubmit}
    />
  );

  fireEvent.change(screen.queryByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });
  fireEvent.change(screen.queryByLabelText(/Category/), {
    target: { value: "Code" },
  });
  fireEvent.submit(screen.queryByText(/Add task/));

  expect(onTaskFormSubmit).toHaveBeenCalledWith({
    text: "Pass the tests",
    category: "Code",
  });
});
