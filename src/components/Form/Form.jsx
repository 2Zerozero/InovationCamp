import { useState } from 'react';
import * as S from './style.js'
import uuid from 'react-uuid';

function Form({todos, setTodos}) {
    // State
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');

    // Submit
    const onClickSubmit = (e) => {
        e.preventDefault();
        const newTodo = ({
            id: uuid(),
            title: inputTitle,
            content: inputContent,
            state: false,
        });
        setTodos([...todos, newTodo])
        setInputTitle('');
        setInputContent('');
    }

    // Handle
    const handleInputTitleChange = (e) => {
        setInputTitle(e.target.value);
    }
    const handleInputContentChange = (e) => {
        setInputContent(e.target.value);
    }

    
    return (
        <S.Form onSubmit={onClickSubmit}>
            <S.Inputs>
                <label>제목</label>
                <input type="text" value={inputTitle} onChange={handleInputTitleChange} />
                <label>내용</label>
                <input type="text" value={inputContent} onChange={handleInputContentChange} />
            </S.Inputs>
            <button>추가하기</button>
        </S.Form>
    )
}

export default Form;