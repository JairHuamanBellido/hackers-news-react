import { useQuery } from "react-query";
import { News } from "../../Domain/interface/News.interface";
import { GetAllNewsService } from "../../Domain/service/GetAllNewsService";
import { QueryNews } from "../../Infrastructure/interface/QueryOptions";

export default function useGetAllNews(query: QueryNews) {
  const mutation = useQuery<News[]>(
    "fetchNews",
    () =>
      GetAllNewsService.execute({
        page: query.page,
        technology: query.technology,
      }),
    { enabled: false }
  );
  return mutation;
}
