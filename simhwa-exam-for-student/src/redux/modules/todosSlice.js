import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (payload, thunkAPI) => {
    try {
      // 비동기 작업 수행
      await waitTwoSeconds();
      const { id, title, body } = payload;
      const todo = { id, title, body };

      // 성공 시 페이로드 반환
      thunkAPI.dispatch(addTodo(todo));
      return todo;
    } catch (error) {
      // 실패 시 에러 처리
      throw new Error('Failed to add Todo');
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  '__deleteToDo',
  async (payload, thunkAPI) => {
    try {
      const id = payload;

      // 성공 시 페이로드 반환
      thunkAPI.dispatch(deleteTodo(id));
      return ;
    } catch (error) {
      // 실패 시 에러 처리
      throw new Error('Failed to delete Todo')
    }
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.list = state.list.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;

/*
  비동기 사용법

  asynce (payload, thunkAPI) {
    try {
      tunkAPI.dispatch()
    }
    catch (error) {
      throw new Error()
    }
  }
*/