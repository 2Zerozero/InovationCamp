import { useState } from 'react';
import './App.css';

function App() {
  // state
  const [todos, setTodos] = useState([{
    id: 1,
    content: "리액트는 어렵다",
  }]);

  const [inputTodo, setInputTodo] = useState('');

  // handle
  const handleInputChange = (e) => {
    setInputTodo(e.target.value)
  }
  const handleInputSubmit = (e) => {
    const newTodo = {
      id: todos.length + 1, 
      content: inputTodo,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputTodo('');
  }

  console.log(todos)
  return (
    <div className="main">

      {/* input */}
      <div className="input">
        <input type="text" name="content" value={inputTodo} onChange={handleInputChange}/>
        <button onClick={handleInputSubmit}>추가하기</button>
      </div>

      {/* container */}
      <div className="todolist">
        <h1>Todo List</h1>
        <div className="wrap">
          {todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <h2>{todo.content}</h2>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
