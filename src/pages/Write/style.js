import { styled } from "styled-components";

// 페이지 사이즈
export const Wrap = styled.div`
    width: 1440px;
    margin: 0 auto;
`

// 뒤로가기 버튼
export const Leave = styled.button`
    width: 50px;
    border: none;
    outline: none;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
`

// 게시글 작성란
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input:first-child {
        height: 80px;
        padding-left: 20px;
        font-size: 36px;
        font-weight: bold;
        outline: none;
    }
    input[type='file'] {
        width: 200px;
        margin-top: 20px;
    }
    textarea {
        height: 300px;
        padding: 20px 0px 0px 20px;
        margin-top: 20px;
        outline: none;
    }
`

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const Button = styled.button`
    width: 140px;
    height: 60px;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    background-color: rgb(39, 192, 130);

    &:hover {
        background-color: rgb(87, 223, 168);
    }
`