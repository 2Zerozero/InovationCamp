import React from 'react'
import * as S from './style'
import Nav from '../../components/Nav'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {
    const { id } = useParams();

    const { data: cardData, isLoading, isError } = useQuery(['card', id], () =>
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
                    <div>💗{cardData.likeCount}</div>
                </S.Header>

                {/* 상세페이지 게시물 */}
                <S.ContentWrap>
                    <div>{cardData.content}</div>
                    <S.User>
                        <S.Icon />
                        <div>{cardData.username}</div>
                    </S.User>
                </S.ContentWrap>

                {/* 상세페이지 댓글영역 */}
                <S.CommentWrap>
                    <div>총 댓글 갯수 0</div>
                    <S.Form>
                        <input 
                            type='text'
                            placeholder='댓글을 작성하세요'
                        />
                        <button>댓글 작성</button>
                    </S.Form>

                    <S.Comments>
                        {/* map 으로 뿌려줄 곳 */}
                        <S.Comment>
                            <S.User>
                                <S.Icon />
                                <div>작성자 이름</div>
                                <button>수정</button>
                            </S.User>
                            <div>
                                작성한 댓글에 해당하는 내용입니다.
                            </div>
                        </S.Comment>

                        <S.Comment>
                            <S.UserWrap>
                                <S.User>
                                    <S.Icon />
                                    <div>작성자 이름</div>
                                </S.User>
                                <button>수정</button>
                            </S.UserWrap>
                            <div>
                                작성한 댓글에 해당하는 내용입니다.
                            </div>
                        </S.Comment>

                        <S.Comment>
                            <S.User>
                                <S.Icon />
                                <div>작성자 이름</div>
                                <button>수정</button>
                            </S.User>
                            <div>
                                작성한 댓글에 해당하는 내용입니다.
                            </div>
                        </S.Comment>
                        
                    </S.Comments>
                </S.CommentWrap>

            </S.Container>
        </S.Wrap>
    )
}

export default Detail