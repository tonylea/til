import path from "path";
import { updateReadme } from "./update-readme";

const rootDirectory: string = process.argv[2];
const documentDirectory: string = path.join(rootDirectory, "docs");

export function index(): Promise<any> {
  return updateReadme(rootDirectory, documentDirectory);
}

index();
