import { React, useState, useContext } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

import { AuthContext } from "../../context/AuthContext";
import NavTouchable from "../../components/Boutons/NavTouchable";
import Champ from "../../components/Champ/Champ";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "expo-modules-core";

const description_rose = "La rose est la fleur du rosier, elle se caractérise avant tout par la multiplication de ses pétales imbriqués, qui lui donne sa forme caracteristique.";

const AjoutFleur = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [image, setImage] = useState(null);
    const { new_flower } = useContext(AuthContext);


    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Acceptez !");
            return;
        }


        let pickerResult = await ImagePicker.launchImageLibraryAsync({base64:true});

        if (pickerResult.cancelled === true) {
            alert("Choisissez !");
            return;
        }
 
        
        setSelectedImage({ pickerResult: pickerResult });
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.screen}
        >
            <Champ title="Email" placeholder="coquelicot@email.com" setText={setEmail} />
            <Champ title="Password" placeholder="*******" setText={setPassword} />
            <Champ title="Nom" placeholder="Benzema" setText={setNom} />
            <Champ title="Prenom" placeholder="Karim" setText={setPrenom} />
            <NavTouchable text="Ajouter une photo" onPress={openImagePickerAsync} touchableStyle={styles.addTouchable} />


            {selectedImage ?
                <>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={{ uri: selectedImage.pickerResult.uri }} style={stylesa.thumbnail} />
                        <AntDesign onPress={() => { setSelectedImage(null) }} name="closecircle" size={20} color="black" />
                    </View>
                    <NavTouchable text="Create a flower" onPress={() => { new_flower(nom, description, selectedImage.pickerResult.base64) } } touchableStyle={styles.validate} />
                </> : false}


        </KeyboardAvoidingView>

    );

}


const styles = {
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#BCDAF5'
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
    },
    validate: {
        backgroundColor: '#9B233B',
        width: 300,
        height: 54,
        margin: 15,
        borderWidth: 2,
    }
};

const stylesa = StyleSheet.create({
    /* Other styles hidden to keep the example brief... */
    thumbnail: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
});
export default AjoutFleur;