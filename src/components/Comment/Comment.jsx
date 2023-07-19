import React from 'react'
import * as S from './stlye'

function Comment({content, username}) {
    return (
        <S.Comment>
            <S.UserWrap>
                <S.User>
                    <S.Icon />
                    <div>{username}</div>
                </S.User>
                <button>수정</button>
            </S.UserWrap>
            <div>{content}</div>
        </S.Comment>   
    )
}

export default Comment