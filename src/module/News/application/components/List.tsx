import { News } from "../../Domain/interface/News.interface";
import Card from "./Card";

interface IProps {
  news: News[];
  onToggleFavorite(news: News): void;
}
export default function List(props: IProps) {
  const { news, onToggleFavorite } = props;
  return (
    <>
      <div className="news-list">
        {news.map((news) => (
          <Card onToggleFavorite={onToggleFavorite} key={news.id} news={news} />
        ))}
      </div>
    </>
  );
}
