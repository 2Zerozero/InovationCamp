import { styled } from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    background-color: #D5E5F2;
    border-radius: 10px;
    
    button {
        width: 140px;
        height: 40px;
        border: none;
        border-radius: 12px;
        background-color: #4169E1;
        color: #F0F8FF;
        cursor: pointer;
        &:hover{background-color: #F0F8FF;
            color: #4169E1;}
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