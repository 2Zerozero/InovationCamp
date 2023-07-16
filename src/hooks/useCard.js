import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  add_todo,
  delete_todo,
  update_todo,
  setTodo,
} from "../redux/modules/todoSlice";

export const useTodo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const todo = useSelector(setTodo);
  const dispatch = useDispatch();
  const onChangeTitleHandle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContentHandle = (e) => {
    setContent(e.target.value);
  };

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: title,
      content: content,
      isDone: false,
    };
    dispatch(add_todo(newTodo));
    setTitle("");
    setContent("");
  };

  const deleteTodo = (id) => {
    dispatch(delete_todo(id));
  };

  const makeDone = (id) => {
    dispatch(update_todo(id));
  };

  return {
    todo,
    title,
    content,
    setTitle,
    setContent,
    addTodo,
    deleteTodo,
    makeDone,
    onChangeContentHandle,
    onChangeTitleHandle,
  };
};
