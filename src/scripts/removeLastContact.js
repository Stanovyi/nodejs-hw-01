import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";

export const removeLastContact = async () => {
  const contacts = JSON.parse(await readContacts());

  if (contacts.length) {
    contacts.pop();
    writeContacts(JSON.stringify(contacts, null, 2));
  }
};

removeLastContact();
