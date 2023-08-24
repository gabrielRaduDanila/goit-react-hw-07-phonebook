import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState1 = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const initialState = {
  contacts: [],
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addFilter: (state, { payload }) => {
      const { typedName } = payload;
      state.filter = typedName;
    },
    addContact: (state, { payload }) => {
      const { name, number } = payload;
      const person = {
        id: nanoid(5),
        name: name,
        number: number,
      };
      const newContacts = [...state.contacts, person];
      state.contacts = newContacts;
    },
    removeContact: (state, { payload }) => {
      const { id } = payload;
      const newContacts = state.contacts.filter(contact => contact.id !== id);
      state.contacts = newContacts;
    },
  },
});

export const { addFilter, addContact, removeContact } = phonebookSlice.actions;

export default phonebookSlice.reducer;
