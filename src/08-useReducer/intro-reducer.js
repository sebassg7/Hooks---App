const initialState = [{
    id:1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

const todoReducer = (state = initialState, action ={}) => {

    if(action.tpye ==='[TODO] add todo'){
        return[...state, action.playload]
    }

        return state;
};

let todos = todoReducer();

const newTodo = {
    id:2,
    todo: 'Recolectar la piedra del poder',
    done: false,
};

const addTodoAction = {
    type: '[TODO] add todo',
    playload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({state:todos});

