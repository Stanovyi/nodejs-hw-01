import { PATH_DB } from "../constants/contacts.js";
import fs from "fs:node/promises";

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, updatedContacts, "utf8");
  } catch (err) {
    console.error("Error writing to the file", err);
  }
};
