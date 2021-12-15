import { HttRestApiNews } from "../../Infrastructure/HttpRestApiNews";
import { QueryNews } from "../../Infrastructure/interface/QueryOptions";
import { News } from "../interface/News.interface";
import { NewsMapper } from "../mapper/NewsMapper";
import { FindFavoriteNewsService } from "./FindFavoriteNewsService";

export class GetAllNewsService {
  public static async execute(query: QueryNews): Promise<News[]> {
    const httpResponse = await HttRestApiNews.getBy(query);
    return NewsMapper.fromtHttpToDomainEntities(httpResponse).map((news) => ({
      ...news,
      isFavorite: FindFavoriteNewsService.execute(news),
    }));
  }
}
