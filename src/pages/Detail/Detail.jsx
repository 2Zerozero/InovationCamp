import React, { useState } from 'react'
import * as S from './style'
import Nav from '../../components/Nav'
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';
import Comment from '../../components/Comment/Comment';


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

function Detail() {
    // navigate
    const navigate = useNavigate();
    // useState
    const [isLiked, setIsLiked] = useState(false);
    const [commentText, setCommentText] = useState('');

// -----------------------------------------게시물 수정----------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
    // 게시물 수정 상태 관리
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState('');
    const [editedTitle, setEditedTitle] = useState('');

    // 게시물 수정 버튼 클릭 시 호출되는 함수
    const handleEditButtonClick = (cardData) => {
        setIsEditing(true);
        setEditedContent(cardData.content);
        setEditedTitle(cardData.title);
};
    // 게시물 수정 완료 버튼 클릭 시 호출되는 함수
    const handleEditComplete = async () => {
        try {
            const accessToken = getCookie("accessToken");
            
            const Data = new FormData();
            Data.append("title", editedTitle);
            Data.append("content", editedContent);
    
            await axios.put(
                `http://52.79.242.223/api/posts/${id}`,
                Data,
                {
                    headers: {
                        Accept: "*/*",
                        "Content-Type": "multipart/form-data", 
                        Authorization: `${accessToken}`,
                    },
                }
            );
    
            // 수정 완료 후 
            refetch();
            console.log('데이터 전송 성공');
    
            // 수정 상태 초기화
            setIsEditing(false);
            setEditedContent('');
            setEditedTitle('');
        } catch (error) {
            console.log('게시물 수정 실패', error);
           
        }
    };


// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------


    // 게시글 ID 조회
    const { id } = useParams();

    // 게시글 데이터
    const { data: cardData, isLoading, isError, refetch } = useQuery(['card', id], () =>
        axios.get(`http://52.79.242.223/api/posts/${id}`).then((res) => res.data)
    );

    // 데이터를 불러오기 전에 로딩 상태를 보여줍니다.
    if (isLoading) {
        return <div>Loading...</div>;
    }
    //데이터를 불러오는 중 에러가 발생했을 때 에러 메시지를 보여줍니다.
    if (isError) {
        return <div>Error fetching card data...</div>;
    }

    // 좋아요 기능
    const handleLikeButton = async () => {
        try {
            const accessToken = getCookie("accessToken");
            console.log(accessToken);
            await axios.post(
                `http://52.79.242.223/api/posts/${id}/like`,
                {},
                {
                    headers: {
                        Accept: "*/*",
                        Authorization: `${accessToken}`,
                    },
                }
            );
            // 좋아요 버튼 상태 변경
            setIsLiked((prevState) => !prevState);

            // 리패치
            refetch();
        } catch (error) {
            console.log('좋아요 처리 실패', error);
        }
    };

    // 게시글 삭제 기능
    const handlePostDelete = async () => {
        try {
            const accessToken = getCookie("accessToken");
            await axios.delete(
                `http://52.79.242.223/api/posts/${id}`,
                {
                    headers: {
                        Accept: "*/*",
                        Authorization: `${accessToken}`,
                    },
                }
            )
            // 리패치
            refetch();
            // 메인페이지로 이동
            navigate('/');
        } catch (error) {
            console.log('게시글 삭제 실패', error);
        }
    }

    // 댓글 추가 기능
    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            // 댓글 작성 요청
            const accessToken = getCookie("accessToken");
            console.log(accessToken);
            // const accessToken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZWFtNmlkIiwiYXV0aCI6IlVTRVIiLCJleHAiOjE2ODk3Njg0NjcsImlhdCI6MTY4OTczMjQ2N30.-YseaCrTLhAdcYdaBe5E4964pHDQUJrLihES4uxRM9g"
            await axios.post(
                `http://52.79.242.223/api/comments`,
                {
                    postId: id,
                    content: commentText
                },
                {
                    headers: {
                        Accept: "*/*",
                        Authorization: `${accessToken}`,
                    },
                }
            )

            // 리패치

            refetch();

            // 댓글 작성 후 폼 초기화
            setCommentText('');
        } catch (error) {
            console.log('댓글 작성 실패', error);
        }
    }


    // 댓글 삭제 기능
    const handleCommentDelete = async (commentId) => {
        try {
            const accessToken = getCookie('accessToken');
            await axios.delete(
                `http://52.79.242.223/api/comments/${commentId}`,
                {
                    headers: {
                        Accept: "*/*",
                        Authorization: `${accessToken}`,
                    },
                }
            )
            // 리패치
            refetch();
        } catch (error) {
            console.log('댓글 삭제 실패', error);
        }
    };

    return (
        <S.Wrap>
            <Nav />
            <S.Container>
                {/* 상세페이지 타이틀 */}
                <h1>
                    {isEditing ? (
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                        />
                    ) : (cardData.title)}
                </h1>
                <S.Header>
                    <S.User>
                  
                        <div>{cardData.username}</div>
                        <div>{cardData.createdDate}</div>
                        <button onClick={handlePostDelete}>삭제</button>

                    </S.User>
                    
                   

                    <div> 
                        {/* 수정버튼 추가 */}
                        <div style={{ display: "flex", marginBottom: "50px" }}>
                        <button style={{ width: "100px" }} onClick={() => handleEditButtonClick(cardData)}>수정</button>
                        {/* 수정 완료 버튼 */}
                        {isEditing && (
                            <button style={{ width: "100px", marginLeft: "20px" }} onClick={handleEditComplete}>수정 완료</button>
                        )}
                        </div>

                        {/* 클릭 시 좋아요 처리 */}
                        <S.LikeButton onClick={handleLikeButton}>
                            {isLiked ? '💗' : '🤍'}
                        </S.LikeButton>
                        {cardData.likeCount}
                    </div>
                </S.Header>
    
                


                {/* 상세페이지 게시물 */}
                <S.ContentWrap>
                    <img
                        src={cardData.postImageUrl}
                        alt="이미지"
                        style={{
                            maxWidth: "600px", 
                            height: "auto",  
                        }}
                    />

                    {/* 수정 상태일 때는 텍스트 에디터 */}
                    {isEditing ? (
                    <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    placeholder="게시물을 수정하세요."
                    style={{
                      width: "600px",
                      minHeight: "100px",
                      border: "1px solid #ccc",
                      padding: "8px",
                      borderRadius: "4px",
                      outline: "none",
                    }}
                  />
                    ) : (
                        // 수정 상태가 아닐 때는 기존 내용
                        <div>{cardData.content}</div>
                    )}
    
                    <S.User>
                        <S.Icon />
                        <div>{cardData.username}</div>
                    </S.User>
                </S.ContentWrap>
    
                {/* 상세페이지 댓글영역 */}
                <S.CommentWrap>
                    <div>총 댓글 갯수 {cardData.commentList.length}</div>
                    <S.Form>
                        <input 
                            type='text'
                            placeholder='댓글을 작성하세요'
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        />
                        <button onClick={handleCommentSubmit}>댓글 작성</button>
                    </S.Form>
    
                    <S.Comments>
                        {/* 댓글 맵핑 */}
                        {cardData.commentList && cardData.commentList.map((comment) => (
                            <Comment 
                                key={comment.commentId}
                                id={comment.commentId}
                                content={comment.content} 
                                username={comment.username}
                                onDelete={() => handleCommentDelete(comment.commentId)}
                            />
                        ))}
                    </S.Comments>
                </S.CommentWrap>
    
                
            </S.Container>
        </S.Wrap>
    )
    
}

export default Detail