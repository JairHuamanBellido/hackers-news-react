import { LocalStorageInfrastructure as LocalStorage } from "../../Infrastructure/LocalStorageInfrastructure";
import { News } from "../interface/News.interface";

export class RemoveFavoriteNewsService {
  public static execute(news: News): void {
    const localFavoriteNews = LocalStorage.getFavoriteNews();

    if (localFavoriteNews === null) return;

    let localStorageNews = JSON.parse(localFavoriteNews) as News[];

    localStorageNews = localStorageNews.filter((n) => n.id !== news.id);

    LocalStorage.saveFavoriteNews(JSON.stringify(localStorageNews));
  }
}
