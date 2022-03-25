import React, { createContext, useState, useMemo, useEffect } from "react";
import { sign_in, sign_up, add_flower, getAllFlowers, updateProfil, getUser, deleteFlower, deleteUser, update_flower, addFav, getFav } from "../firebase/Firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [fleurs, setFleurs] = useState(null);

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
            get_flowers: async () => {
                return await getAllFlowers();
            },
            delete_flower: async (key) => {
                await deleteFlower(key);
            },
            update_flower: async(key, name, description, img) => {
                await update_flower(key, name, description, img);
            },
            add_fav: async (key, userUID) =>{
                addFav(key, userUID);
            },
            get_fav: async (userUID) =>{
                getFav(userUID);
            },
            update_profil: async (userUid, email, password, nom, prenom, img) => {
                await updateProfil(userUid, email, password, nom, prenom, img);
            },
            delete_user: async(userUid) => {
                await deleteUser(userUid);
                setUser(-1);
            },
            get_user: async(userUid) => {
                await getUser(userUid)
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


    // Chargement des auth info de l'utilisateur
    useEffect(async () => {
        try {
            if(user == -1) {
                await AsyncStorage.setItem('user', null);
                setUser(null);
                setUserData(null);
            } else if (user == null) {
                let storedUser = await AsyncStorage.getItem('user');
                setUser(storedUser ? JSON.parse(storedUser) : null);
            } else {
                await AsyncStorage.setItem('user', JSON.stringify(user));
                let usrData = await getUser(user.uid);
                console.log(usrData);
                setUserData(usrData);
            }
        } catch (e) { }
    }, [user]);

    return (
        <AuthContext.Provider value={{ ...authSystem, user }}>
            {children}
        </AuthContext.Provider>
    );
};
