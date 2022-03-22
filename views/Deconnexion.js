import { View, Text, Button } from "react-native";
import { basicStyle } from "../styles/globalStyle.js";
import { useContext } from "react";
import AppContext from "../components/ContextProvider.js";



export default function Deconnexion() {

    const globalVars = useContext(AppContext);

    return (
        <View style={basicStyle}>
            <Text>Section à pour se deconnecter.</Text>
            <Button onPress={() => { globalVars.unlogUser(); }} title="Deconnexion" />
        </View>
    );
}

