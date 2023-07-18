import React, { useState, useEffect } from 'react';
import Cards from "./Cards";
import * as S from "./Cards_styled";
import { useCard } from "../hooks/useCard";
import axios from 'axios';

function CardLayout({ isDone }) {
  const { data } = useCard();

  // DB connect Test
  const [datas, setDatas] = useState();

  useEffect( () => {
    const init = async () => {
      try {
        const accessToken = "Bearer%20eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2NVY3UEp1Q3F6WXBUNzl3QVBvSVpKZ3JITGFlUzlIRzR6OUZLOWc2eURtS2xCcGlWMVdsMzhmWk92cDhKSVpIIiwiZXhwIjoxNjg5Njk0OTA3LCJpYXQiOjE2ODk2MDg1MDd9.6RGGfkB1Yg1ulEbW8qHjl5-3FWqtp5gPsVyG36B--gE"
      const res = await axios.get(`http://1.244.223.183/api/food/rank`, 
       {
        headers: {
           Authorization: accessToken,
        },
      }
      );

      // 데이터 전송 성공 후 작업
      console.log('데이터 전송 성공');

      console.log(res.data);
      const data2 = Object.assign([],res.data);
      data2.forEach(element => {
        element.postId = element.id;
        element.title = element.name;
        element.createdDate = Date.now();
        element.content = "123";
        element.username = "456";
        element.likeCount = 12;
        element.isDone = false;
        element.imgSrc = element.imageUrl;
      });
      setDatas(data2);
    
    } catch (error) {
      // 데이터 전송 실패 처리
      console.error('데이터 전송 실패', error);
    }
    }
    init();
  }, [])
  //

  return (
    <div>
      <S.CardLists>
        {datas && datas.map((item) => 
        // {data && data.map((item) => 
        {
            return (
              <Cards
                key={item.id}
                postId={item.postId}
                title={item.title}
                createdDate={item.createdDate}
                content={item.content}
                username={item.username}
                imgSrc={item.imgSrc}
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
