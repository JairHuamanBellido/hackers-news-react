export class LocalStorageInfrastructure {
  public static filterSelected: string | null = localStorage.getItem("filter");

  public static saveFilter(filter: string) {
    localStorage.setItem("filter", filter);
  }
}
