import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://653bb37ad5d6790f5ec7493c.mockapi.io/',
});

export const requestContacts = async () => {
  const { data } = await contactsInstance.get('/contact');
  return data;
};

export const requestAddContacts = async newContact => {
  const { data } = await contactsInstance.post('/contact', newContact);
  return data;
};

export const requestDeleteContacts = async contactId => {
  const { data } = await contactsInstance.post(`/contact/${contactId}`);
  return data;
};
