import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

import AddFlowerView from "../views/Fleurs/AjoutFleur";
import FavView from "../views/Favoris/Favoris";
import AddFavView from "../views/Favoris/AjoutFavoris";

const Tab = createBottomTabNavigator();

export default function SectionFleur() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Ajout" component={AddFavView}
                options={{
                    tabBarIcon: () => (<AntDesign name="pluscircle" size={24} color="black" />)
                }}
            />

            <Tab.Screen name="Fleurs" component={AddFlowerView}
                options={{
                    tabBarIcon: () => (<Ionicons name="flower" size={24} color="black" />)
                }}
            />

            <Tab.Screen name="Favoris" component={FavView}
                options={{
                    tabBarIcon: () => (<MaterialIcons name="favorite" size={24} color="black" />)
                }}
            />
        </Tab.Navigator>
    );
}
