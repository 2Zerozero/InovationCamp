import { styled } from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    background-color: #eee;
    
    button {
        width: 140px;
        height: 40px;
        border: none;
        border-radius: 12px;
        background-color: #3f3f3f;
        color: #ffffff;
    }
`

export const Inputs = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    input {
        width: 240px;
        height: 40px;
        border: none;
        border-radius: 12px;
        padding: 0 15px;
    }
`