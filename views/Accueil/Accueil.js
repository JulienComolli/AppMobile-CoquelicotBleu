import { View, Text } from 'react-native';

const Home = () => {

    return (
        <View style={homeStyle}>
            <Text>Coquelicot Bleus</Text>
            <Text>L'encyclopédie des fleurs</Text>
        </View>
    );
}

const homeStyle = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
}


export default Home;