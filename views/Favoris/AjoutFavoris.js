import { View, Text } from "react-native";

const AddFavView = () => {
    return (
        <View style={addFavStyle}>
            <Text>Ajouter en favori</Text>
        </View>
    );
}

const addFavStyle = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
}  

export default AddFavView;