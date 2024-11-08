import { l, clear } from "./devLibs/console";
import path from "path";
import fs from "fs";
clear();

const dir = path.join(__dirname, "src", "Global", "Setting");
function filesList() {
  fs.readdirSync(dir).map((v) => {
    const h = `- **${v}:** <em>${v}</em>`;
    l(h);
  });
}

filesList();
