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

  // 뒤로가기
  const handleGoBack = () => {
    navigate('/api/posts');
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
          <S.HoverNav  style={{ margin: '50px'}}onClick={handleGoBack}>New Post</S.HoverNav>
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