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
    height: 360px;
    border: 2px solid #000000;
    border-radius: 12px;
    padding: 20px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            width: 120px;
            height: 40px;
            border-radius: 8px;
        }
    }

    p {
        margin-top: 80px;
    }
`

