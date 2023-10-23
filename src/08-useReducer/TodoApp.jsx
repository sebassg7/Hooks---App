import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./Todolist";


const initialState = [

];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {

const [todos, dispatch] = useReducer(todoReducer, initialState, init);

useEffect(() => {
  localStorage.setItem('todos',JSON.stringify(todos));
}, [todos])


const  handelNewTodo = (todo) => {
    const action = {
        type: '[TODO] Add Todo',
        payload: todo,
    };

    dispatch( action );
};

const handleRemoveTodo = (id) => {
    
    // console.log({id});

    dispatch({
        type: '[TODO] Remove Todo',
        payload: id,
    })
};

  return (
    <>
        <h1>TodoApp: 10 <small>pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={handleRemoveTodo}/>
            </div>
        

            <div className="col-5">
                <h4>Agregar TODOS</h4>
                <hr />
                {/* Todo Add */}
                <TodoAdd onNewTodo={handelNewTodo} />
                {/* Fin TodoAdd */}
            </div>

        </div>
        
    </>
  )
}