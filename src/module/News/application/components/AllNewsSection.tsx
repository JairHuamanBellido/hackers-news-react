import React, { useEffect, useState } from "react";
import { News } from "../../Domain/interface/News.interface";
import { GetSearchFilterService } from "../../Domain/service/GetSearchFilterService";
import { RemoveFavoriteNewsService } from "../../Domain/service/RemoveFavoriteNewsService";
import { SaveFavoriteNewsService } from "../../Domain/service/SaveFavoriteNewsService";
import { SaveSearchFilterService } from "../../Domain/service/SaveSearchFilterService";
import useGetAllNews from "../hooks/useGetAllNews";
import usePagination from "../hooks/usePagination";
import Dropdown from "./Dropdown";
import List from "./List";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

const LIMIT_PAGE = 50;
export default function NewsSection() {
  const {
    onClickBack,
    onClickNext,
    pages,
    isFirstPosition,
    isLastPosition,
    actualPage,
    onClick,
  } = usePagination({
    limit: LIMIT_PAGE,
  });

  const [filter, setFilter] = useState<string>(
    GetSearchFilterService.execute() || "Select yours news"
  );
  const { data, refetch, isLoading, isFetching, isFetched } = useGetAllNews({
    page: actualPage - 1,
    technology: filter,
  });
  const [news, setNews] = useState<News[]>([]);
  const isPending = isLoading || isFetching;
  const isLoaded = !isLoading && !isFetching && isFetched;

  useEffect(() => {
    if (filter !== "Select yours news") {
      refetch();
    }
  }, [filter, refetch, actualPage]);

  useEffect(() => {
    if (data !== undefined) {
      setNews(data as News[]);
    }
  }, [data]);

  const onSelectFilter = (option: string) => {
    setFilter(option);
    SaveSearchFilterService.execute(option);
    onClick(1);
  };

  const onToggleFavorite = (news: News) => {
    setNews((state) => {
      return state.map((e) => {
        if (e.id === news.id) {
          return { ...e, isFavorite: !news.isFavorite };
        }
        return e;
      });
    });
    if (!news.isFavorite) {
      SaveFavoriteNewsService.execute(news);
    } else {
      RemoveFavoriteNewsService.execute(news);
    }
  };

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
          {news.length > 0 && (
            <List news={news} onToggleFavorite={onToggleFavorite} />
          )}
          <Pagination
            actualPage={actualPage}
            isFirstPosition={isFirstPosition}
            isLastPosition={isLastPosition}
            onClick={onClick}
            onClickBack={onClickBack}
            onClickNext={onClickNext}
            pages={pages}
          />
        </>
      )}
    </>
  );
}
