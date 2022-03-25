import { React, useState, useContext } from "react"
import { View, KeyboardAvoidingView } from "react-native";
import { AuthContext } from "../../context/AuthContext";

import NavTouchable from "../../components/Boutons/NavTouchable";
import Champ from "../../components/Champ/Champ";

const Connexion = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { log_in } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView
            style={styles.screen}
        >
            <View style={styles.screen}>
                <View style={styles.form}>
                    <Champ title="Nom d'utilisateur" placeholder="Nom d'utilisateur" setText={setEmail} />
                    <Champ title="Mot de passe" placeholder="**********" password={true} setText={setPassword} />
                    <NavTouchable text="log in" touchableStyle={styles.signInTouchable} onPress={async () => await log_in(email, password)} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Connexion;

const styles = {
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#BCDAF5'
    },
    form: {
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 15,
    },
    signInTouchable: {
        backgroundColor: "#C9C9F5",
        width: 330,
        height: 54,
        margin: 15,
        borderWidth: 2,
    }
};
