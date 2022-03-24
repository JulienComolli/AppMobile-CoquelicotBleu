import React from "react"
import { View, Image, TextInput } from "react-native";
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


const Fleur = ({ uri, nom, description }) => {
    return (
        <>
            <View style={styles.component}>{/* Composant */}
                <Image source={{ uri: uri }} style={styles.image} />{/* Image*/}

                <View style={styles.containerInfo}>{/* Infos */}
                    <TextInput defaultValue={nom} style={styles.nom} editable={false} />
                    <TextInput defaultValue={description} style={styles.description} editable={false} multiline={true} />

                    <View style={styles.containerIcon}>{/* Icones */}
                        <MaterialCommunityIcons style={styles.fav} name="heart-circle" size={17} color="black" />
                        <FontAwesome style={styles.edit} name="pencil" size={17} color="black" />
                        <MaterialIcons style={styles.delete} name="delete" size={17} color="black" />
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
        backgroundColor: "#abcdef",
        padding: 10,
        paddingBottom: 5
    },
    image: {
        borderWidth: 1,
        margin: 10,
        flex: 2,
        backgroundColor: "purple",
    },
    nom: {
        borderWidth: 1,
        flex: 2,
        fontSize: 11,
        fontWeight: '900',
        textAlign: 'center',
        padding: 2,
        backgroundColor: "blue",
        marginBottom: 7,
    },
    description: {
        borderWidth: 1,
        flex: 5,
        backgroundColor: "pink",
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
        paddingLeft: 10,
        paddingRight: 10
    },
    edit: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    delete: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    }

};