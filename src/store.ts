import { configureStore } from '@reduxjs/toolkit';


import todosSlice from './features/getData';


export default configureStore({
    reducer:{
 
      data:todosSlice.reducer
    }
})
