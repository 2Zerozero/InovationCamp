import React, { useState } from 'react';
import * as S from './stlye';
import Card from 'react-bootstrap/Card';
import axios from 'axios'; // axios 라이브러리 import
import { useQueryClient } from 'react-query';

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

  function Comment({ id, content, username, onDelete, userIdenticonUrl }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(content);
  
    const queryClient = useQueryClient(); 
  
    const handleEditButtonClick = () => {
      setIsEditing(true);
      setEditedContent(content);
    };
  
    const handleEditComplete = async () => {
      try {
        const accessToken = getCookie("accessToken");
  
        const requestData = { content: editedContent }; 
  
        await axios.put(
          `http://52.79.242.223/api/comments/${id}`, 
          requestData,
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json", 
              Authorization: `${accessToken}`,
            },
          }
        );
  
    
        await queryClient.refetchQueries('comments');
        setIsEditing(false);
      } catch (error) {
        console.log('댓글 수정 실패', error);
      }
    };
  
    const handleDeleteClick = () => {
      // 댓글 삭제 로직 유지
      onDelete();
    }
  
    const renderEditMode = () => {
      return (
        <div>
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleEditComplete}>수정 완료</button>
        </div>
      );
    }
  
    const renderNormalMode = () => {
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
            <div>
            <button onClick={handleEditButtonClick}>수정</button>
            <button onClick={handleDeleteClick}>삭제</button>
            </div>
          </S.UserWrap>
          <div>{content}</div>
        </S.Comment>
      );
    }
  
    return isEditing ? renderEditMode() : renderNormalMode();
  }
  
  export default Comment;