import React from "react"
import { View, Image } from "react-native";

import NavTouchable from "../../components/Boutons/NavTouchable";

const Identification = () => {
    return (
        <View style={styles.screen}>
            <Image source={require('../../assets/adaptive-icon.png')} style={styles.image} />
            <View style={styles.touchableContainers}>
                <NavTouchable text="sign in" screen="Connexion" touchableStyle={styles.signInTouchable} />
                <NavTouchable text="sign up" screen="Inscription" touchableStyle={ styles.signUpTouchable } />
            </View>
        </View>
    );
}

export default Identification;

const styles = {
    screen: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#BCDAF5'
    },
    image: {
        flex: 3,
        width: 500,
        height: 500
    },
    touchableContainers: {
        flex: 1,
        alignSelf: 'stretch',
        // buttons on left and right of each others 
        // flexDirection: 'row',
        // buttons on top and bottom of each others
        flexDirection: 'columns'
    },
    signInTouchable: {
        flex: 1,
        backgroundColor: "#C9C9F5"
    },
    signUpTouchable: {
        flex: 1,
        backgroundColor: "#C1F5B0"
    }
};