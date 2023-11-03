const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const removeContactsByName = async (name) => {
  const contacts = await listContacts();
  const filteredContacts = contacts.filter((contact) => contact.name !== name);
  await fs.writeFile(contactsPath, JSON.stringify(filteredContacts, null, 2));
};

module.exports = removeContactsByName;
