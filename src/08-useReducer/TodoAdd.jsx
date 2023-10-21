import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {

  
  const {formState,onInputChange ,description, onResetForm} = useForm({
    description: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if(description.length < 1) return;
    
    const newTodo = {
        id:new Date().getTime(),
        description,
        done:false
    };

    onNewTodo(newTodo) && onNewTodo(newTodo);
    onResetForm();
   
  };
  
  return (
    <>
        <form onSubmit={onSubmit}>
          <input 
              type="text"
              placeholder="¿Qué hay que hacer?"
              className="form-control"
              name="description"
              value={description}
              onChange={onInputChange}
              
          />

          <button 
              type="submit"
              className="btn btn-outline-primary mt-1">
              Agregar
          </button>

      </form>
     </>
  )
}
