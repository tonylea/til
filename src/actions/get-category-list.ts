import fs from "fs/promises";
import path, { join } from "path";
import { CategoryDetail } from "../models/categories";

export async function getCategoryList(
  documentDirectory: string
): Promise<CategoryDetail[]> {
  const contents = await fs.readdir(documentDirectory);
  const categories: CategoryDetail[] = Array();

  for (const file of contents) {
    const fullFilepath: string = path
      .join(documentDirectory, file)
      .replace(path.sep, "/");

    if (
      (await fs.stat(fullFilepath)).isDirectory() &&
      !file.includes(".git*")
    ) {
      categories.push({
        name: file,
        filepath: fullFilepath,
        articles: [],
      });
    }
  }
  return categories;
}
