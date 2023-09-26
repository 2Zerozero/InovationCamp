import { useState } from 'react';
import * as S from './style.js'
import { useDispatch } from 'react-redux';
import { add_todo } from '../../redux/modules/todoReducer.js';
import shortid from 'shortid';

function Form() {
    // State
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');

    // dispatch
    const dispatch = useDispatch();

    // Submit
    const onClickSubmit = (e) => {
        e.preventDefault();
        dispatch(add_todo(
            {
                id: shortid.generate(),
                title: inputTitle,
                content: inputContent,
                isDone: false,
            }
        ));
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