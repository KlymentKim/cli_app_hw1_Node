const fs = require("node:fs/promises"); // first optional
// import { promises as fs } from "fs"; //second optional
const path = require("node:path"); //default path
// const crypto = require("crypto"); //id generator
const  {nanoid}  = require('nanoid');

const contactPath = path.join(__dirname, 'contacts.json');

const listContacts = async()=>{
  //...твій код. Повертає масив контактів.
  const contacts = await fs.readFile(contactPath, "utf-8");
  return JSON.parse(contacts);
  };
  // console.log(listContacts);
  
  async function getAllContacts() {
    //Повертає масив контактів.
    const contacts = await listContacts();
    return contacts;
  }

  console.log(listContacts);
  
  async function getAllContacts() {
    //Повертає масив контактів.
    const contacts = await listContacts();
    return contacts;
  }

  async function getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
    const contacts = await listContacts();
    return contacts.find(contact => contact.id === contactId)|| null; 
  };
  console.log(getContactById);

  async function addContact(data) {
    // ...твій код. Повертає об'єкт доданого контакту. 
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      ...data
    };

    contacts.push(newContact);
    await fs.writeFile(contactPath, JSON.stringify(contacts));
    return newContact;
  };
  console.log(addContact);

  async function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.

    const contacts = await listContacts();
    const index = contacts.findIndex((item) => item.id === contactId);
    if (index === -1) {
      return null;
    }
    const [removedContact] = contacts.splice(index, 1);
    await fs.writeFile(contactPath, JSON.stringify(contacts));
    return removedContact;
        
    //second opional remove
    // const contacts = await listContacts();
    // const index = contacts.findIndex(contact => contact.id === contactId);
    // if (index === -1) {
    //   return null;
    // }
    // const newContact = [...contacts.slice(0, index), ...contacts.slice(index + 1)];

    // await addContact(newContact);
    // return contacts[index];

 
  }
  module.exports = {
    listContacts,
    getAllContacts,
    getContactById,
    addContact,
    removeContact,
  };