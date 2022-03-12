import React from "react"
import { View, Image, Text } from "react-native";

const Identification = () => {
    return (
        <View style={ idStyle }>
            <Image source={require('../../assets/adaptive-icon.png')} style={imageStyle} />
        
            <View style={buttonStyle}>
                <View style={ {
                    flex:1,
                    fontWeight: 'bold',
                    fontSize: 20,
                    borderColor: 'black',
                    borderWidth: 1,
                    backgroundColor: '#C9C9F5',
                    alignItems: 'center',
                    justifyContent: 'center'
                    } }><Text>SIGN IN</Text></View>
                <View style={ {
                    flex:1,
                    fontWeight: 'bold',
                    fontSize: 20,
                    borderColor: 'black',
                    borderWidth: 1,
                    backgroundColor: '#C1F5B0',
                    alignItems: 'center',
                    justifyContent: 'center'
                    } }><Text>SIGN UP</Text></View>
            </View>
        </View>
    );
}

const idStyle = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#BCDAF5',
    alignSelf: "stretch"
}

const imageStyle = {
    flex: 3,
    width: 250,
    height: 250,
}

const buttonStyle = {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row'
}

export default Identification;