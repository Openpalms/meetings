import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    firstName: [],
    lastName: [],
    email: [],
    password: [],
    age: [],
    avatar: [],
    liked: [],
    description: '',
    isLogined: false,
  },
  reducers: {
    setFirstName(state, action) {
      state.firstName.push(action.payload);
    },
    setLastName(state, action) {
      state.lastName.push(action.payload);
    },
    setEmail(state, action) {
      state.email.push(action.payload);
    },
    setPassword(state, action) {
      state.password.push(action.payload);
    },
    setAge(state, action) {
      state.age.push(action.payload);
    },
    setAvatar(state, action) {
      state.avatar = [action.payload];
    },
    setLiked(state, action) {
      state.liked.push(action.payload);
    },
    setIsLogined(state, action) {
      state.isLogined = !state.isLogined;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setAge,
  setIsLogined,
  setAvatar,
  setLiked,
  setDescription,
} = loginSlice.actions;
export default loginSlice.reducer;
