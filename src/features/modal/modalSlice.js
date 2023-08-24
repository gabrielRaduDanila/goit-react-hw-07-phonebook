import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  contactName: null,
  id: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: state => {
      state.isOpen = true;
    },
    closeModal: state => {
      state.isOpen = false;
    },
    setId: (state, { payload }) => {
      const { id } = payload;
      state.id = id;
    },
    setName: (state, { payload }) => {
      const { name } = payload;
      state.contactName = name;
    },
  },
});

export const { openModal, closeModal, setId, setName } = modalSlice.actions;

export default modalSlice.reducer;
