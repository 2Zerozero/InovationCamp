import React, { useState } from 'react'
import Nav from '../../components/Nav'
import * as S from './style'
import { useNavigate } from 'react-router-dom'
import { FaBackspace } from "react-icons/fa";
import { useCard } from '../../hooks/useCard';
import axios from 'axios';
import { useQueryClient } from 'react-query';


function Write() {

    const{   
        pulsTodo,
    } = useCard();

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
    const queryClient = useQueryClient();

    const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    try {
        await axios.post('http://example.com/api/posts', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    // 데이터 전송 성공 후 작업
    console.log('데이터 전송 성공');

    // 쿼리 업데이트
    queryClient.invalidateQueries('posts');
        } catch (error) {
            // 데이터 전송 실패 처리
            console.error('데이터 전송 실패', error);
        }
    };

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

                    <S.Button onClick={handleSubmit}>작성하기</S.Button>

                </S.ButtonWrap>

            </S.Container>

        </S.Wrap>
    )
}

export default Write