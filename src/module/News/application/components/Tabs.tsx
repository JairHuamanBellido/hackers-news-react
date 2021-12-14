import { useContext } from "react";
import { TabContext } from "../../../../core/context/Tab.context";

interface IProps {
  labels: string[];
}
export default function Tabs(props: IProps) {
  const { labels: lables } = props;

  const { currentTabActive, onClickTab } = useContext(TabContext);

  const isTabActive = (name: string): string => {
    return name === currentTabActive ? "active" : "inactive";
  };

  const onClick = (name: string): void => {
    onClickTab(name);
  };

  return (
    <div className="tab-container">
      {lables.map((label, i) => (
        <div
          data-testid="tab"
          onClick={() => {
            onClick(label);
          }}
          key={i}
          className={`tab ${isTabActive(label)}`}
        >
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}
