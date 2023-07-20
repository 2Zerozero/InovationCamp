import React, { useState, useEffect } from 'react';
import Cards from "./Cards";
import * as S from "./Cards_styled";
import { useCard } from "../hooks/useCard";
import axios from 'axios';





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

function CardLayout({ trending }) {
  const { data } = useCard();
  // DB connect Test
  const [datas, setDatas] = useState();

  useEffect( () => {
    const init = async () => {
      try {
        let res;
        const accessToken = getCookie("accessToken");
        console.log(accessToken);
        if(trending === false) {
          res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/posts`,
          {
            headers: {
              Accept: "*/*",
              Authorization: `${accessToken}`,
            },
          })
          console.log("트렌딩 받아오는중", res)
        } else {
          res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/posts/trending`,
          {
            headers: {
              Accept: "*/*",
              Authorization: `${accessToken}`,
            },
          })
          console.log("트렌딩 받아오는중", res)
        }

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
        element.postImageUrl = element.imageUrl;
      });
      setDatas(data2);
    
    } catch (error) {
      // 데이터 전송 실패 처리
      console.error('데이터 전송 실패', error);
    }
    }
    init();
  }, [trending])
  //

  return (
    <div>
      <S.CardLists>
        {/* {datas && datas.map((item) =>  */}
        {datas && datas.content.map((item) => 
        {
          return (
            <Cards
              key={item.id}
              postId={item.postId}
              title={item.title}
              createdDate={item.createdDate}
              content={item.content}
              username={item.username}
              postImageUrl={item.postImageUrl}
              likeCount={item.likeCount}
              commentList={item.commentList}
              userIdenticonUrl={item.userIdenticonUrl}
            />
          );
        })}
      </S.CardLists>
    </div>
  );
}

export default CardLayout;