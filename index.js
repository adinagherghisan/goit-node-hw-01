const argv = require('yargs').argv;
const contacts = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      console.table(await contacts.listContacts());
      break;

    case 'get':
      console.log(await contacts.getContactById(id));
      break;

    case 'add':
      await contacts.addContact(name, email, phone);
      console.log(`Contact ${name} added successfully!`);
      break;

    case 'remove':
      await contacts.removeContact(id);
      console.log(`Contact with ID ${id} removed successfully!`);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
