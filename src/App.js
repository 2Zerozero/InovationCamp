import { useState } from 'react';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Container from './components/Container/Container';

function App() {
  // State 관리
  const [todos, setTodos] = useState([]);

  console.log(todos)
  return (
    <div className="layout">

      {/* header */}
      <Header />

      {/* input */}
      <Form 
        todos={todos}
        setTodos={setTodos}
      />

      {/* container */}
      <Container
        todos={todos}
        setTodos={setTodos}
      />

    </div>
  );
}

export default App;
