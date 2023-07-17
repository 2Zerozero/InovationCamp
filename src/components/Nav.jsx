import React, { useState } from 'react'
import * as S from "./Nav_styled";
import {BiSolidMoon} from "react-icons/bi"
import {BsFillSunFill} from "react-icons/bs"
import Login from './Login/Login';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [modal, setModal] = useState(false);
  
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

 // navigate
 const navigate = useNavigate();

 // 뒤로가기
 const handleGoBack = () => {
     navigate('/posts');
 };
  return (
    <>
      <S.NavBox>
          <h4>항구</h4>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <BsFillSunFill size="27" />
              <BiSolidMoon size="27" />
            </div>
            <S.StBtn onClick={openModal}>로그인</S.StBtn>
            <button onClick={handleGoBack}>새 글 작성</button>
          </div>
      </S.NavBox>
      <Login
        modal={modal}
        closeModal={closeModal}
      />
    </>
  )
}

export default Nav