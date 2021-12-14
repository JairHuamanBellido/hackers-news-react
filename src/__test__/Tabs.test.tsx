import { render, screen } from "@testing-library/react";
import React from "react";
import Tabs from "../module/News/Application/components/Tabs";

describe("Tab component", () => {
  it("should render without crashing", () => {
    render(<Tabs labels={["All", "My faves"]} />);
  });

  it("should display 2 tabs", () => {
    render(<Tabs labels={["All", "My faves"]} />);

    expect(screen.getAllByTestId("tab")).toHaveLength(2);
    expect(screen.getByText(/All/i)).toBeInTheDocument();
    expect(screen.getByText(/My faves/i)).toBeInTheDocument();
  });
});
