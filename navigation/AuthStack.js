import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Identification from "../views/Identification/Identification";
import Connexion from "../views/Connexion/connexion";

const Stack = createNativeStackNavigator();

export default function LoginNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Identification" component={Identification} />
            <Stack.Screen name="Connexion" component={Connexion} />
        </Stack.Navigator>
    );
}
