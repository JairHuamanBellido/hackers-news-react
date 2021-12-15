import { News } from "../module/News/Domain/interface/News.interface";
import { FindFavoriteNewsService } from "../module/News/Domain/service/FindFavoriteNewsService";
import { RemoveFavoriteNewsService } from "../module/News/Domain/service/RemoveFavoriteNewsService";
import { SaveFavoriteNewsService } from "../module/News/Domain/service/SaveFavoriteNewsService";

describe("Remove Favorite News Service", () => {
  const news: News = {
    author: "Jair Orlando",
    id: "1213",
    time: "2 minutos ago",
    title: "How to be a frontend developer",
    url: "Url",
    isFavorite: false
  };

  beforeAll(() => {
    SaveFavoriteNewsService.execute(news);
  });

  it("shouldn't return a news", () => {
    jest.spyOn(RemoveFavoriteNewsService, "execute");
    jest.spyOn(FindFavoriteNewsService, "execute");
    RemoveFavoriteNewsService.execute(news);

    const query = FindFavoriteNewsService.execute(news);

    expect(query).toBe(false);
    expect(query).not.toBe(true);
  });
});
