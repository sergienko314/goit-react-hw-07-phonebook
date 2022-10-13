import axios from 'axios';

axios.defaults.baseURL = 'https://633d916af2b0e623dc76da1c.mockapi.io';

export const addContactsAPI = contact => {
  return axios.post('/contacts', contact);
};

export const getContactsAPI = contact => {
  return axios.get('/contacts', contact);
};

export const deleteContactsAPI = id => {
  return axios.delete(`/contacts/${id}`);
};

export const updateContactsAPI = data => {
  return axios.put(`/contacts/${data.id}`, data);
};
