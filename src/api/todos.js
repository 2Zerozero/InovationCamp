// axios 요청이 들어가는 모든 모듈
import axios from "axios";

//조회
const getTodos = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/posts`
  );
  console.log(response.data);
  return response.data;
};

//추가
const addTodo = async (newTodo) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/posts`,
    newTodo
  );
  console.log("response:", response.data);
  return response.data;
};

export { getTodos, addTodo };
