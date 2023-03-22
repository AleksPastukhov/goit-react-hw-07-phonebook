import axios from 'axios';

const BASE_URL = 'https://6419dcedc152063412cdf6b7.mockapi.io/contacts';

export async function fetchContacts() {
  const respons = await axios.get(BASE_URL);
  return respons.data;
}

export async function addContact() {
  const options = {
    name: 'Fred',
    phone: '+380978985866',
  };

  const respons = await axios.post(BASE_URL, options);
  return respons.data;
}

export async function deleteContact(id) {
  const respons = await axios.delete(`${BASE_URL}${id}`);
  return respons.data;
}
