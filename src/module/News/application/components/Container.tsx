import { useState } from "react";
import { TabContext } from "../../../../core/context/Tab.context";
import AllNewsSection from "./AllNewsSection";
import FavoriteNewsSection from "./FavoriteNewsSection";
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
        <div className="news-all">
          {tabActive === "All" && <AllNewsSection />}
          {tabActive === "My faves" && <FavoriteNewsSection />}
        </div>
      </TabContext.Provider>
    </div>
  );
}
