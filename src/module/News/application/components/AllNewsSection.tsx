import { useEffect, useState } from "react";
import { LocalStorageService } from "../../Domain/service/LocalStorageService";
import useGetAllNews from "../hooks/useGetAllNews";
import usePagination from "../hooks/usePagination";
import Card from "./Card";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

export default function NewsSection() {
  const [filter, setFilter] = useState<string>(
    LocalStorageService.getFilter() || "Select yours news"
  );
  const [page, setPage] = useState<number>(0);
  const { onClickBack, onClickNext, pages } = usePagination({
    actualPage: page,
  });
  const { data, refetch, isLoading, isFetching, isFetched } = useGetAllNews({
    page: page,
    technology: filter,
  });

  useEffect(() => {
    if (filter !== "Select yours news") {
      refetch();
    }
  }, [filter, refetch, page]);

  const onSelectFilter = (option: string) => {
    setFilter(option);
    LocalStorageService.setFilter(option);
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
      <Dropdown onSelectOption={onSelectFilter} optionSelected={filter} />
      {isPending && (
        <div className="loading">
          <Spinner />
        </div>
      )}
      {isLoaded && (
        <>
          <div className="news-list">
            {data?.map((news) => (
              <Card key={news.id} news={news} />
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
