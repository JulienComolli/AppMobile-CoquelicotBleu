import React, { createContext, useState, useMemo, useEffect } from "react";
import { sign_in, sign_up, add_flower } from "../firebase/Firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
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

    // Chargement des données de l'utilisateur
    useEffect(async () => {
        try {
            if (!user) {
                let userData = await AsyncStorage.getItem('user');
                setUser(userData ? JSON.parse(userData) : null);
            } else {
                await AsyncStorage.setItem('user', JSON.stringify(user));
            }
        } catch (e) { }
    }, [user]);

    return (
        <AuthContext.Provider value={{ ...authSystem, user }}>
            {children}
        </AuthContext.Provider>
    );
};
