import { isNotNull } from "../../../../utils/IsNotNull";
import { parseDateToText } from "../../../../utils/ParseDateToText";
import { HttpRestApiNewsResponse } from "../../Infrastructure/interface/HttpRestApiNewsResponse";
import { News } from "../interface/News.interface";

export class NewsMapper {
  public static fromtHttpToDomainEntities(
    httpNews: HttpRestApiNewsResponse[]
  ): News[] {
    const validNews = httpNews.filter(
      (news) =>
        isNotNull(news.author) &&
        isNotNull(news.created_at) &&
        isNotNull(news.story_title) &&
        isNotNull(news.story_url)
    );

    return validNews.map((news) => this._fromHttpToDomainEntity(news));
  }

  private static _fromHttpToDomainEntity(
    httpNews: HttpRestApiNewsResponse
  ): News {
    return {
      author: httpNews.author as string,
      id: httpNews.objectID,
      time: parseDateToText(httpNews.created_at as Date),
      title: httpNews.story_title as string,
      url: httpNews.story_url as string,
      isFavorite: false,
    };
  }

  public static fromLocalStorageToDomainEntities(
    newsJsonStringify: string
  ): News[] {
    return JSON.parse(newsJsonStringify) as News[];
  }
}
