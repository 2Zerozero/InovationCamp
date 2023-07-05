import { styled } from "styled-components";

export const Todolist = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    min-height: 221px;

    a {
        font-size: 12px;
        color: #ff0000;
        text-decoration: none;
    }
`

export const Todo = styled.div`
    display: flex;
    flex-direction: column;
    width: 270px;
    min-height: 150px;
    padding: 12px 24px 24px;
    border: 2px solid #B0C4DE;
    border-radius: 12px;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        width: 120px;
        height: 40px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        background-color: #4169E1;
        color: #F0F8FF;
        &:hover{background-color: #F0F8FF;
            border-color: #F0F8FF;
            color: #4169E1;}
    }
`

export const More = styled.button`
    margin-top: 10px;
    border: 2px solid #4169E1;
    border-radius: 12px;
    background-color: #4169E1;
    color: #F0F8FF;
    cursor: pointer;
    &:hover{background-color: #F0F8FF;
            border-color: #F0F8FF;
            color: #4169E1;}
`