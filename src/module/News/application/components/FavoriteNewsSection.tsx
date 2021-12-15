import { useState } from "react";
import { News } from "../../Domain/interface/News.interface";
import { GetFavoriteNewsService as Service } from "../../Domain/service/GetFavoriteNewsService";
import { RemoveFavoriteNewsService } from "../../Domain/service/RemoveFavoriteNewsService";
import List from "./List";
export default function FavoriteNewsSection() {
  const [favoriteNews, setFavoritesNews] = useState<News[] | null>(
    Service.execute()
  );

  const onRemove = (news: News) => {
    setFavoritesNews((favoriteNews as News[]).filter((n) => n.id !== news.id));
    RemoveFavoriteNewsService.execute(news);
  };

  return (
    <>
      <div>
        {favoriteNews && (
          <List news={favoriteNews} onToggleFavorite={onRemove} />
        )}
        {(!favoriteNews || favoriteNews.length < 1) && (
          <div className="empty-container">
            <p>No favorite news</p>
          </div>
        )}
      </div>
    </>
  );
}
