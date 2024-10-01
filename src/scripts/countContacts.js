import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const countContacts = async () => {
  return JSON.parse(await fs.readFile(PATH_DB, "utf8")).length;
};

console.log(await countContacts());
