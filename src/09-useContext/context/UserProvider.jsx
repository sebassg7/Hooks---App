import { useState } from "react";
import { UserContex } from "./UserContext";

// const user = {
//     email: 'sbssing7@gmail.com',
//     id: 123,
//     name: 'Sebastian Lopez',
// };

export const UserProvider = ({children}) => {

    const [user, setUser] = useState();

    
  return (
    // <UserContex.Provider value={{hola: 'Mundo', user}}>
    <UserContex.Provider value={{user, setUser}}>
        {children}
    </UserContex.Provider>
  )
};
