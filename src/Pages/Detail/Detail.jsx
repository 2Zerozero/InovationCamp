import React from 'react'
import * as S from './style'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

function Detail() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todoReducer);

  const todo = todos.filter((todo) => todo.id === id)[0];

  console.log('id', id);
  console.log('todos', todos);
  console.log('todo', todo);
  return (
    <S.Wrap>
      <S.Item>
        <div>
          <div>ID : {todo.id}</div>
          <Link to='/'><button>이전으로</button></Link>
        </div>
        <h1>{todo.title}</h1>
        <p>{todo.content}</p>
      </S.Item>
    </S.Wrap>
  )
}

export default Detail