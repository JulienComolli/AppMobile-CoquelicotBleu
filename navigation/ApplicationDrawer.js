import * as React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "../views/Accueil/Accueil";
import SectionFleur from "./FlowerTabs";
import APropos from "../views/APropos/APropos";
import Deconnexion from "../views/Deconnexion/Deconnexion"

const Drawer = createDrawerNavigator();

export default function ApplicationDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Accueil" component={Home} />
            <Drawer.Screen name="Mes Fleurs" component={SectionFleur} />
            <Drawer.Screen name="A Propos" component={APropos} />
            <Drawer.Screen name="Deconnexion" component={Deconnexion} />
        </Drawer.Navigator>
    );
}