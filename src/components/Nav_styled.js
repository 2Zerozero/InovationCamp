import { styled, css } from "styled-components";

const NavBox = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  font-size: 30px;
  > div :not(:last-child) {
    margin-right: 20px;
  }
`;

const StBtn = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  box-sizing: border-box;
  border: none;
`;

const NavText = styled.div`
  font-family: "Caprasimo", cursive;
`;

export { NavBox, StBtn, NavText };
