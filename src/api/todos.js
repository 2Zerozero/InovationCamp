// axios 요청이 들어가는 모든 모듈
import axios from "axios";

const getTodos = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  console.log(response);
  return response;
};

export { getTodos };
