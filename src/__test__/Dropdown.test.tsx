import { render, screen } from "@testing-library/react";
import React from "react";
import Dropdown from "../module/News/Application/components/Dropdown";

describe("Dropdown component", () => {
  const onSelectOption = jest.fn();
  it("should render without crashing", () => {
    render(
      <Dropdown onSelectOption={onSelectOption} optionSelected="Angular" />
    );
  });

  it("should display Angular as selected", () => {
    render(
      <Dropdown onSelectOption={onSelectOption} optionSelected="Angular" />
    );
    expect(screen.getByText(/Angular/i)).toBeInTheDocument();
  });

  it("should display React as selected", () => {
    render(
      <Dropdown onSelectOption={onSelectOption} optionSelected="Reactjs" />
    );
    expect(screen.getByText(/Reactjs/i)).toBeInTheDocument();
  });
  it("should display Vue as selected", () => {
    render(<Dropdown onSelectOption={onSelectOption} optionSelected="Vuejs" />);
    expect(screen.getByText(/Vuejs/i)).toBeInTheDocument();
  });
});
