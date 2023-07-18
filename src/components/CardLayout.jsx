import React from 'react';
import Cards from "./Cards";
import * as S from "./Cards_styled";
import { useCard } from "../hooks/useCard";

function CardLayout({ isDone }) {
  const { data } = useCard();

  return (
    <div>
      <S.CardLists>
        {data && data.map((item) => {
            return (
              <Cards
                key={item.id}
                postId={item.postId}
                title={item.title}
                createdDate={item.createdDate}
                content={item.content}
                username={item.username}
                likeCount={item.likeCount}
                isDone={isDone}
              />
            );
          
        
        })}
      </S.CardLists>
    </div>
  );
}

export default CardLayout;
