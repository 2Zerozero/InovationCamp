import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {AiFillHeart} from "react-icons/ai"
import * as S from "./Cards_styled"
import { styled } from 'styled-components';

function Cards({ id, title, isDone, content,createdDate,username,imgSrc, likeCount }) {

  function formatTimeAgo(createdDate) {
    const currentDate = new Date(); // 현재 시간
    const diffInMilliseconds = currentDate - new Date(createdDate); // 현재 시간과 작성 시간의 차이 (밀리초)
  
    // 시간 간격 계산
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000); // 초 단위
    const diffInMinutes = Math.floor(diffInSeconds / 60); // 분 단위
    const diffInHours = Math.floor(diffInMinutes / 60); // 시간 단위
    const diffInDays = Math.floor(diffInHours / 24); // 일 단위
  
    if (diffInDays >= 1) {
      return `${diffInDays}일 전`;
    } else if (diffInHours >= 1) {
      return `${diffInHours}시간 전`;
    } else {
      return `${diffInMinutes}분 전`;
    }
  }
  
  const formattedCreatedDate = formatTimeAgo(createdDate);

  return (
    <S.BootstrapCard>
    <Card key={id} style={{ width: '15rem' }}>
      
      <Card.Img variant="top" src={imgSrc} style={{ objectFit: 'cover', width: '100%', height: '170px' }}/>
      
      <Card.Body>
        <Card.Title style={{ fontSize:"18px" , fontWeight: "600"}}>{title}</Card.Title>
        <Card.Body>
          {content}
        </Card.Body>
      </Card.Body>

      <ListGroup style={{ fontSize:'10px', marginBottom: '30px',display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <ListGroup.Item>{formattedCreatedDate}</ListGroup.Item>
        <ListGroup.Item>0개의 댓글</ListGroup.Item>
      </ListGroup>

      <S.CardBody style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
      <Card.Img
          variant="top"
          src="https://avatars.githubusercontent.com/u/126327414?v=4"
          style={{
            objectFit: 'cover',
            width: '1cm',
            height: '1cm',
            borderRadius: '50%',
            border: '1px solid black',
            marginRight: '10px', 
          }}
        />
        <Card.Link >{username}</Card.Link>
        </div>
        <HeartLink ><AiFillHeart style={{ color: "red" }}/>{likeCount}</HeartLink>
      </S.CardBody>
    </Card >
</S.BootstrapCard>
  );
}

export default Cards;

const HeartLink = styled(Card.Link)`
  display: flex;
  align-items: center;
  margin-top: 5px; /* 원하는 만큼의 여백 설정 */
`;