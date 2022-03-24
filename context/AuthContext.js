import React, { createContext, useState, useMemo, useEffect } from "react";
import { sign_in, sign_up, add_flower, getAllFlower, updateProfil, getUser, deleteFlower } from "../firebase/Firebase";
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
            new_flower: async (name, description, img) => {
                await add_flower(name, description, img);
            },
            get_flower: async () => {
                await getAllFlower();
            },
            delete_flower: async (key) => {
                await deleteFlower(key);
            },
            update_profil: async (user, email, password, nom, prenom, img) => {
                await updateProfil(user, email, password, nom, prenom, img);
            },
            get_user: async(key) => {
                await getUser(key)
            },
            retrieve_user: () => {
                // Fonction pour récupérer l'utilisateur en mémoire du téléphone
            },
            unlogUser: () => {
                setUser(-1);
                // Clear la mémoire du téléphone
            },
        }),
        []
    );

    // Chargement des données de l'utilisateur
    useEffect(async () => {
        try {
            if(user == -1) {
                await AsyncStorage.setItem('user', null);
                setUser(null);
            } else if (user == null) {
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
