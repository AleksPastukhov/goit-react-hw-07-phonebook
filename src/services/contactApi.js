import axios from 'axios';

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact".

const BASE_URL = 'https://6419dcedc152063412cdf6b7.mockapi.io/';

export async function fetchContacts() {
  const respons = await axios.get(`${BASE_URL}contacts`);
  return respons.data;
}

export async function addContact() {
  const options = {
    name: 'Fred',
    phone: '+380978985866',
  };

  const respons = await axios.post(`${BASE_URL}contacts`, options);
  return respons.data;
}

export async function deleteContact(id) {
  const respons = await axios.delete(`${BASE_URL}contacts/${id}`);
  return respons.data;
}
