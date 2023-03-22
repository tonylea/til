export interface ArticleDetail {
  title: string;
  filepath: string;
}

export interface CategoryDetail {
  name: string;
  filepath: string;
  articles: ArticleDetail[];
}

export interface CategoryList {
  articleCount: number;
  categories: CategoryDetail[];
}
