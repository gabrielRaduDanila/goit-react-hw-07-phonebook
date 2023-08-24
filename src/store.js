import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './features/phonebook/phonebookSlice';
import modalReducer from './features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    modal: modalReducer,
  },
});
