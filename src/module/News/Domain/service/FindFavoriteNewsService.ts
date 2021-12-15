import { News } from "../interface/News.interface";
import { LocalStorageInfrastructure as LocalStorage } from "../../Infrastructure/LocalStorageInfrastructure";

export class FindFavoriteNewsService {
  public static execute(news: News): boolean {
    const localFavoriteNews = LocalStorage.getFavoritesNews();

    if (localFavoriteNews === null) return false;

    let localStorageNews = JSON.parse(localFavoriteNews) as News[];
    return localStorageNews.some((v) => v.id === news.id);
  }
}
