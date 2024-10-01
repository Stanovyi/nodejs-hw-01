import { createFakeContact } from "../utils/createFakeContact.js";
import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const addOneContact = async () => {
  const contacts = JSON.parse(await fs.readFile(PATH_DB, "utf8"));
  contacts.push(createFakeContact());
  await fs.writeFile(PATH_DB, JSON.stringify(contacts), "utf8");
};

addOneContact();
