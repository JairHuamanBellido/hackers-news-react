import { createContext } from "react";

interface IContext {
  onClickTab(name: string): void;
  currentTabActive: string;
}

export const TabContext = createContext<IContext>({} as IContext);
