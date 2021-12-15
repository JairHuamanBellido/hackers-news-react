import { News } from "../../Domain/interface/News.interface";
import Time from "../../../../assets/icon-time.svg";
import HeartOutlined from "../../../../assets/icon-hearth-outlined.svg";
import HeartFilled from "../../../../assets/icon-hearth-filled.svg";
import { useState } from "react";
import { FindFavoriteNewsService } from "../../Domain/service/FindFavoriteNewsService";
import { SaveFavoriteNewsService } from "../../Domain/service/SaveFavoriteNewsService";
import { RemoveFavoriteNewsService } from "../../Domain/service/RemoveFavoriteNewsService";
interface IProps {
  news: News;
}
export default function Card(props: IProps) {
  const { author, id, time, title, url } = props.news;

  const [isFavorite, setFavorite] = useState<boolean>(
    FindFavoriteNewsService.execute(props.news)
  );

  const onClick = () => {
    setFavorite((prevState) => {
      if (prevState === false) {
        SaveFavoriteNewsService.execute(props.news);
      } else {
        RemoveFavoriteNewsService.execute(props.news);
      }
      return !prevState;
    });
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
      <div onClick={onClick} className="favorite">
        <img src={isFavorite ? HeartFilled : HeartOutlined} alt={title} />
      </div>
    </div>
  );
}
