import { useDispatch } from 'react-redux';
import * as S from './style.js'
import { delete_todo, update_todo } from '../../redux/modules/todoReducer.js';
import { Link } from 'react-router-dom';

function Todo ({todos, isDone}) {
    // Dispatch
    const dispatch = useDispatch();

    // Button 기능
    const onClickStateChangeButton = (id) => {
        dispatch(update_todo(id));
    }
    
    const onClickDeleteButton = (id) => {
        dispatch(delete_todo(id));
    }

    return (
        <S.Todolist>
        {todos.filter((todo) => todo.isDone === isDone).map((todo) => {
            return (
            <S.Todo key={todo.id}>
                <Link to={`/${todo.id}`}>상세보기</Link>
                <h2>{todo.title}</h2>
                <p>{todo.content}</p>
                <S.Buttons>
                    <button onClick={() => onClickDeleteButton(todo.id)}>삭제하기</button>
                    <button onClick={() => onClickStateChangeButton(todo.id)}>{todo.isDone ? "취소" : "완료"}</button>
                </S.Buttons>
            </S.Todo>
            )
        })}
        </S.Todolist>
    )
}

export default Todo;