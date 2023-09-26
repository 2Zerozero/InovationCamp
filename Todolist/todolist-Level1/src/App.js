import { useState } from 'react';
import './App.css';

function App() {
  // Todolist State
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState({
    title: '',
    content: '',
    done: false,
  });

  // Todolist 생성로직
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodoInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 브라우저가 일반적으로 수행하는 동작을 막는 역할
    const newTodo = { ...todoInput, id: todos.length + 1 }; //  Todo를 추가하기 위해 호출되는 함수
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoInput({
      title: '',
      content: '',
      done: false,
    });
    console.log(todos)
  }

  // 할 일 이동 로직
  const handleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: true} : todo
      )
    )
  }

  const handleWorking = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: false} : todo
      )
    )
  }

  // 삭제 로직
  // 버튼을 클릭시, todo.id 가 다른 경우에만 true를 리턴해서 필터가 되기때문에, 삭제된다.
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  const workingTodos = todos.filter((todo) => !todo.done) // done 이 false 일 때를 필터로 한다.
  const doneTodos = todos.filter((todo) => todo.done) // done 이 true 일 때를 필터로 한다.


  // 버튼 클릭시 이동 및 삭제
  return (
    <div className='main'>

      {/* 헤더 영역 */}
      <header>
        <div>My Todo List</div>
        <div>React</div>
      </header>

      {/* 할 일 추가 영역 */}
      <form className="createTodo" onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <input type="text" name='title' value={todoInput.title} onChange={handleInputChange} />
          <label>내용</label>
          <input type="text" name='content' value={todoInput.content} onChange={handleInputChange} />
        </div>
        <button type='submit'>추가하기</button>
      </form>

      {/* 할 일 */}
      <div className="working">
        <h1>Working.. 🔥</h1>
        <div className="todos">
        {workingTodos.map((todo) => (
          <div className="todo" key={todo.id}>
            <h2>{todo.title}</h2>
            <div>{todo.content}</div>
            <div className="buttons">
              <button className='btn delete' onClick={() => handleDelete(todo.id)}>삭제하기</button>
              <button className='btn clear' onClick={() => handleDone(todo.id)}>완료</button>
            </div>
          </div>
          ))}
        </div>
      </div>

      {/* 끝낸 일 */}
      <div className="done">
        <h1>Done..! 🎉</h1>
        <div className="todos">
        {doneTodos.map((todo) => (
          <div className="todo" key={todo.id}>
            <h2>{todo.title}</h2>
            <div>{todo.content}</div>
            <div className="buttons">
            <button className='btn delete' onClick={() => handleDelete(todo.id)}>삭제하기</button>
              <button className='btn clear' onClick={() => handleWorking(todo.id)}>취소</button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
