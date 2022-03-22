import {React, useState} from "react"
import { StyleSheet, Text, View, TextInput } from "react-native";
import NavTouchable from "../../components/Boutons/NavTouchable";
import Champ from "../../components/Champ/Champ";
import sign_in from "../../controller/DataBase";

const Connexion = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <View style={styles.screen}>
            <View style={styles.form}>
                <Champ title="Nom d'utilisateur" placeholder="Nom d'utilisateur" setText={setEmail}/>
                <Champ title="Mot de passe" placeholder="**********" password={true} setText={setPassword}/>
                <NavTouchable text="log in" touchableStyle={ styles.signUpTouchable } onPress={()=>log_in(email, password)}/>
            </View>
        </View>
    );
}

const log_in = async(email, password) => {
    console.log("email = " + email)
    console.log("password = " + password)
    sign_in(email, password)
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