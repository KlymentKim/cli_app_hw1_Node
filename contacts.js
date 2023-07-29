const fs = require("node:fs/promises"); // first optional
// import { promises as fs } from "fs"; //second optional
const path = require("path"); //default path
// const crypto = require("crypto"); //id generator
const  {nanoid}  = require('nanoid');

const contactPath = path.join(__dirname, 'db',  'contacts.json');

const listContacts = async()=>{
  //...твій код. Повертає масив контактів.
  const contacts = await fs.readFile(contactPath, 'utf8');
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
    const idConctact = contacts.find(contact => contact.id === contactId);
    if(idConctact === -1){
      return null;
    } 
    const [result] = contacts.splice(index, 1);
    await fs.readFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;

  }
  module.exports = {
    listContacts,
    getAllContacts,
    getContactById,
    addContact,
    removeContact,
  };