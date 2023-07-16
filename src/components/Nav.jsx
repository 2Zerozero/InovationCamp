import React from 'react'
import * as S from "./Nav_styled";
import {BiSolidMoon} from "react-icons/bi"
import {BsFillSunFill} from "react-icons/bs"

function Nav({ openModal }) {
 

  return (
    <>
       <S.NavBox>
          <h4>항구</h4>
          <div  style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <BsFillSunFill size="27" />
              <BiSolidMoon size="27" />
            </div>
            <S.StBtn onClick={openModal}>로그인</S.StBtn>
          </div>
      </S.NavBox>
  
   </>
  )
}

export default Nav