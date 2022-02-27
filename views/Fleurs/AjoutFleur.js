import { View, Text } from "react-native";


const AddFlowerView = () => {
    return (
        <View style={flowerViewStyle}>
            <Text>Ajouter une fleur non-connue</Text>
        </View>
    );
}

const flowerViewStyle = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
}


export default AddFlowerView;