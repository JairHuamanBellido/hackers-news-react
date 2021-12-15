import { HttpRestApi } from "../../../core/api/HttpRestApi";
import {
  HttpRestApiNewsResponse,
  HttpRestApiGeneralResponse,
} from "./interface/HttpRestApiNewsResponse";
import { QueryNews } from "./interface/QueryOptions";

export class HttRestApiNews {
  public static async getBy(
    query: QueryNews
  ): Promise<HttpRestApiNewsResponse[]> {
    const { data } = await HttpRestApi.get<HttpRestApiGeneralResponse>(``, {
      params: { query: query.technology, page: query.page },
    });

    return data.hits;
  }
}
