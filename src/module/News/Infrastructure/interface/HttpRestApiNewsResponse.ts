export interface HttpRestApiNewsResponse {
  story_id: number;
  author: string | null;
  story_title: string | null;
  story_url: string | null;
  created_at: Date | null;
  objectID: string;
}
export interface HttpRestApiGeneralResponse {
  hits: HttpRestApiNewsResponse[];
}
