import { View, Text } from "react-native";
import NavBouton from "../../components/Boutons/NavBouton";

const FavView = () => {
    return (
        <View style={ favStyle }>
            <Text>Voir les favoris</Text>
            <NavBouton text="Ajouter de nouvelles fleurs en favori"
                screen="AddFav" />
        </View>
    );
}

const favStyle = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
}

export default FavView;