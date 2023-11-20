import fs from "fs";
import path from "path";

export function mapDir<T>(rootDir: string, mapFn: (dirName: string) => T) {
  const routesDirectory = path.join(process.cwd(), rootDir);
  return fs
    .readdirSync(routesDirectory, { withFileTypes: true })
    .filter((f) => f.isDirectory())
    .map((dirent) => mapFn(dirent.name));
}
