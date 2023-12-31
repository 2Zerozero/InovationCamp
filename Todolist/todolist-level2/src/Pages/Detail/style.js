import { styled } from "styled-components";

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    height: 100vh;
    margin: 0 auto;
`

export const Item = styled.div`
    min-height: 360px;
    border: 2px solid #eee;
    border-radius: 12px;
    padding: 20px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            width: 120px;
            height: 40px;
            border: none;
            border-radius: 8px;
            background-color: #4169E1;
            color: #F0F8FF;
        }
    }

    p {
        margin-top: 80px;
    }
`

export const ImgLayout = styled.figure`
    margin: 0 auto;
    width: 200px;
    img {
        width: 100%;
    }
`