import { render, screen } from "@testing-library/react";
import React from "react";
import Card from "../module/News/Application/components/Card";
import { News } from "../module/News/Domain/interface/News.interface";

describe("Card component", () => {
  const newsMock: News = {
    author: "Jair Orlando",
    id: "2022312",
    time: "3 minutes ago",
    title: "How to be a frontend developer",
    url: "url",
    isFavorite: false,
  };

  const onToggleFavorite = jest.fn();
  it("should render without crashing", () => {
    render(<Card onToggleFavorite={onToggleFavorite} news={newsMock} />);
  });

  it("should display a information", () => {
    render(<Card onToggleFavorite={onToggleFavorite} news={newsMock} />);

    expect(screen.getByText(/Jair Orlando/i)).toBeInTheDocument();
    expect(
      screen.getByText(/How to be a frontend developer/i)
    ).toBeInTheDocument();
  });
});
