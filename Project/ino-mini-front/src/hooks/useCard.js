import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTodos, addTodo } from "../api/todos";
import { delete_todo, update_todo } from "../redux/modules/todoSlice";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useCard = () => {
  // 리액트 쿼리 관련 코드\

  const { isLoading, isError, data } = useQuery("todos", getTodos);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const mutateAddTodo = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      console.log("성공");
    },
  });

  const pulsTodo = () => {
    const newTodo = {
      title: title,
      content: content,
    };
    mutateAddTodo.mutate(newTodo);
  };

  const onChangeTitleHandle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContentHandle = (e) => {
    setContent(e.target.value);
  };

  const deleteTodo = (id) => {
    dispatch(delete_todo(id));
  };

  const makeDone = (id) => {
    dispatch(update_todo(id));
  };

  const queryClient = useQueryClient();

  return {
    title,
    content,
    setTitle,
    setContent,
    addTodo,
    deleteTodo,
    makeDone,
    onChangeContentHandle,
    onChangeTitleHandle,
    data,
    pulsTodo,
  };
};
