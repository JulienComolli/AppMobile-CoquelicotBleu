import React from "react"
import { useState } from "react";

import { View, Image, TextInput } from "react-native";
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { setEnabled } from "react-native/Libraries/Performance/Systrace";


const Fleur = ({ uri, nom, description, flowerKey, delFlower }) => {
    const [favColor, setFavColor] = useState();
    const [editColor, setEditColor] = useState('black');
    const [enable, setEnable] = useState(false);
    let editPress = () => {
        !enable ? setEnable(true) : setEnable(false);
        editColor === 'black' ? setEditColor('green') : setEditColor('black')
    }

    let favPress = () => {
        favColor === 'black' ? setFavColor('red') : setFavColor('black')
    }

    let update_flower = () => {
        alert("Pas encore implementer !");
        // #TODO enregistrer les modifications de champ
    }

    return (
        <>
            <View style={styles.component}>{/* Composant */}
                <Image source={{ uri: uri }} style={styles.image} />{/* Image*/}

                <View style={styles.containerInfo}>{/* Infos */}
                    <TextInput defaultValue={nom} style={styles.nom} editable={enable} />
                    <TextInput defaultValue={description} style={styles.description} editable={enable} multiline={true} />

                    <View style={styles.containerIcon}>{/* Icones */}
                        <MaterialCommunityIcons style={styles.fav} name="heart-circle" size={17} color={favColor} onPress={() => { favPress() }} />

                        <FontAwesome style={styles.edit} name="pencil" size={17} color={editColor} onPress={() => { editPress() }} />

                        {enable === true ? <FontAwesome name="check-circle" size={17} color="black" style={styles.check} onPress={() => { update_flower() }} /> : null}

                        <MaterialIcons style={styles.delete} name="delete" size={17} color="black" onPress={() => { delFlower(flowerKey) }} />
                    </View>
                </View>
            </View>
        </>
    );
}

export default Fleur;

const styles = {
    component: {
        borderWidth: 1,
        marginTop: 15,
        width: 328,
        height: 200,
        alignSelf: "center",
        backgroundColor: "#C4C4C4",
        flexDirection: "row",
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 15
    },
    containerInfo: {
        flex: 1,
        padding: 10,
        paddingBottom: 5
    },
    image: {
        borderWidth: 1,
        margin: 10,
        flex: 2
    },
    nom: {
        borderWidth: 1,
        flex: 2,
        fontSize: 11,
        fontWeight: '900',
        textAlign: 'center',
        padding: 2,
        marginBottom: 7,
    },
    description: {
        borderWidth: 1,
        flex: 5,
        backgroundColor: "#818FE3",
        marginBottom: 3,
        fontSize: 11,
        fontWeight: '900',
        textAlign: 'center',
        padding: 2,
    },
    containerIcon: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    fav: {
        flex: 1,
        paddingRight: 8
    },
    edit: {
        flex: 1,
        paddingLeft: 8,
        paddingRight: 8
    },
    check: {
        flex: 1,
        paddingLeft: 8,
        paddingRight: 8
    },
    delete: {
        flex: 1,
        paddingLeft: 8,
        paddingRight: 8
    }

};