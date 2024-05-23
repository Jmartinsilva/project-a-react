import { UserContext } from "./UserContext"

const user ={
  id:'',
  password:'',
  name:'',
}

export const UserProvider = ({children }) => {
  return (
    <UserContext.Provider value={{hola:'mundo',user: user}}>
        {children }
    </UserContext.Provider>
  )
}