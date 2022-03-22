import 'react-native-gesture-handler';
import * as React from "react";
import AppContext from './components/ContextProvider';
import { useState } from 'react';
import Router from './navigation/Router';

export default function App() {
    
    const [userLogged, setUserLogged] = useState(true);

    const logUser = () => { setUserLogged(true); }
    const unlogUser = () => { 
        setUserLogged(false); 
    }

    const GLOBAL = {
        userLogged,
        logUser,
        unlogUser
    }

    return (
        <AppContext.Provider value={GLOBAL}>
                <Router />
        </AppContext.Provider>
    );

}
