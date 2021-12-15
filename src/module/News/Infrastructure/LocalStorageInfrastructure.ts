export class LocalStorageInfrastructure {
  public static filterSelected: string | null = localStorage.getItem("filter");

  public static saveFilter(filter: string) {
    localStorage.setItem("filter", filter);
  }

  public static saveFavoriteNews(news: string) {
    localStorage.setItem("favorite_news", news);
  }

  public static getFavoritesNews() {
    return localStorage.getItem("favorite_news");
  }

  public static getFilterSelected(){
    return localStorage.getItem("filter")
  }
}
