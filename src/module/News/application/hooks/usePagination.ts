import { useState } from "react";

interface IProps {
  actualPage: number;
}
export default function usePagination(props: IProps) {
  const { actualPage } = props;
  const [pages, setPages] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const onClickBack = (): void => {
    const firstValuePagination = pages[0];
    if (actualPage <= firstValuePagination - 1 && actualPage !== 0) {
      setPages([firstValuePagination - 1, ...pages.slice(0, 8)]);
    }
  };

  const onClickNext = (): void => {
    const lastValuePagination = pages[pages.length - 1] - 1;
    if (actualPage >= lastValuePagination && actualPage !== 49) {
      setPages([...pages.slice(1, 9), lastValuePagination + 2]);
    }
  };

  return {
    pages,
    onClickBack,
    onClickNext,
  };
}
