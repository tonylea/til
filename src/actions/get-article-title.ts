import fs from "fs/promises";

export async function getArticleTitle(filepath: string): Promise<string> {
  let title: string = "";

  const fileContent: string = await fs.readFile(filepath, "utf-8");

  for (const line of fileContent.split("\n")) {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith("# ")) {
      title = trimmedLine.substring(2).trim();
    }
  }
  return title;
}
