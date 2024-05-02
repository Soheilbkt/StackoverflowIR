import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos: any = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await axios.get(
      'https://users-36e24-default-rtdb.firebaseio.com/feedback.json'
    );

    return response.data;
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
    loading: false,
    error: null,
    selectedCat: null,
    valueserach: null,
    seluserid: null,
    feedSelcet: []
  },
  reducers: {
    setSelectedCat(state, action) {
      console.log(action);

      state.selectedCat = action.payload;
    },
    setvalueserach(state, action) {
      state.valueserach = action.payload;
    },
    setValueUserid(state, action) {
      state.seluserid = action.payload;
    },
    selectFeed(state, action) {
      state.feedSelcet = action.payload;
    }
  },
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
      });
  }
});

export default todosSlice;

export const { setSelectedCat, setvalueserach, setValueUserid, selectFeed } =
  todosSlice.actions;
