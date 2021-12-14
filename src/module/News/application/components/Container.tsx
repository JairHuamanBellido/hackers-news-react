import { useState } from "react";
import { TabContext } from "../../../../core/context/Tab.context";
import Tabs from "./Tabs";

export default function Container() {
  const [tabActive, setTabActive] = useState<string>("All");

  const onClickTab = (tab: string): void => {
    setTabActive(tab);
  };
  return (
    <div className="news-container">
      <TabContext.Provider
        value={{ currentTabActive: tabActive, onClickTab: onClickTab }}
      >
        <Tabs labels={["All", "My faves"]} />
      </TabContext.Provider>
    </div>
  );
}
