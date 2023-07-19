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
  const handleGoWrite = () => {
    navigate('/write');
  };
  return (
    <>
      <S.NavBox>
        {/* 홈으로 */}
        <Link to="/">
        <fontText>항구</fontText>
        </Link>
              
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
              DarkMode
            </ThemeToggle>
          </div>
          <div style={{ cursor: 'pointer' }}  onClick={handleGoWrite}>새 글 작성</div>
          <div style={{ cursor: 'pointer' }}  onClick={openModal}>로그인</div>
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