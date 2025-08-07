export interface Bookmark {
  id: number;
  category_id: number;
  url: string;
  title: string;
  image: string;
  created_at: string;
}

export interface PutCategoryParams {
  "name": string,
  "alias": string
}
