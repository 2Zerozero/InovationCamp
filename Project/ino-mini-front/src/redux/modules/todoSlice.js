import { createSlice } from "@reduxjs/toolkit";

// 01 initialState
const initialState = [
  {
    id: 0,
    title: "title",
    content: "content",
    isDone: false,
  },
  {
    id: 1,
    title: "title1",
    content: "content1",
    isDone: false,
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
    isDone: false,
  },
  {
    id: 3,
    title: "title2",
    content: "content2",
    isDone: false,
  },
  {
    id: 4,
    title: "title2",
    content: "content2",
    isDone: false,
  },
];

// 02 Slice
const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    add_todo: (state, action) => {
      return [...state, action.payload];
    },
    delete_todo: (state, action) => {
      return [...state.filter((todo) => todo.id !== action.payload)];
    },
    update_todo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export default todoSlice.reducer; // todoSlice.reducer
export const setTodo = (state) => state.todoSlice; //  useSelector 는 store(함수의 인자)를 전부 가져와요. >> (state) 함수의 매개변수 >> state(store).todoSlice 있는 값만 반환
export const { add_todo, delete_todo, update_todo } = todoSlice.actions; //  todoSlice.actions
