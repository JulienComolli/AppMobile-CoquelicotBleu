// Route qui va check si l'user est log ou pas
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigation from './appRoute';
import LoginNavigation from './loginRoute';


const Stack = createNativeStackNavigator();

const isUserLogged = true;

export default function MainNavigation() {
    if(isUserLogged) {
        return (
            <AppNavigation />
        )
    } else {
        return (
            <LoginNavigation />
        )
    }

}