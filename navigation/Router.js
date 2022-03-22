// Route qui va check si l'user est log ou pas
import AppNavigationDrawer from './ApplicationDrawer';
import LoginNavigation from './AuthStack';
import React, { useContext, useEffect } from 'react';

import AppContext from '../components/ContextProvider';
import { NavigationContainer } from '@react-navigation/native';

export default function Router() {

    const globalVars = useContext(AppContext);

    return (
        <NavigationContainer>
            {globalVars.user ? <AppNavigationDrawer /> : <LoginNavigation />}
        </NavigationContainer>
    )

}