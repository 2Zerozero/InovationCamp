import { styled } from "styled-components";

// 페이지 사이즈
export const Wrap = styled.div`
    width: 1440px;
    margin: 0 auto;
`

// 상세 페이지
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    h1 {
        font-size: 40px;
        font-weight: 600;
    }
`

// 헤더
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 60px;
`

export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

// 게시글
export const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
`

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: black;
`

export const LikeButton = styled.button`
    border: none;
    background: none;
`

// 댓글 창
export const CommentWrap = styled.div`
    margin-top: 60px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    input {
        width: 1400px;
        height: 80px;
        margin: 20px 0px;
        padding-left: 20px;
        border: none;
        outline: none;
        border-radius: 6px;
        box-sizing: border-box;
        background-color: rgb(231, 231, 231);
    }
    button {
        width: 120px;
        height: 50px;
        border: none;
        border-radius: 6px;
        font-size: 20px;
        font-weight: 600;
        color: rgb(255, 255, 255);
        background-color: rgb(39 192 130);

        &:hover {
            background-color: rgb(87 223 168);
        }
    }
`

export const Comments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

