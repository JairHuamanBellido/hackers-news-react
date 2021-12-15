import { LocalStorageInfrastructure } from "../../Infrastructure/LocalStorageInfrastructure";
import { News } from "../interface/News.interface";
import { NewsMapper } from "../mapper/NewsMapper";

export class GetFavoriteNewsService {
  public static execute(): News[] | null {
    const favoritesNewsLocalStorage =
      LocalStorageInfrastructure.getFavoriteNews() as string;

    if (favoritesNewsLocalStorage === null) return null;
    return NewsMapper.fromLocalStorageToDomainEntities(
      favoritesNewsLocalStorage
    ).map((n) => ({ ...n, isFavorite: true }));
  }
}
