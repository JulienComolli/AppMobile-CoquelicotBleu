import {React, useState, useContext} from "react";
import { View } from "react-native";

import { AuthContext } from "../../context/AuthContext";
import NavTouchable from "../../components/Boutons/NavTouchable";
import Champ from "../../components/Champ/Champ";


const AjoutFleur = () => {
    const [nom, setNom] = useState();
    const [description, setDescription] = useState();
    const { new_flower } = useContext(AuthContext);

    return (
        <View style={styles.screen}>
            <View style={styles.form}>
                <Champ title="Nom de la fleur" placeholder="Tulipe" setText={setNom}/>
                <Champ title="Description" placeholder={description_rose} setText={setDescription} multiligne={true}  
                champStyle={ styles.description.champ } inputStyle={ styles.description.input} />
                {/* Affiche le contenu des deux champs dans la console. */}
                <NavTouchable text="Ajouter une fleur" onPress={ async () => await new_flower(nom, description) } touchableStyle={ styles.addTouchable }/>
            </View>
        </View>
    );
}


const styles = {
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#BCDAF5'
    },
    form: {
        alignItems: 'center',
    },
    addTouchable: {
        backgroundColor: "#F5D5F0",
        width: 300,
        height: 54,
        margin: 15,
        borderWidth: 2,
    },
    description: {
        champ: {
            height: 130
        },
        input: {
            height: 120
        }
    }
};

let description_rose = "La rose est la fleur du rosier, elle se caractérise avant tout par la multiplication de ses pétales imbriqués, qui lui donne sa forme caractéristique.";
export default AjoutFleur;