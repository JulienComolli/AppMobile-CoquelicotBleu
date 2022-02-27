import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./views/Accueil/Accueil";
import AddFlowerView from "./views/Fleurs/AjoutFleur";
import FavView from "./views/Favoris/Favoris";
import AddFavView from "./views/Favoris/AjoutFavoris";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddFav" component={AddFavView} />
        <Stack.Screen name="Fav" component={FavView} />
        <Stack.Screen name="AddFlower" component={AddFlowerView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
