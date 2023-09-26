import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
import * as S from "./style.js"

function Container () {
    // UseSelector
    const todos = useSelector(store => store.todoReducer)
    return (
        <S.Container>
            <div className="working">
                <h2>Working .. 🔥</h2>
                <Todo
                    todos={todos}
                    isDone={false}
                />
            </div>

            <div className="done">
                <h2>Done .. 🎉</h2>
                <Todo
                    todos={todos}
                    isDone={true}
                />
            </div>
        </S.Container>
    )
}

export default Container;