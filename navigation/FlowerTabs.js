import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

import AddFlowerView from "../views/Fleurs/AjoutFleur";
import FavView from "../views/Favoris/Favoris";
import Accueil from "../views/Accueil/Accueil";

const Tab = createBottomTabNavigator();

export default function FlowerTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveBackgroundColor: '#C9C9F5',
            tabBarInactiveBackgroundColor: '#C1F5B0',
            tabBarActiveTintColor: 'black'
        }}>
            <Tab.Screen name="Les Fleurs" component={Accueil}
                options={{
                    tabBarIcon: () => (<AntDesign name="pluscircle" size={24} color="black" />)
                }}
            />

            <Tab.Screen name="Ajout" component={AddFlowerView}
                options={{
                    tabBarIcon: () => (<Ionicons name="flower" size={24} color="black" />)
                }}
            />

            <Tab.Screen name="Vos Favoris" component={FavView}
                options={{
                    tabBarIcon: () => (<MaterialIcons name="favorite" size={24} color="black" />)
                }}
            />
        </Tab.Navigator>
    );
}
