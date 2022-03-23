import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { basicStyle } from "../../assets/styles/globalStyle.js";
import { AuthContext } from "../../context/AuthContext.js";


export default function Deconnexion() {

    const { unlogUser } = useContext(AuthContext);

    return (
        <View style={basicStyle}>
            <Text>Section à pour se deconnecter.</Text>
            <Button onPress={() => { unlogUser(); }} title="Deconnexion" />
        </View>
    );
}

