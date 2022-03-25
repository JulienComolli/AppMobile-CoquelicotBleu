import { React, useState, useContext } from "react";
import { View, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

import { AuthContext } from "../../context/AuthContext";
import NavTouchable from "../../components/Boutons/NavTouchable";
import Champ from "../../components/Champ/Champ";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "expo-modules-core";

const Profil = () => {
    const { get_user, update_profil, user, delete_user } = useContext(AuthContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [image, setImage] = useState(user.image);

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

        setImage({ pickerResult: pickerResult });
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.screen}
        >
            <ScrollView contentContainerStyle={styles.screen}>
                <Champ title="Email" placeholder="coquelicot@email.com" setText={setEmail} defaultValue={user.email}/>
                <Champ title="Password" placeholder="*******" password={true} setText={setPassword} />
                {/*<Champ title="Nom" placeholder="Benzema" setText={setNom} defaultValue={user.nom}/>
                <Champ title="Prenom" placeholder="Karim" setText={setPrenom} defaultValue={user.prenom}/>
                <NavTouchable text="Ajouter une photo" onPress={openImagePickerAsync} touchableStyle={styles.addTouchable} />

                {image ?
                    <>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={{ uri: image.pickerResult.uri }} style={styles.picture} />
                            <AntDesign onPress={() => { setImage(null) }} name="closecircle" size={20} color="black" />
                        </View>
                    </> : false}

                <View style={{ flexDirection: "row" }}>
                    */}<NavTouchable text="Enregistrer" onPress={() => { update_profil(user, email, password, nom, prenom, image?.pickerResult.base64) }} touchableStyle={styles.register} />
                    <NavTouchable text="Supprimer" onPress={() => { delete_user(user.uid) }} touchableStyle={styles.delete} />{/*
                </View>*/}
            </ScrollView>

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
    register: {
        backgroundColor: '#AFFA64',
        margin: 15,
        borderWidth: 2,
    },
    delete: {
        backgroundColor: '#FD5E58',
        margin: 15,
        borderWidth: 2,
    },
    picture: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
};

export default Profil;