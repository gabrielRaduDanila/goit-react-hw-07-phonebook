import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addNewContact,
  deleteContact,
} from 'features/operations/operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
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
  },
  // extraReducers: {
  //   [fetchContacts.pending](state) {
  //     state.contacts.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.items = action.payload;
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(addNewContact.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addNewContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        const id = action.payload.id;
        const newContacts = state.contacts.items.filter(
          contact => contact.id !== id
        );
        state.contacts.items = newContacts;
      });
  },
});

export const { addFilter } = phonebookSlice.actions;

export default phonebookSlice.reducer;
