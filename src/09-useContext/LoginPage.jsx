import { useContext } from "react";
import { UserContex } from "./context/UserContext";

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContex);
 
    return (
      <>
          <h1>LoginPage</h1>
          <hr />

          <pre>
            {JSON.stringify(user,null,3)}
          </pre>
          
          <button 
            className="btn btn-primary"
            onClick={() => setUser({id:123, name:'Sebastian Lopez',email: 'sbss@mail.com'})}>
            Set user
          </button>
      </>
    )
  }
  