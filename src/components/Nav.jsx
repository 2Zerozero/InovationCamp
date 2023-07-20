import React, { useState } from 'react'
import * as S from "./Nav_styled";
import Login from './Login/Login';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/themeProvider';
import ThemeToggle from '../theme/ThemeToggle';
import { Link } from 'react-router-dom'

function Nav({children}) {
  const [ThemeMode, toggleTheme] = useTheme();

  const [modal, setModal] = useState(false);
  
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  // navigate
  const navigate = useNavigate();

  // 글 쓰기
  const handleGoWrite = () => {
    navigate('/write');
  };
  return (
    <>
      <S.NavBox>
        {/* 홈으로 */}
        <Link to="/">
        <img
        src="/img/logo.png"
        alt="로고 이미지"
        style={{ marginTop:'40px', width: '300px', height: '120px' }}
      />
        </Link>
              
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
              DarkMode
            </ThemeToggle>
          </div>

          <S.HoverNav  style={{ margin: '50px'}}onClick={handleGoWrite}>New Post</S.HoverNav>
          <S.HoverNav  onClick={openModal}>Login</S.HoverNav>

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