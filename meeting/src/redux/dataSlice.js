import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'userData',
  initialState: {
    firstName: [],
    lastName: [],
    age: [],
  },
  reducers: {
    setFirstName(state, action) {
      state.firstName.length <= 0
        ? state.firstName.push(action.payload)
        : state.firstName.shift() && state.firstName.push(action.payload);
    },
    setLastName(state, action) {
      state.lastName.length <= 0
        ? state.lastName.push(action.payload)
        : state.lastName.shift() && state.lastName.push(action.payload);
    },
    setAge(state, action) {
      state.age.length <= 0
        ? state.age.push(action.payload)
        : state.age.shift() && state.age.push(action.payload);
    },
  },
});

export const { setFirstName, setLastName, setAge } = dataSlice.actions;
export default dataSlice.reducer;
