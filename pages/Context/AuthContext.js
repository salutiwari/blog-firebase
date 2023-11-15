import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../pages/firebase/config";

export const AuthContext = React.createContext({});
// custom hook
export const useAuthContext = () => {
  return React.useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, isLoading] = React.useState(false);
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser, "123");
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      isLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
