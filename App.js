import 'react-native-gesture-handler';
import * as React from "react";
import AppContext from './components/ContextProvider';
import { useState } from 'react';
import Router from './navigation/Router';
import { sign_in, sign_up } from './controller/DataBase';

export default function App() {
    
    const [userLogged, setUserLogged] = useState(false);

    const logUser = () => { setUserLogged(true); }
    const unlogUser = () => { 
        setUserLogged(false); 
    }

    const log_in = async(email, password) => {
        console.log("email = " + email)
        console.log("password = " + password)
        if(await sign_in(email, password)){
            console.log("avant logUser : " + userLogged);
            logUser();
            console.log("après logUser : " + userLogged);
        }
    }

    const GLOBAL = {
        userLogged,
        logUser,
        unlogUser,
        log_in,
    }

    return (
        <AppContext.Provider value={GLOBAL}>
            <Router/>
        </AppContext.Provider>
    );

}
