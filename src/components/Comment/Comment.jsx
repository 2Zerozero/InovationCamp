import React from 'react'
import * as S from './stlye'

function Comment({content, username, onDelete}) {
    // 댓글 삭제 기능
    const handleDeleteClick = () => {
        onDelete();
    }

    return (
        <S.Comment>
            <S.UserWrap>
                <S.User>
                    <S.Icon />
                    <div>{username}</div>
                </S.User>
                <button onClick={handleDeleteClick}>삭제</button>
            </S.UserWrap>
            <div>{content}</div>
        </S.Comment>   
    )
}

export default Comment