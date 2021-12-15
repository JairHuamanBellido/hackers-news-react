interface IProps {
  actualPage: number;
  onClick(value: number): void;
  onClickBack(): void;
  onClickNext(): void;
  pages: number[];
  isFirstPosition(): boolean;
  isLastPosition(): boolean;
}
export default function Pagination(props: IProps) {
  const {
    actualPage,
    isFirstPosition,
    isLastPosition,
    onClick,
    onClickBack,
    onClickNext,
    pages,
  } = props;

  const isSelected = (value: number): string => {
    return value === actualPage + 1 ? "active" : "inactive";
  };

  return (
    <div className="pagination">
      <div
        onClick={onClickBack}
        className={`option ${isFirstPosition() ? "disabled" : ""}`}
      >
        <div className="back-arrow" />
      </div>
      {pages.map((page) => (
        <div
          data-testid={`pagination-${page}`}
          onClick={() => onClick(page)}
          className={`option ${isSelected(page)}`}
          key={page}
        >
          <p>{page}</p>
        </div>
      ))}
      <div
        onClick={onClickNext}
        className={`option ${isLastPosition() ? "disabled" : ""}`}
      >
        <div className="next-arrow" />
      </div>
    </div>
  );
}
