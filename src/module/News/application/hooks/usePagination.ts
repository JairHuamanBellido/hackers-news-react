import { useEffect, useState } from "react";

interface IProps {
  limit: number;
}
export default function usePagination(props: IProps) {
  const { limit } = props;
  const [pages, setPages] = useState<number[]>([]);
  const [actualPage, setActualPage] = useState<number>(1);

  useEffect(() => {
    if (limit > 9) {
      setPages([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    } else {
      setPages(Array.from({ length: limit }, (_, i) => i + 1));
    }
  }, [limit]);

  const onClickBack = (): void => {
    const firstValuePagination = pages[0];
    if (actualPage >= firstValuePagination && actualPage !== 1) {
      setActualPage(actualPage - 1);
      if (firstValuePagination !== 1) {
        setPages([firstValuePagination - 1, ...pages.slice(0, 8)]);
      }
    }
  };

  const onClickNext = (): void => {
    const lastValuePagination = pages[pages.length - 1];
    if (actualPage <= lastValuePagination && actualPage !== limit) {
      setActualPage(actualPage + 1);
      if (lastValuePagination !== limit) {
        setPages([...pages.slice(1, 9), lastValuePagination + 1]);
      }
    }
  };

  const onClick = (page: number) => {
    setActualPage(page);
    isSelectAnotherFilterOption(page);
  };

  const isSelectAnotherFilterOption = (page: number) => {
    if (page === 1) {
      setPages([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
  };

  const isFirstPosition = (): boolean => actualPage === 1;
  const isLastPosition = (): boolean => actualPage === limit;
  return {
    pages,
    onClickBack,
    onClickNext,
    isFirstPosition,
    isLastPosition,
    actualPage,
    onClick,
  };
}
