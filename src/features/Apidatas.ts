import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { typefeed } from '../types/Feedbac';

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (todoData:typefeed) => {
    try {
      const response = await axios.post(
        'https://users-36e24-default-rtdb.firebaseio.com/feedback.json',
        todoData
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to create todo.');
    }
  }
);
