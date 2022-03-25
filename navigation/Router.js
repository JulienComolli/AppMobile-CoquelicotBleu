// Route qui va check si l'user est log ou pas
import AppNavigationDrawer from './ApplicationDrawer';
import LoginNavigation from './AuthStack';
import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';


export default function Router() {

    const { user } = useContext(AuthContext);

    return (
        <NavigationContainer>
            { user != null ? <AppNavigationDrawer /> : <LoginNavigation />}
        </NavigationContainer>
    )

}