import path from "path";
import {
  ArticleDetail,
  CategoryDetail,
  CategoryList,
} from "../models/categories";
import { getCategoryArticleDetails } from "./get-category-article-details";

export async function getCategoryArticles(
  categories: CategoryDetail[]
): Promise<CategoryList> {
  let articleCount: number = 0;
  const categoriesWithArticleDetails: CategoryDetail[] = Array();

  for (const category of categories) {
    category.articles = await getCategoryArticleDetails(category.filepath);
    categoriesWithArticleDetails.push(category);

    articleCount += category.articles.length;
  }

  return {
    articleCount: articleCount,
    categories: categories,
  };
}
