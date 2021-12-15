import { GetSearchFilterService } from "../module/News/Domain/service/GetSearchFilterService";
import { SaveSearchFilterService } from "../module/News/Domain/service/SaveSearchFilterService";

describe("Save Search Filter Service", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("should be saved succesfully", () => {
    jest.spyOn(SaveSearchFilterService, "execute");
    jest.spyOn(GetSearchFilterService, "execute");
    SaveSearchFilterService.execute("angular");

    const filterStorage = GetSearchFilterService.execute();

    expect(filterStorage).toBe("angular");
    expect(filterStorage).not.toBe("vuejs");
    expect(filterStorage).not.toBe("reactjs");
  });
});
