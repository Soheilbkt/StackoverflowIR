import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { typefeed } from '../types/Feedbac';


type TodoData = [typefeed, string];
export const updateTodo = createAsyncThunk(
  
  'todos/updateTodo',
  async (todoData: TodoData) => {
    try {
      console.log(todoData);

      const response = await axios.put(
        `https://users-36e24-default-rtdb.firebaseio.com/feedback/${todoData[1]}.json`,
        todoData[0]
      );
      location.reload();
      return response.data;
    } catch (error) {
      throw new Error('Failed to update todo.');
    }
  }
);

export const addComment = createAsyncThunk(
  'feedbac/addcomment',
  async (commentitem:[][]) => {
    console.log(commentitem);

    try {
      const response = await axios.put(
        `https://users-36e24-default-rtdb.firebaseio.com/feedback/${commentitem[1]}/comment/.json`,
         commentitem[0]
      );
      location.reload();
      return response.data;
    } catch (eror) {
      throw new Error('Failed to update todo.');
    }
  }
);
