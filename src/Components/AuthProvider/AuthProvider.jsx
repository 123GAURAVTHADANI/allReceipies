import { createContext, useState } from "react";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  return (
    <AuthContext.Provider value={{ theme, token }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
