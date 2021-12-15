import { LocalStorageInfrastructure as LocalStorage } from "../../Infrastructure/LocalStorageInfrastructure";
import { News } from "../interface/News.interface";

export class SaveFavoriteNewsService {
  public static execute(news: News): void {
    const localFavoriteNews = LocalStorage.getFavoritesNews();
    if (localFavoriteNews === null) {
      LocalStorage.saveFavoriteNews(JSON.stringify([news]));
      return;
    }

    let localStorageNews = JSON.parse(localFavoriteNews) as News[];

    localStorageNews.push(news);

    LocalStorage.saveFavoriteNews(JSON.stringify(localStorageNews));
  }
}
