import React from 'react'
import * as S from './style'
import Nav from '../../components/Nav'

function Detail() {

    return (
        <S.Wrap>
            <Nav />
            <S.Container>

                <h1>타이틀 제목</h1>
                <S.Header>
                    <S.User>
                        <div>유저 이름</div>
                        <div>작성 날짜</div>
                    </S.User>
                    <div>좋아요</div>
                </S.Header>

                <S.Content>
                    예시 텍스트 입니다.
                </S.Content>

                <S.Comment>
                    예시 댓글창 입니다.
                </S.Comment>

            </S.Container>
        </S.Wrap>
    )
}

export default Detail