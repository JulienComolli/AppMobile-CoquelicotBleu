import { Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

const NavBouton = ( {text, screen} ) => {
    const navigation = useNavigation();

    return (
        <Button 
        title= { text } 
        onPress={() => {navigation.navigate(screen) }}/>
    );

};

export default NavBouton;