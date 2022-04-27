import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: [
    {
      id: Math.random(),
      title: "title1",
      description: " description title1",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "title2",
      description: " description title2",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "title3",
      description: " description title3",
      isDone: true,
    },
    {
      id: Math.random(),
      title: "title4",
      description: " description title4",
      isDone: true,
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Addtask: (state, action) => {
      state.todolist.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { Addtask } = counterSlice.actions;

export default counterSlice.reducer;
