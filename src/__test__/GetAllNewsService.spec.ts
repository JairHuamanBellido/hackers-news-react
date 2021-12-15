import { News } from "../module/News/Domain/interface/News.interface";
import { NewsMapper } from "../module/News/Domain/mapper/NewsMapper";
import { GetAllNewsService } from "../module/News/Domain/service/GetAllNewsService";
import { HttRestApiNews } from "../module/News/Infrastructure/HttpRestApiNews";
import { HttpRestApiNewsResponse as HttpResponse } from "../module/News/Infrastructure/interface/HttpRestApiNewsResponse";

describe("Get All News Service", () => {
  const httpResponse: HttpResponse[] = [
    {
      author: "Jair Orlando",
      created_at: new Date(),
      objectID: "9128312",
      story_id: 2,
      story_title: "How to be a frontend developer",
      story_url: "Url",
    },
    {
      author: "Jair Orlando",
      created_at: new Date(),
      objectID: "9128313",
      story_id: 1,
      story_title: null,
      story_url: "asdasd",
    },
  ];

  const news: News[] = [
    {
      author: "Jair Orlando",
      id: "9128312",
      time: "0 minutes ago",
      title: "How to be a frontend developer",
      url: "Url",
    },
  ];

  it("should return 1 news", async () => {
    jest
      .spyOn(HttRestApiNews, "getBy")
      .mockReturnValue(Promise.resolve(httpResponse));

    jest.spyOn(GetAllNewsService, "execute");

    const responseService = await GetAllNewsService.execute({
      page: 0,
      technology: "Angular",
    });
    const searchResult = responseService.some((e) => e.id === news[0].id);

    expect(responseService).toHaveLength(1);
    expect(responseService.length > 1).toBe(false);
    
    expect(searchResult).toBe(true);
    expect(responseService[0].time).toBe("0 minutes ago");
  });
});
