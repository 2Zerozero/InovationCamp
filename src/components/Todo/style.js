import { styled } from "styled-components";

export const Todolist = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    min-height: 205px;
`

export const Todo = styled.div`
    display: flex;
    flex-direction: column;
    width: 270px;
    min-height: 150px;
    padding: 12px 24px 24px;
    border: 2px solid #eee;
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
    }
`