import { useState } from 'react';
import './App.css';
import uuid from 'react-uuid';

function App() {
  // State 관리
  const [todos, setTodos] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

  // Handle
  const handleInputTitleChange = (e) => {
    setInputTitle(e.target.value);

  }
  const handleInputContentChange = (e) => {
    setInputContent(e.target.value);
  }

  // Submit
  const onClickSubmit = (e) => {
    e.preventDefault();
    const newTodo = ({
      id: uuid(),
      title: inputTitle,
      content: inputContent,
      state: false,
    });

    setTodos([...todos, newTodo]);

    setInputTitle('');
    setInputContent('');
  }

  // State Change
  const onClickStateChangeButton = (id) => {
    const updateTodos = todos.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo,
          state: !todo.state,
        };
      }
      return todo;
    })
    setTodos(updateTodos);
  }

  const onClickDeleteButton = (id) => {
    const deleteTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodos);
  }
  console.log(todos)
  return (
    <div className="layout">

      {/* header */}
      <header>
        <div>Todolist</div>
        <div>React</div>
      </header>

      {/* input */}
      <form onSubmit={onClickSubmit}>
        <div className="inputs">
          <label>제목</label>
          <input type="text" value={inputTitle} onChange={handleInputTitleChange} />
          <label>내용</label>
          <input type="text" value={inputContent} onChange={handleInputContentChange} />
        </div>
        <button>추가하기</button>
      </form>

      {/* container */}
      <div className="todolist-container">
        <div className="working">
          <h2>Working .. 🔥</h2>
          <div className="wrap">
            {todos.filter((todo) => !todo.state).map((todo) => {
              return (
                <div className="container">
                  <h2>{todo.title}</h2>
                  <p>{todo.content}</p>
                  <div className="buttons">
                  <button onClick={() => onClickDeleteButton(todo.id)}>삭제하기</button>
                    <button onClick={() => onClickStateChangeButton(todo.id)}>완료</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="done">
          <h2>Done .. 🎉</h2>
          <div className="wrap">
            {todos.filter((todo) => todo.state).map((todo) => {
              return (
                <div className="container">
                  <h2>{todo.title}</h2>
                  <p>{todo.content}</p>
                  <div className="buttons">
                    <button onClick={() => onClickDeleteButton(todo.id)}>삭제하기</button>
                    <button onClick={() => onClickStateChangeButton(todo.id)}>취소</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
