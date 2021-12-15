import { useEffect, useState } from "react";
import useGetAllNews from "../hooks/useGetAllNews";
import usePagination from "../hooks/usePagination";
import Card from "./Card";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

export default function NewsSection() {
  const [option, setOption] = useState<string>("Select yours news");
  const [page, setPage] = useState<number>(0);
  const { onClickBack, onClickNext, pages } = usePagination({
    actualPage: page,
  });
  const { data, refetch, isLoading, isFetching, isFetched } = useGetAllNews({
    page: page,
    technology: option,
  });

  useEffect(() => {
    if (option !== "Select yours news") {
      refetch();
    }
  }, [option, refetch, page]);

  const onSelectOption = (option: string) => {
    setOption(option);
  };

  const isFirstPosition = (): boolean => page + 1 === 1;
  const isLastPosition = (): boolean => page + 1 === 50;
  const onSelectPage = (value: number): void => {
    setPage(value);
  };

  const onNext = (): void => {
    if (!isLastPosition()) {
      setPage(page + 1);
      onClickNext();
    }
  };

  const onBack = (): void => {
    if (!isFirstPosition()) {
      setPage(page - 1);
      onClickBack();
    }
  };

  const onClick = (page: number) => {
    onSelectPage(page - 1);
  };
  const isPending = isLoading || isFetching;
  const isLoaded = !isLoading && !isFetching && isFetched;

  return (
    <>
      <Dropdown onSelectOption={onSelectOption} optionSelected={option} />
      {isPending && (
        <div className="loading">
          <Spinner />
        </div>
      )}
      {isLoaded && (
        <>
          <div className="news-list">
            {data?.map((news, i) => (
              <Card key={i} news={news} />
            ))}
          </div>
          <Pagination
            actualPage={page}
            isFirstPosition={isFirstPosition}
            isLastPosition={isLastPosition}
            onClick={onClick}
            onClickBack={onBack}
            onClickNext={onNext}
            pages={pages}
          />
        </>
      )}
    </>
  );
}
