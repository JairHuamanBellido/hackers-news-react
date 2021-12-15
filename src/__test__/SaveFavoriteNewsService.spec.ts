import { News } from "../module/News/Domain/interface/News.interface";
import { FindFavoriteNewsService } from "../module/News/Domain/service/FindFavoriteNewsService";
import { SaveFavoriteNewsService } from "../module/News/Domain/service/SaveFavoriteNewsService";

describe("Save Favorite News Service", () => {
  const news: News = {
    author: "Jair Orlando",
    id: "1213",
    time: "2 minutos ago",
    title: "How to be a frontend developer",
    url: "Url",
    isFavorite: false
  };

  it("should return my news", () => {
    jest.spyOn(SaveFavoriteNewsService, "execute");
    jest.spyOn(FindFavoriteNewsService, "execute");

    SaveFavoriteNewsService.execute(news);

    const query = FindFavoriteNewsService.execute(news);

    expect(query).toBe(true);
    expect(query).not.toBe(false);
  });
});
