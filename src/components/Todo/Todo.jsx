import * as S from './style.js'

function Todo ({todos, setTodos, state}) {
    // Button 기능
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

    return (
        <S.Todolist>
        {todos.filter((todo) => todo.state === state).map((todo) => {
            return (
            <S.Todo>
                <h2>{todo.title}</h2>
                <p>{todo.content}</p>
                <S.Buttons>
                    <button onClick={() => onClickDeleteButton(todo.id)}>삭제하기</button>
                    <button onClick={() => onClickStateChangeButton(todo.id)}>{todo.state ? "취소" : "완료"}</button>
                </S.Buttons>
            </S.Todo>
            )
        })}
        </S.Todolist>
    )
}

export default Todo;