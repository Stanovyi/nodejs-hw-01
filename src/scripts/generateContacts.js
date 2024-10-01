import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";

const generateContacts = async (number) => {
  const data = JSON.parse(await readContacts());
  const contacts = Array(number)
    .fill(undefined)
    .map(() => createFakeContact());

  writeContacts(JSON.stringify([...data, ...contacts], null, 2));
};

generateContacts(5);
