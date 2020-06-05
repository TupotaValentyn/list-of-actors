import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers';


const rootStore = configureStore({
  reducer: appReducer,
  devTools: process.env.NODE_ENV === 'development',
});


export default rootStore;
