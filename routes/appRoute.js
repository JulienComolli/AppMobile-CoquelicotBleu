import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";

import Home from "../views/Accueil/Accueil";
import AddFlowerView from "../views/Fleurs/AjoutFleur";
import FavView from "../views/Favoris/Favoris";
import AddFavView from "../views/Favoris/AjoutFavoris";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false
            }}>

                <Tab.Screen name="Accueil" component={Home}
                    options={{
                        tabBarIcon: () => (<FontAwesome name="home" size={24} color="black" />)
                    }}
                />

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
        </NavigationContainer>
    );
}
