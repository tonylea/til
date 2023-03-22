import { CategoryList } from "../models/categories";
import { header, footer } from "../templates/template-text";
import { titleCase } from "../utils/title-case";
import fs from "fs/promises";
import * as path from "path";

export async function writeToReadme(
  articles: CategoryList,
  parentDirectory: string
): Promise<void> {
  const lines: string[] = Array();
  const newLine: string = "\n";

  lines.push(header);
  lines.push(newLine);

  if (articles.articleCount === 0) {
    lines.push(`_${articles.articleCount} TIL. We'll get there soon..._`);
  } else if (articles.articleCount === 1) {
    lines.push(`_${articles.articleCount} TIL and counting..._`);
  } else {
    lines.push(`_${articles.articleCount} TILs and counting..._`);
  }
  lines.push(newLine);

  lines.push(`## Categories`);
  lines.push(newLine);

  for (const category of articles.categories.sort()) {
    lines.push(`- [${titleCase(category.name)}](#${category.name})`);
  }
  lines.push(newLine);

  if (articles.categories.length > 0) {
    lines.push(`---`);
  }
  lines.push(newLine);

  for (const category of articles.categories.sort()) {
    lines.push(`### ${titleCase(category.name)}`);
    lines.push(newLine);
    for (const article of category.articles.sort()) {
      lines.push(`- [${article.title}](${article.filepath})`);
    }
    lines.push(newLine);
  }

  if (articles.categories.length > 0) {
    lines.push(`---`);
    lines.push(newLine);
  }

  const readmeFilePath: string = path.join(parentDirectory, "README.md");
  lines.push(footer);

  await fs.writeFile(readmeFilePath, lines.join(newLine));
}
