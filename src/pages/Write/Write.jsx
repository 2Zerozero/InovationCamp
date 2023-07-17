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
    };

    // 제목 입력
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    
    // 파일 선택
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // 내용 입력
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    // 서버로 전송
    const handleSubmit = () => {
        // 서버 로직작성 해야됩니다.
        
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
                        onChange={handleTitleChange}
                        placeholder='제목을 입력하세요.'
                    />
                    <input
                        type='file'
                        onChange={handleFileChange}
                    />
                    <textarea
                        value={content}
                        onChange={handleContentChange}
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