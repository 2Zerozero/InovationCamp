import React from 'react';
import Cards from "./Cards";
import * as S from "./Cards_styled"
import { useTodo } from '../hooks/useCard'

function CardLayout({isDone}) {
    const {
        todo,
      } = useTodo()
      
      return (
        <div>
       <S.CardLists>
          {todo.map((item) => {
            if (item.isDone === isDone) {
              return (
                <Cards
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                isDone={isDone}
                />
              );
            }
            return null;
          })}
    </S.CardLists>
        </div>
  )
}

export default CardLayout