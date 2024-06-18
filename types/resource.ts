import { Category } from "types";
type YouTubeUrl = `https://www.youtube.com/watch?v=${string}`;

export type Resource = {
  name: string;
  categories: Array<Category>;
  description: string;
  url: YouTubeUrl;
  keywords: Array<string>;
};
