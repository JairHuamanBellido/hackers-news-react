import { LocalStorageInfrastructure as LocalStorage } from "../../Infrastructure/LocalStorageInfrastructure";

export class GetSearchFilterService {
  public static execute(): string | null {
    return LocalStorage.getFilterSelected();
  }
}
