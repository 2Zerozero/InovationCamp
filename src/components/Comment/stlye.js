import { styled } from "styled-components";

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgb(221, 221, 221);
`;

export const UserWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 70px;
    height: 30px;
    margin-right: 20px;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: black;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(255, 255, 255, 0.9);
  z-index: 1;
`;
