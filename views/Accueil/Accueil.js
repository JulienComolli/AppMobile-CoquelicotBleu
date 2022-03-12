import { View, Text } from "react-native";
import NavBouton from "../../components/Boutons/NavBouton";


const Home = () => {
    return (
        <View style={homeStyle}>
            <Text>Coquelicot Bleu</Text>
            <Text>L'encyclopédie des fleurs</Text>
            <NavBouton text="Ajouter en favori" screen="AddFav" />
            <NavBouton text="Consulter les favoris" screen="Fav" />
            <NavBouton text="Ajouter une fleur" screen="AddFlower" />
            <NavBouton text="S'identifier" screen="Identification" />
        </View>
    );
}

const homeStyle = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
}


export default Home;