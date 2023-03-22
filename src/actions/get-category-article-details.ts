import fs from "fs/promises";
import path from "path";
import { getArticleTitle } from "./get-article-title";
import { ArticleDetail } from "../models/categories";

export async function getCategoryArticleDetails(
  categoryPath: string
): Promise<ArticleDetail[]> {
  const categoryArticles: string[] = await fs.readdir(categoryPath);
  const articleReferences: ArticleDetail[] = [];
  const categoryBasename: string = path.basename(categoryPath);

  for (const article of categoryArticles) {
    const articlePath = path.join(categoryPath, article);
    if ((await fs.stat(articlePath)).isFile() && articlePath.endsWith(".md")) {
      const articleTitle = await getArticleTitle(articlePath);
      const articleBasename: string = path.basename(articlePath);
      const articleRelativePath: string = `./${path.join(
        "docs",
        categoryBasename,
        articleBasename
      )}`;
      articleReferences.push({
        title: articleTitle,
        filepath: articleRelativePath.replace(path.sep, "/"),
      });
    }
  }

  return articleReferences;
}
