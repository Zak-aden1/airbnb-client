import { ReactElement, createContext, useContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthContextProvider = ({ children }: { children: ReactElement}) => {
  // const [state, dispatch] = useReducer()
  const [user, setUser] = useState(null)

  return (
    <AuthContext.Provider value={{user, setUser}}>
      { children }
    </AuthContext.Provider>
  )
}

export const UseAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) throw Error("😢 useAuthContext must be used within a provider")

    return context
}