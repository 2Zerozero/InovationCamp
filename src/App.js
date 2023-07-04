import { useState } from 'react';

import * as S from './components/Layout/style.js'
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Container from './components/Container/Container';

function App() {
  // State 관리
  const [todos, setTodos] = useState([]);

  console.log(todos)
  return (
    <S.Layout>

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

    </S.Layout>
  );
}

export default App;
