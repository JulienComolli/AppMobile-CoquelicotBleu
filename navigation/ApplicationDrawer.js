import { React, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { AuthContext } from "../context/AuthContext";
import Home from "../views/Accueil/Accueil";
import SectionFleur from "./FlowerTabs";
import APropos from "../views/APropos/APropos";
import Deconnexion from "../views/Deconnexion/Deconnexion"

const Drawer = createDrawerNavigator();

export default function ApplicationDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Accueil" component={Home} />
            <Drawer.Screen name="Accueil" component={Home} />
            <Drawer.Screen name="Mes Fleurs" component={SectionFleur} />
            <Drawer.Screen name="A Propos" component={APropos} />
            <Drawer.Screen name="Deconnexion" component={Deconnexion} />
        </Drawer.Navigator>
    );
}

function DrawerContent({ props }) {
    const { user } = useContext(AuthContext);

    return (
        <View>
            <Text>Helloaaaaaaaaa {user.email}</Text>
        </View>
    )
}
/*
drawerContent}}={props => <DrawerContent {...props} />}
<Drawer.Screen name="Accueil" component={Home} />
<Drawer.Screen name="Mes Fleurs" component={SectionFleur} />
<Drawer.Screen name="A Propos" component={APropos} />
<Drawer.Screen name="Deconnexion" component={Deconnexion} />
*/