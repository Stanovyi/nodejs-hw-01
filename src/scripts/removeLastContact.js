import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const removeLastContact = async () => {
  const contacts = JSON.parse(await fs.readFile(PATH_DB, "utf8"));

  if (contacts.length) {
    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts), "utf8");
  }
};

removeLastContact();
