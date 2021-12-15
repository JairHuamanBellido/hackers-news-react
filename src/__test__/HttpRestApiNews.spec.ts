import { HttRestApiNews } from "../module/News/Infrastructure/HttpRestApiNews";
import { HttpRestApiNewsResponse as Response } from "../module/News/Infrastructure/interface/HttpRestApiNewsResponse";

describe("News API Rest", () => {
  const httpResponse: Response[] = [
    {
      author: "Jair Orlando",
      created_at: new Date(),
      objectID: "9128312",
      story_id: 2,
      story_title: "How to be a frontend developer",
      story_url: "Url",
    },
  ];

  it("should return a response", () => {
    jest
      .spyOn(HttRestApiNews, "getBy")
      .mockReturnValue(Promise.resolve(httpResponse));

    const expectResponse: Response = {
      author: "Jair Orlando",
      created_at: new Date(),
      objectID: "9128312",
      story_id: 2,
      story_title: "How to be a frontend developer",
      story_url: "Url",
    };

    expect(httpResponse[0].author).toBe(expectResponse.author);
    expect(httpResponse[0].author).not.toBe("Another author");
  });
});
