import { React, useState, useContext } from "react";
import { View, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

import { AuthContext } from "../../context/AuthContext";
import NavTouchable from "../../components/Boutons/NavTouchable";
import Champ from "../../components/Champ/Champ";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "expo-modules-core";

const description_rose = "La rose est la fleur du rosier, elle se caractérise avant tout par la multiplication de ses pétales imbriqués, qui lui donne sa forme caracteristique.";

const AjoutFleur = ({ navigation }) => {
    const [nom, setNom] = useState();
    const [description, setDescription] = useState();
    const { new_flower } = useContext(AuthContext);
    const [selectedImage, setSelectedImage] = useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Acceptez !");
            return;
        }


        let pickerResult = await ImagePicker.launchImageLibraryAsync({ base64: true });

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
            <Champ title="Nom de la fleur" placeholder="Tulipe" setText={setNom} targetState={nom || ""} />
            <Champ title="Description" placeholder={description_rose} setText={setDescription} multiligne={true}
                champStyle={styles.description.champ} inputStyle={styles.description.input}
                targetState={description || ""} />
            <NavTouchable text="Ajouter une photo" onPress={openImagePickerAsync} touchableStyle={styles.addTouchable} />


            {selectedImage ?
                <>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={{ uri: selectedImage.pickerResult.uri }} style={stylesa.thumbnail} />
                        <AntDesign onPress={() => { setSelectedImage(null) }} name="closecircle" size={20} color="black" />
                    </View>
                    <NavTouchable text="Create a flower" onPress={() => {
                        new_flower(nom, description, selectedImage.pickerResult.base64);
                        setDescription("");
                        setSelectedImage("");
                        setNom("");
                        navigation.navigate("Les Fleurs");
                    }} touchableStyle={styles.validate} />
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
        borderWidth: 1,
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
        borderWidth: 1,
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