import { useTodos } from '../hooks';
import { TodoAdd, TodoList } from './index';

export const TodoApp = () => {

const {todos,handelNewTodo, handleRemoveTodo, handleToggleTodo, todosCount, pendingTodosCount} = useTodos();

  return (
    <>
        <h1>TodoApp {todosCount} <small>pendientes {pendingTodosCount}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={handleRemoveTodo}
                    onToggleTodo={handleToggleTodo}
                    />
            </div>
        

            <div className="col-5">
                <h4>Agregar TODOS</h4>
                <hr />
                <TodoAdd onNewTodo={handelNewTodo} />
            </div>

        </div>
        
    </>
  )
};

