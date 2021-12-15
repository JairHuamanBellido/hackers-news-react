import { render, screen } from "@testing-library/react";
import React from "react";
import Pagination from "../module/News/Application/components/Pagination";

describe("Pagination component", () => {
  const isFirstPosition = jest.fn();
  const isLastPosition = jest.fn();
  const onClick = jest.fn();
  const onClickBack = jest.fn();
  const onClickNext = jest.fn();
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  it("should render without crashing", () => {
    render(
      <Pagination
        isFirstPosition={isFirstPosition}
        isLastPosition={isLastPosition}
        onClick={onClick}
        onClickBack={onClickBack}
        onClickNext={onClickNext}
        actualPage={1}
        pages={pages}
      />
    );
  });

  it("should display the options", () => {
    render(
      <Pagination
        isFirstPosition={isFirstPosition}
        isLastPosition={isLastPosition}
        onClick={onClick}
        onClickBack={onClickBack}
        onClickNext={onClickNext}
        actualPage={1}
        pages={pages}
      />
    );

    pages.forEach((e) => {
      expect(screen.getByTestId(`pagination-${e}`)).toBeInTheDocument();
    });
  });
});
