import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Miaou from "./components/Miaou";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

// Mon commentaire
const styles = StyleSheet.create({
  Text: {
    color: "#00ff66",
  },
});

function HomeView({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Coquelicot Bleu</Text>
      <Text>L'encyclopédie des fleurs</Text>
      <Button
        title="Ajouter en favori"
        onPress={() => navigation.navigate("AddFav")}
      />
      <Button
        title="Consulter les favoris"
        onPress={() => navigation.navigate("Fav")}
      />
      <Button
        title="Ajouter une fleur"
        onPress={() => navigation.navigate("AddFlower")}
      />
      <Miaou/>
    </View>
  );
}

function AddFavView() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ajouter en favori</Text>
    </View>
  );
}

function FavView() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Voir les favoris</Text>
      <Button
        title="Ajouter de nouvelles fleurs en favori"
        onPress={() => navigation.navigate("AddFav")}
      />
    </View>
  );
}

function AddFlowerView() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ajouter une fleur non-connue</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="AddFav" component={AddFavView} />
        <Stack.Screen name="Fav" component={FavView} />
        <Stack.Screen name="AddFlower" component={AddFlowerView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
