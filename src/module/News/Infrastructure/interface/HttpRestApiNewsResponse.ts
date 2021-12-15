export interface HttpRestApiNewsResponse {
  story_id: number;
  author: string;
  story_title: string;
  story_url: string;
  created_at: Date;
  objectID: string;
}
export interface HttpRestApiGeneralResponse {
  hits: HttpRestApiNewsResponse[];
}
