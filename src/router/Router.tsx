import { Routes, Route } from "react-router-dom";
import NewsPage from "../module/News/application/NewsPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
    </Routes>
  );
}
