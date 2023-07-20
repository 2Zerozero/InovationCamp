import React from 'react'
import * as S from './stlye'
import Card from 'react-bootstrap/Card';
function Comment({content, username, onDelete,userIdenticonUrl}) {
    // 댓글 삭제 기능
    const handleDeleteClick = () => {
        onDelete();
    }

    return (
        <S.Comment>
            <S.UserWrap>
                <S.User>
                <Card.Img
                variant="top"
                src={userIdenticonUrl}
                style={{
                  objectFit: 'cover',
                  width: '1cm',
                  height: '1cm',
                  borderRadius: '50%',
                  border: '1px solid black',
                  marginRight: '10px', 
                }}
              />
                    <div>{username}</div>
                </S.User>
                <button onClick={handleDeleteClick}>삭제</button>
            </S.UserWrap>
            <div>{content}</div>
        </S.Comment>   
    )
}

export default Comment