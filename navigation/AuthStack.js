import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Identification from "../views/Identification/Identification";

const Stack = createNativeStackNavigator();

export default function LoginNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Identification" component={Identification} />
        </Stack.Navigator>
    );
}
