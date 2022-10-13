import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getContacts,
  updateContact,
} from './contactOperations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    editContact: null,
  },
  reducers: {
    editeNewContact: (state, { payload }) => {
      state.editContact = payload;
    },
  },
  extraReducers: {
    [addContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts.push(payload);
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [updateContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = state.contacts.map(contact =>
        contact.id === payload.id ? payload : contact
      );
      state.editContact = null;
    },
    [updateContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default contactSlice.reducer;
export const { editeNewContact } = contactSlice.actions;
