import { LocalStorageInfrastructure as LocalStorage } from "../../Infrastructure/LocalStorageInfrastructure";

export class SaveSearchFilterService {
  public static execute(filter: string): void {
    LocalStorage.saveFilter(filter);
  }
}
