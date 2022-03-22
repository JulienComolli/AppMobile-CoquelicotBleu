import 'react-native-gesture-handler';
import * as React from "react";
import AppContext from './components/ContextProvider';
import { useState, useEffect } from 'react';
import Router from './navigation/Router';
import { sign_in, sign_up } from './controller/DataBase';

export default function App() {
    
    const [user, setUser] = useState(null);

    const unlogUser = () => { 
        setUser(null); 
    }

    const log_in = async(email, password) => {
        setUser(await sign_in(email, password));
    }

    const GLOBAL = {
        user,
        unlogUser,
        log_in,
    }

    return (
        <AppContext.Provider value={GLOBAL}>
            <Router/>
        </AppContext.Provider>
    );

}
