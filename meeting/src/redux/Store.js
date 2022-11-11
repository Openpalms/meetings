import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import dataReducer from './dataSlice';
import loginReducer from './loginSlice';

export default configureStore({
  reducer: {
    cards: cardReducer,
    userData: dataReducer,
    login: loginReducer,
  },
});
