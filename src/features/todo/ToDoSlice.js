import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos:[{id:1,text:"HEY React Developer's"}]
}
export const ToDoSlice=createSlice({
    name:'to-do',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload
            )
        },
    }
})
export const{addTodo,removeTodo}=ToDoSlice.actions
export default ToDoSlice.reducer