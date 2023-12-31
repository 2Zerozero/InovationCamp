import React, { useState } from 'react'
import Nav from '../../components/Nav'
import * as S from './style'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useQueryClient } from 'react-query';
import Drag from '../../components/Drag';




// 쿠키에서 토큰 받기
function getCookie(cookieName){
    var cookieValue=null;
    if(document.cookie){
        var array=document.cookie.split((escape(cookieName)+'='));
        if(array.length >= 2){
            var arraySub=array[1].split(';');
            cookieValue=unescape(arraySub[0]);
        }
    }
    return cookieValue;
}

function Write() {

  

    // useState
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // navigate
    const navigate = useNavigate();

    // 뒤로가기
    // const handleGoBack = () => {
    //     navigate(-1);
    // };

    // 제목 입력
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };


    // 내용 입력
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    // 서버로 전송 formData
    const queryClient = useQueryClient();

    const handleSubmit = async () => {
        const Data = new FormData();
        console.log(file);
        Data.append('title', title);
        Data.append('content', content);
        Data.append('imageFile', file);
        // MultipartFile
        //${process.env.REACT_APP_SERVER_URL}
        // `http://1.244.223.183/api/test/review/form2`, 
        try {
            const accessToken = getCookie("accessToken");
            console.log(accessToken);
            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/posts`, 
            // const res = await axios.post(`http://1.244.223.183/api/test/review/form3`,
                Data , {
                    headers: {
                    Accept: "*/*",
                    Authorization: `${accessToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            }
            );
            // 데이터 전송 성공 후 작업
            console.log('데이터 전송 성공');
            console.log(res);
            navigate("/");
            // 쿼리 업데이트
            queryClient.invalidateQueries('posts');
            // 작성 후 메인페이지로 이동
            navigate('/');
        } catch (error) {
            // 데이터 전송 실패 처리
            console.error('데이터 전송 실패', error);
        }
    };

    return (
        <S.Wrap>
            <Nav />

            <S.Container>
                {/* 뒤로가기
                <S.Leave onClick={handleGoBack}><FaBackspace fontSize={'40px'}/></S.Leave> */}

                {/* 게시글 작성란 */}
                <S.Form>
                    <input 
                        type='text'
                        value={title}
                        onChange={handleTitleChange}
                        placeholder='제목을 입력하세요.'
                    />
                    
                    <Drag  files={file} setFiles={setFile}/>

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