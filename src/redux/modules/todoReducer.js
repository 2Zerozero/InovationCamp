/* 리덕스의 Duck Pattern
01. Action Key : 휴먼에러 방지
02. Action Create : state 를 변경시킬 dispatch.action 의 메서드의 호출을 만듦
03. initial State : 초기값
04. Reducer : dispatch.action 의 호출결과로 실행될 로직을 기록
*/

// 01. Action key
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"
const UPDATE_TODO = "UPDATE_TODO"

// 02. Action Creator
export const add_todo = (payload) => ({
    type: ADD_TODO,
    payload,
})

export const delete_todo = (payload) => ({
    type: DELETE_TODO,
    payload,
})

export const update_todo = (payload) => ({
    type: UPDATE_TODO,
    payload,
})

// 03. initial State
const initialState = [
    {
        id: 1,
        title: "리덕스는 어려워(1)",
        content: "진짜 어렵지..",
        isDone: false,
    },
    {
        id: 2,
        title: "리덕스는 어려워(2)",
        content: "진짜 어렵지..",
        isDone: false,
    },
    {
        id: 3,
        title: "리덕스는 어려워(3)",
        content: "진짜 어렵지..",
        isDone: false,
    }
]

// 04. Reducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return state
        case DELETE_TODO:
            return state
        case UPDATE_TODO:
            return state
        default:
            return state
    }
}