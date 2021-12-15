import { isNotNull } from "../../../../utils/IsNotNull";
import { parseDateToText } from "../../../../utils/ParseDateToText";
import { HttpRestApiNewsResponse } from "../../Infrastructure/interface/HttpRestApiNewsResponse";
import { News } from "../interface/News.interface";

export class NewsMapper {
  public static toNewsDomain(httpNews: HttpRestApiNewsResponse[]): News[] {
    const validNews = httpNews.filter(
      (news) =>
        isNotNull(news.author) &&
        isNotNull(news.created_at) &&
        isNotNull(news.story_title) &&
        isNotNull(news.story_url)
    );

    return validNews.map((news) => this._fromHttpToDomain(news));
  }

  private static _fromHttpToDomain(httpNews: HttpRestApiNewsResponse): News {
    // parseDateToText(httpNews.created_at);
    return {
      author: httpNews.author,
      id: httpNews.story_id,
      time: parseDateToText(httpNews.created_at),
      title: httpNews.story_title,
      url: httpNews.story_url,
    };
  }
}
