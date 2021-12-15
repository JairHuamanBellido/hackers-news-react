import { HttRestApiNews } from "../../Infrastructure/HttpRestApiNews";
import { QueryNews } from "../../Infrastructure/interface/QueryOptions";
import { News } from "../interface/News.interface";
import { NewsMapper } from "../mapper/NewsMapper";

export class GetAllNewsService {
  public static async execute(query: QueryNews): Promise<News[]> {
    const httpResponse = await HttRestApiNews.getBy(query);
    return NewsMapper.fromtHttpToDomainEntities(httpResponse);
  }
}
