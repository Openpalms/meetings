import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    counter: 0,
    users: [],
    skipped: [],
  },
  reducers: {
    likeUser(state, action) {
      state.users.push(action.payload);
    },
    skipUser(state, action) {
      state.skipped.push(action.payload);
    },
    deleteUser(state, action) {},
    updateCounter(state, action) {
      state.counter += 1;
    },
  },
});

export const { likeUser, skipUser, deleteUser, updateCounter } =
  cardSlice.actions;
export default cardSlice.reducer;
