import 'react-native-gesture-handler';
import * as React from "react";
import AppContext from './components/ContextProvider';
import { useState, useEffect } from 'react';
import Router from './navigation/Router';
import { sign_in, sign_up, add_flower } from './controller/DataBase';

export default function App() {
    
    const [user, setUser] = useState(null);

    const unlogUser = () => { 
        setUser(null); 
    }

    const log_in = async(email, password) => {
        setUser(await sign_in(email, password));
    }

    const register = async(email, password) => {
        setUser(await sign_up(email, password));
    }

    const new_flower = async(name, description) => {
        await add_flower(name, description);
    }

    const GLOBAL = {
        user,
        unlogUser,
        log_in,
        register,
        new_flower
    }

    return (
        <AppContext.Provider value={GLOBAL}>
            <Router/>
        </AppContext.Provider>
    );

}
