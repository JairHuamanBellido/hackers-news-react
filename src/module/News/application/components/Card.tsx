import { News } from "../../Domain/interface/News.interface";
import Time from "../../../../assets/icon-time.svg";
import HeartOutlined from "../../../../assets/icon-hearth-outlined.svg";
interface IProps {
  news: News;
}
export default function Card(props: IProps) {
  const { author, id, time, title, url } = props.news;
  return (
    <div data-testid="card" className="news-card">
      <a data-tesid={`news-${id}`} rel="noreferrer" href={url} target="_blank" className="content">
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
      <div className="favorite">
        <img src={HeartOutlined} alt={title} />
      </div>
    </div>
  );
}
