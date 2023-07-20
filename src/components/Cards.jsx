import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {AiFillHeart} from "react-icons/ai"
import * as S from "./Cards_styled"
import { styled } from 'styled-components';
import { Link } from 'react-router-dom'
import formatTimeAgo from '../time';


function Cards({ postId, id, title, isDone, content,createdDate,username,postImageUrl, likeCount, commentList,userIdenticonUrl }) {


  const formattedCreatedDate = formatTimeAgo(createdDate);
  
  

  return (
    <S.BootstrapCard>

      <HoverCard key={id} style={{ width: '15rem' }}>

        <Link to={`/detail/${postId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card key={id} style={{ width: '15rem' }}>
            
            <Card.Img variant="top" src={postImageUrl} style={{ objectFit: 'cover', width: '100%', height: '170px' }}/>
            
            <Card.Body>
              <Card.Title style={{ fontSize:"18px" , fontWeight: "600"}}>{title}</Card.Title>
              <Card.Body>
                {content}
              </Card.Body>
            </Card.Body>


            <ListGroup style={{ fontSize:'10px', marginBottom: '30px',display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <ListGroup.Item style={{fontSize:'14px',marginTop:'10px'}} >{formattedCreatedDate}</ListGroup.Item>
              <ListGroup.Item style={{fontSize:'14px',marginTop:'10px'}}>{commentList.length}개의 댓글</ListGroup.Item>
            </ListGroup>

            <S.CardBody style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', alignItems: 'center'}}>
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
              <Card.Link >{username}</Card.Link>
              </div>
              <HeartLink ><AiFillHeart style={{ color: "red" }}/>{likeCount}</HeartLink>
            </S.CardBody>
          </Card >
        </Link>
      </HoverCard>
  </S.BootstrapCard>
  );
  
}

export default Cards;

const HeartLink = styled(Card.Link)`
  display: flex;
  align-items: center;
  margin-top: 5px; /* 원하는 만큼의 여백 설정 */
`;

const HoverCard = styled(Card)`
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    transform: translateY(-20px);
  }
`;