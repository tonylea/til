import { getCategoryList } from "./actions/get-category-list";
import { getCategoryArticles } from "./actions/get-category-articles";
import { writeToReadme } from "./actions/write-to-readme";
import { CategoryDetail } from "./models/categories";

export async function updateReadme(
  rootDirectory: string,
  documentDirectory: string
): Promise<void> {
  const categories: CategoryDetail[] = await getCategoryList(documentDirectory);
  const articles = await getCategoryArticles(categories);

  await writeToReadme(articles, rootDirectory);
}
