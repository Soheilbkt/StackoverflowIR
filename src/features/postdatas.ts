import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './getData'; // وارد کردن fetchTodos از todosSlice
import { createTodo } from './Apidatas'; // وارد کردن createTodo از todosAPI

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTodo.fulfilled, (state, action:PayloadAction<Todo>) => {
        state.loading = false;
        state.data.push(action.payload as never);
      })
      .addCase(createTodo.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default todosSlice;
