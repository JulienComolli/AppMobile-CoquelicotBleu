import React from "react"
import { StyleSheet, Text, View, TextInput } from "react-native";
import NavTouchable from "../../components/Boutons/NavTouchable";
import Champ from "../../components/Champ/Champ";

const Connexion = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.form}>
                <Champ title="Nom d'utilisateur" placeholder="KARIM"/>
                <Champ title="Mot de passe" placeholder="deschamps78" password={true}/>
                <NavTouchable touchableStyle={styles.button} />
            </View>
        </View>
    );
}

export default Connexion;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#BCDAF5'
    },    
    form: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    signInTouchable: {
        backgroundColor: "#C9C9F5"
    },
    button: {
        backgroundColor:"red",
        width: 330,
        height: 52,
    }
});