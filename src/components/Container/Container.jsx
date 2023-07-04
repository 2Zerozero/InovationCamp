import Todo from "../Todo/Todo";
import * as S from "./style.js"

function Container ({todos, setTodos}) {
    return (
        <S.Container>
            <div className="working">
                <h2>Working .. 🔥</h2>
                <Todo
                    todos={todos}
                    setTodos={setTodos}
                    state={false}
                />
            </div>

            <div className="done">
                <h2>Done .. 🎉</h2>
                <Todo
                    todos={todos}
                    setTodos={setTodos}
                    state={true}
                />
            </div>
        </S.Container>
    )
}

export default Container;