export const TodoItem = ({description}) => {
  return (
    <> 
      <li 
          // key={todo.id}
          className="list-group-item d-flex justify-content-between">
          <span className="align-self-center"> {description}</span>
          <button className="btn btn-danger">Borrar</button>
      </li>
    </>
  )
}
