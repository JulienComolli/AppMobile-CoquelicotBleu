import { View, Text } from "react-native";

const FavView = () => {
    return (
        <View style={ favStyle }>
            <Text>Option bientot disponible !</Text>
        </View>
    );
}

const favStyle = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#BCDAF5'
}

export default FavView;