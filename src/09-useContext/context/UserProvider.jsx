import { UserContex } from "./UserContext";

const user = {
    email: 'sbssing7@gmail.com',
    id: 123,
    name: 'Sebastian Lopez'
}

export const UserProvider = ({children}) => {
  return (
    <UserContex.Provider value={{hola: 'Mundo', user}}>
        {children}
    </UserContex.Provider>
  )
}
