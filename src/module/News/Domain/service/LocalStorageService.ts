import { LocalStorageInfrastructure } from "../../Infrastructure/LocalStorageAdapter";

export class LocalStorageService {
  public static getFilter(): string | null {
    return LocalStorageInfrastructure.filterSelected;
  }

  public static setFilter(filter: string) {
    LocalStorageInfrastructure.saveFilter(filter);
  }
}
