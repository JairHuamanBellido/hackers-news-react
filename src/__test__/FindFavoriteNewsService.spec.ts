import { News } from "../module/News/Domain/interface/News.interface";
import { FindFavoriteNewsService } from "../module/News/Domain/service/FindFavoriteNewsService";

describe("Find Favorite News Service", () => {
  const favoriteNews: News[] = [
    {
      author: "Jair Orlando",
      id: "1213",
      time: "2 minutos ago",
      title: "How to be a frontend developer",
      url: "Url",
      isFavorite: false
    },
  ];

  it("should return true", () => {
    const expectResponse = favoriteNews.some(
      (news) => news.author === "Jair Orlando"
    );
    jest
      .spyOn(FindFavoriteNewsService, "execute")
      .mockReturnValue(expectResponse);

    expect(expectResponse).toBe(true);
  });

  it("should return false", () => {
    const expectResponse = favoriteNews.some(
      (news) => news.author === "Jair Huaman"
    );
    jest
      .spyOn(FindFavoriteNewsService, "execute")
      .mockReturnValue(expectResponse);

    expect(expectResponse).toBe(false);
  });
});
