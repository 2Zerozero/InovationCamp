import React, { useState } from 'react'
import * as S from './style'
import Nav from '../../components/Nav'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from '../../components/Comment/Comment';

function Detail() {
    // useState
    const [isLiked, setIsLiked] = useState(false);
    const [commentText, setCommentText] = useState('');
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

    // 핸들러
    const handleLikeButton = async () => {
        try {
            const accessToken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZWFtNmlkIiwiYXV0aCI6IlVTRVIiLCJleHAiOjE2ODk3Njg0NjcsImlhdCI6MTY4OTczMjQ2N30.-YseaCrTLhAdcYdaBe5E4964pHDQUJrLihES4uxRM9g"
            await axios.post(
                `http://52.79.242.223/api/posts/${id}/like`,
                {},
                {
                    headers: {
                        Authorization: accessToken,
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

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            // 댓글 작성 요청
            const accessToken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZWFtNmlkIiwiYXV0aCI6IlVTRVIiLCJleHAiOjE2ODk3Njg0NjcsImlhdCI6MTY4OTczMjQ2N30.-YseaCrTLhAdcYdaBe5E4964pHDQUJrLihES4uxRM9g"
            await axios.post(
                `http://52.79.242.223/api/comments`,
                {
                    postId: id,
                    content: commentText
                },
                {
                    headers: {
                        Authorization: accessToken,
                    },
                }
            )

            // // 리패치
            // refetch();

            // 댓글 작성 후 폼 초기화
            setCommentText('');
        } catch (error) {
            console.log('댓글 작성 실패', error);
        }
    }
    console.log('Detail 페이지 ID:', id); 
    return (
        <S.Wrap>
            <Nav />

            <S.Container >

                {/* 상세페이지 타이틀 */}
                <h1>{cardData.title}</h1>
                <S.Header>
                    <S.User>
                        <div>{cardData.username}</div>
                        <div>{cardData.createdDate}</div>
                    </S.User>
                    <div>
                    {/* 클릭 시 좋아요 처리 */}
                        <S.LikeButton onClick={handleLikeButton}>
                        {isLiked ? '💗' : '🤍'}
                        </S.LikeButton>
                        {cardData.likeCount}
                    </div>
                </S.Header>

                {/* 상세페이지 게시물 */}
                <S.ContentWrap>
                    <img src={cardData.postImageUrl} alt="이미지" />
                    <div>{cardData.content}</div>
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
                            />
                        ))}
                    </S.Comments>
                </S.CommentWrap>

            </S.Container>
        </S.Wrap>
    )
}

export default Detail