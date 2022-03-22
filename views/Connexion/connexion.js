import React from "react"
import { StyleSheet, Text, View, TextInput } from "react-native";
import NavTouchable from "../../components/Boutons/NavTouchable";
import Champ from "../../components/Champ/Champ";

const Connexion = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.form}>
                <Champ title="Nom d'utilisateur" placeholder="KARIM"/>
                <Champ title="Mot de passe" placeholder="**********" password={true}/>
                <NavTouchable text="log in" touchableStyle={ styles.signUpTouchable } />
            </View>
        </View>
    );
}

export default Connexion;

const styles = {
    screen: {
        flex: 1,
        backgroundColor: '#BCDAF5'
    },    
    form: {
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 15,
    },
    signInTouchable: {
        backgroundColor: "#C9C9F5"
    },
    signUpTouchable: {
        backgroundColor: "#C9C9F5",
        width: 330,
        height: 54,
        margin: 15,
        borderWidth: 2,
    }
};