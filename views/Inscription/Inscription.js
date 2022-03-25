import { React, useState, useContext } from "react"
import { View, KeyboardAvoidingView } from "react-native";

import { AuthContext } from "../../context/AuthContext";
import NavTouchable from "../../components/Boutons/NavTouchable";
import Champ from "../../components/Champ/Champ";

const Inscription = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const { register } = useContext(AuthContext);

    return (

        <KeyboardAvoidingView
            style={styles.screen}
        >
            <View style={styles.screen}>
                <View style={styles.form}>
                    <Champ title="eMail" placeholder="eMail" setText={setEmail} />
                    <Champ title="Mot de passe" placeholder="**********" password={true} setText={setPassword} />
                    <Champ title="Confirme Mot de passe" placeholder="**********" password={true} setText={setConfirmPassword} />
                    <NavTouchable text="log in" touchableStyle={styles.signUpTouchable} onPress={async () => await register(email, password)} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Inscription;

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