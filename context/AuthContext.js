import React, { createContext, useState, useMemo } from "react";
import { sign_in, sign_up, add_flower } from "../firebase/Firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authSystem = useMemo(
    () => ({
      log_in: async (email, password) => {
        setUser(await sign_in(email, password));
        // Stocker l'utilisateur en mémoire du téléphone
      },
      register: async (email, password) => {
        setUser(await sign_up(email, password));
      },
      new_flower: async (name, description) => {
        await add_flower(name, description);
      },
      retrieve_user: () => {
        // Fonction pour récupérer l'utilisateur en mémoire du téléphone
      },
      unlogUser: () => {
        setUser(null);
        // Clear la mémoire du téléphone
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ ...authSystem, user }}>
      {children}
    </AuthContext.Provider>
  );
};
