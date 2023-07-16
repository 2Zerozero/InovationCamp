import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {AiFillHeart} from "react-icons/ai"
import * as S from "./Cards_styled"

function Cards({ id, title, isDone, content }) {
  return (
    <S.BootstrapCard>
    <Card key={id} style={{ width: '20rem' }}>
      
      <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/126327414?v=4" style={{ objectFit: 'cover', width: '100%', height: '170px' }}/>
      
      <Card.Body>
        <Card.Title style={{ fontSize:"18px" , fontWeight: "600"}}>{title}</Card.Title>
        <Card.Text>
        {content}
        </Card.Text>
      </Card.Body>

      <ListGroup style={{ fontSize:'10px', marginBottom: '30px',display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <ListGroup.Item>37분전</ListGroup.Item>
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
        <Card.Link >by아이디</Card.Link>
        </div>
        <Card.Link ><AiFillHeart/>0</Card.Link>
      </S.CardBody>
    </Card >
</S.BootstrapCard>
  );
}

export default Cards;


