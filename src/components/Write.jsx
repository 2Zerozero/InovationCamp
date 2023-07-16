import React from 'react'
import { useTodo } from '../hooks/useCard'
function Write() {

    const{   
        title,
        content,
        addTodo,
        onChangeTitleHandle,
        onChangeContentHandle,
      } = useTodo();
  return (
    <div title={title} content={content}>
    <span>제목:</span>
    <input type="text" value={title} onChange={onChangeTitleHandle} />
    <span>내용:</span>
    <input type="text" value={content} onChange={onChangeContentHandle} />
    <button onClick={addTodo}>추가하기</button>
    </div>
  )
}

export default Write