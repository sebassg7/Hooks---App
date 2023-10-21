import { useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() *3,
        description: 'Recolectar la piedra del tiempo',
        done: false,
    }
];

export const TodoApp = () => {

const [todos, dispatch] = useReducer(todoReducer, initialState);


const  handelNewTodo = (todo) => {
    console.log('handleNewTodo',{todo});
};

  return (
    <>
        <h1>TodoApp: 10 <small>pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos}/>
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