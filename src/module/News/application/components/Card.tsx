import { News } from "../../Domain/interface/News.interface";
import Time from "../../../../assets/icon-time.svg";
import HeartOutlined from "../../../../assets/icon-hearth-outlined.svg";
import HeartFilled from "../../../../assets/icon-hearth-filled.svg";
interface IProps {
  news: News;
  onToggleFavorite(news: News): void;
}

export default function Card(props: IProps) {
  const { news, onToggleFavorite } = props;
  const { author, id, isFavorite, time, title, url } = news;

  const onClick = () => {
    onToggleFavorite(news);
  };
  return (
    <div data-testid="card" className="news-card">
      <a
        data-tesid={`news-${id}`}
        rel="noreferrer"
        href={url}
        target="_blank"
        className="content"
      >
        <div className="label">
          <img src={Time} alt={title} />
          <p>
            {time} by {author}
          </p>
        </div>
        <div className="title">
          <p>{title}</p>
        </div>
      </a>
      <div
        data-testid={`favorite-${id}`}
        onClick={onClick}
        className="favorite"
      >
        <img
          src={isFavorite ? HeartFilled : HeartOutlined}
          alt={`${isFavorite ? "favorite" : "no-favorite"}`}
        />
      </div>
    </div>
  );
}
