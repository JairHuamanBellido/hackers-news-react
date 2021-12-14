import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "../module/News/Application/components/Header";

describe("Header component", () => {
  it("should render without crashing", () => {
    render(<Header />);
  });

  it("should display a title", () => {
    render(<Header />);
    expect(screen.getByText(/HACKER NEWS/i)).toBeInTheDocument();
  });
});
