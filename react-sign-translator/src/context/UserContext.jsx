import { createContext, useContext, useState } from "react";

//Context -> exposing
const UserContext = createContext()

export const UseUser = () => {
    return useContext(UserContext) //Returns {user, setUser}
}

//Provider -> managing state
const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const state = {
        user,
        setUser
    }
    return(
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider