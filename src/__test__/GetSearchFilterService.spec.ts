import { GetSearchFilterService } from "../module/News/Domain/service/GetSearchFilterService";

describe("Get Search Filter Service", () => {
  it("should return vuejs filter", () => {
    localStorage.setItem("filter", "vuejs");

    jest.spyOn(GetSearchFilterService, "execute");

    const response = GetSearchFilterService.execute();
    expect(response).toBe("vuejs");
  });

  it("should return null value", () => {
    localStorage.removeItem("filter");
    jest.spyOn(GetSearchFilterService, "execute");

    const response = GetSearchFilterService.execute();
    expect(response).toBe(undefined);
  });
});
