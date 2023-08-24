import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64e7067cb0fd9648b78f35c9.mockapi.io';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  // Folosim caracterul "underscore" ca nume al primului parametru
  // deoarece nu avem nevoie de el în această operație
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      // În cazul unei cereri cu succes, vom returna un promise cu date
      return response.data;
    } catch (e) {
      // Dacă cererea eșuează, returnăm un promise care va fi respins
      // și va conține textul erorii
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
