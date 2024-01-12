import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("render Hello world as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const greetElement = screen.getByText("Hello World", { exact: false });
    expect(greetElement).toBeInTheDocument();
  });

  test('render "Changed!" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test('dose not render "good to see you!" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
