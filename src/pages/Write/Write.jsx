import React, { useState } from 'react'
import Nav from '../../components/Nav'
import * as S from './style'
import { useNavigate } from 'react-router-dom'
import { FaBackspace } from "react-icons/fa";


function Write() {
    // useState
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // navigate
    const navigate = useNavigate();

    // 뒤로가기
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <S.Wrap>
            <Nav />

            <S.Container>
                {/* 뒤로가기 */}
                <S.Leave onClick={handleGoBack}><FaBackspace fontSize={'40px'}/></S.Leave>

                {/* 게시글 작성란 */}
                <S.Form>
                    <input 
                        type='text'
                        value={title}
                        placeholder='제목을 입력하세요.'
                    />
                    <input
                        type='file'
                    />
                    <textarea
                        value={content}
                        placeholder='오늘의 이야기를 남겨주세요.'
                    />
                </S.Form>

                {/* 전송버튼 */}
                <S.ButtonWrap>
                    <S.Button>작성하기</S.Button>
                </S.ButtonWrap>

            </S.Container>

        </S.Wrap>
    )
}

export default Write