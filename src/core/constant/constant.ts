const API_REST_ENDPOINT =
  process.env.NODE_ENV === "development"
    ? "http://fake-endpoint:3000/"
    : "https://hn.algolia.com/api/v1/search_by_date";
export { API_REST_ENDPOINT };
