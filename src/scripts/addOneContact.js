import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";

export const addOneContact = async () => {
  const contacts = JSON.parse(await readContacts());
  contacts.push(createFakeContact());
  writeContacts(JSON.stringify(contacts, null, 2));
};

addOneContact();
