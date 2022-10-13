import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactsAPI,
  deleteContactsAPI,
  updateContactsAPI,
  getContactsAPI,
} from 'services/ mockAPI';

export const addContact = createAsyncThunk(
  'phonebook/addcontact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await addContactsAPI(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.contact);
    }
  }
);
export const getContacts = createAsyncThunk(
  'phonebook/contact',
  async (_, thunkAPI) => {
    try {
      const myContacts = await getContactsAPI();
      return myContacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.contact);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'phonebook/delateContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteContactsAPI(id);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.contact);
    }
  }
);

export const updateContact = createAsyncThunk(
  'phonebook/updateContact',
  async (dataform, thunkAPI) => {
    try {
      const { data } = await updateContactsAPI(dataform);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.contact);
    }
  }
);
