import React from 'react'
import * as S from './style'
import Nav from '../../components/Nav'

function Detail() {

    return (
        <S.Wrap>
            <Nav />

            <S.Container >

                {/* 상세페이지 타이틀 */}
                <h1>타이틀 제목</h1>
                <S.Header>
                    <S.User>
                        <div>유저 이름</div>
                        <div>작성 날짜</div>
                    </S.User>
                    <div>💗</div>
                </S.Header>

                {/* 상세페이지 게시물 */}
                <S.ContentWrap>
                    <div>예시 텍스트 입니다.</div>
                    <S.User>
                        <S.Icon />
                        <div>작성자 이름</div>
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